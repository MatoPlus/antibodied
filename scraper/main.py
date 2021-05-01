import csv
import json
import requests
from requests_oauthlib import OAuth2
from dotenv import dotenv_values
from google.cloud import storage
from google.cloud import language_v1
from time import sleep

def upload_blob(bucket_name, source_file_name, destination_blob_name):
    """Uploads a file to the bucket."""
    # The ID of your GCS bucket
    # bucket_name = "your-bucket-name"
    # The path to your file to upload
    # source_file_name = "local/path/to/file"
    # The ID of your GCS object
    # destination_blob_name = "storage-object-name"

    # Explicitly use service account credentials by specifying the private key file.
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)

    blob.upload_from_filename(source_file_name)

    print(
        "File {} uploaded to {}.".format(
            source_file_name, destination_blob_name
        )
    )

def convert_positivity(prm_x):
    return (-1 if prm_x < 0 else 1) if prm_x else 0

def remove_handles(prm_x):
    return " ".join(filter(lambda n: "@" not in n, prm_x.split()))

def get_tweets_query_from_location(prm_query, prm_lat, prm_lon, resource_url = "https://api.twitter.com/1.1/search/tweets.json", radius = "5km", count = 100):
    rt_filtered_query = "{}%20-filter%3Aretweets".format(prm_query)
    return "{}?q={}&geocode={},{},{}&count={}&tweet_mode=extended&lang=en".format(resource_url, rt_filtered_query, prm_lat, prm_lon, radius, count)

if __name__ == "__main__":
    config_bearer = dotenv_values(".env")["BEARER_TOKEN"]

    # Declare vaccine handles, compute search queries (expects 1 word per handle)
    vaccine_handles = {
        "pfizer" : ["Pfizer"],
        "moderna" : ["Moderna"],
        "az" : ["AstraZeneca", "Zeneca", "AZ"] # Will not use "Astra" as a keyword, as it is linked with a character from Valorant. Nice.
    }
    for vaccine_name in vaccine_handles:
        vaccine_handles[vaccine_name] = "%20OR%20".join(vaccine_handles[vaccine_name])

    # Load city names, latitude, longitude dictionaries into `cities_and_locs`
    cities_and_locs = []
    with open("./scraper/canadacities.csv", "r") as csv_cities:
        cities_reader = csv.DictReader(csv_cities)
        for row in cities_reader:
            cities_and_locs.append(row)

    # Load tweets into their respective JSON file keys within `tweets_body`
    tweets_body = {}
    for in_city in cities_and_locs:
        city_name = in_city["name"]
        for vaccine_name in vaccine_handles:
            json_file_name = "{}+{}".format(city_name, vaccine_name)

            bad_request = True
            while bad_request:
                # Await a response from the Twitter API for querying tweets
                request_url = get_tweets_query_from_location(vaccine_handles[vaccine_name], in_city["latitude"], in_city["longitude"])
                response = requests.get(request_url, headers = {
                    "Authorization" : "Bearer {}".format(config_bearer)
                })
                json_response = response.json()

                # Accumulate `tweets_fmt` as a list of tweets (as dictionaries) with this `city_name` and contains this `vaccine_handle` 
                tweets_fmt = []
                if "statuses" in json_response:
                    # Successful Twitter API request
                    print("\nGood Request: {}".format(json_file_name))
                    bad_request = False

                    for tweet_raw in json_response["statuses"]:
                        tweet_fmt = {
                            "tweetId" : tweet_raw["id"],
                            "profileImg" : tweet_raw["user"]["profile_image_url"],
                            "creationDate" : tweet_raw["created_at"],
                            "user" : tweet_raw["user"]["name"],
                            "handle" : tweet_raw["user"]["screen_name"],
                            "content" : remove_handles(tweet_raw["full_text"].replace('\n', ' '))
                        }
                        tweets_fmt.append(tweet_fmt)
                        print("    Appended Tweet: @{} => \"{} ...\"".format(tweet_fmt["handle"], tweet_fmt["content"][:80]))

                        # 2-second delay to reach the maximum 450 requests per 15 minutes
                        sleep(2)
                else:
                    # Failed Twitter API request
                    print("\nBad Request: {}".format(json_file_name))
                    sleep(60)

            # Store all of `tweets_fmt` in its respective JSON file key
            if json_file_name in tweets_body:
                tweets_body[json_file_name].extend(tweets_fmt)
            else:
                tweets_body[json_file_name] = tweets_fmt

    # Run NLP on each individual tweet and determine its emotion, then add the response back into the tweet's dictionary
    # Use `tweet_cache` to avoid querying and processing duplicate tweets
    lang_client = language_v1.LanguageServiceClient()

    tweet_cache = {}
    for json_file_name in tweets_body:
        for obj_index, tweet_obj in enumerate(tweets_body[json_file_name]):
            tweet_id = tweet_obj["tweetId"]
            if tweet_id not in tweet_cache:
                # Cache sentiment of the text from a tweet (defined uniquely by its ID)
                document = language_v1.Document(content = tweet_obj["content"], type_ = language_v1.Document.Type.PLAIN_TEXT)
                sentiment = lang_client.analyze_sentiment(request = { 'document': document }).document_sentiment
                tweet_cache[tweet_id] = convert_positivity(sentiment.score)
            # Update the tweet's dictionary with the sentiment response
            tweets_body[json_file_name][obj_index]["isPositive"] = tweet_cache[tweet_id]
    
    # Serialize the tweet JSON content, dump JSON into files of "<city name>+<vaccine name>.json"
    for json_file_name in tweets_body:
        location_name, vaccine_name = json_file_name.split("+")
        full_json_cont = {
            "location": location_name,
            "vaccine": vaccine_name,
            "posts": tweets_body[json_file_name]
        }
        with open("./scraper/posts/{}.json".format(json_file_name), "w") as outfile:
            json.dump(full_json_cont, outfile, indent = 4)

    # Upload the locally saved file to GCP Cloud ticket
    print("\n=== Blob Uploading ===\n")
    for json_file_name in tweets_body:
        upload_blob("antibodied-posts", "./scraper/posts/{}.json".format(json_file_name), "{}.json".format(json_file_name))
        sleep(1)

    print("\nRun Finished")
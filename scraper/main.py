import requests
from requests_oauthlib import OAuth1
from dotenv import dotenv_values
from google.cloud import storage
import json

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

def get_tweets_query_from_location(prm_query, prm_lat, prm_lon, resource_url = "https://api.twitter.com/1.1/search/tweets.json", radius = "5km", count = 1):
    rt_filtered_query = "{}%20-filter%3Aretweets".format(prm_query)
    return "{}?q={}&geocode={},{},{}&count={}".format(resource_url, rt_filtered_query, prm_lat, prm_lon, radius, count)

if __name__ == "__main__":
    config = dotenv_values(".env")
    auth = OAuth1(config["CONSUMER_KEY"], config["CONSUMER_SECRET"], config["ACCESS_TOKEN"], config["ACCESS_TOKEN_SECRET"])

    toronto_loc = (43.653908, -79.384293)
    request_url = get_tweets_query_from_location("Pfizer", toronto_loc[0], toronto_loc[1])
    response = requests.get(request_url, auth = auth)

    for tweet_raw in response.json()["statuses"]:
        tweet_fmt = {
            "profileImg" : tweet_raw["user"]["profile_image_url"],
            "creationDate" : tweet_raw["created_at"],
            "user" : tweet_raw["user"]["name"],
            "handle" : tweet_raw["user"]["screen_name"],
            "content" : tweet_raw["text"]
        }
        print(tweet_fmt)
    
    # We have this raw tweet, we can simply serialize it
    with open("./posts/test.json", "w") as outfile:
        json.dump(tweet_fmt, outfile, indent=4)

    # Upload the locally saved file to GCP Cloud ticket
    upload_blob("antibodied-posts", "./posts/test.json", "test.json")

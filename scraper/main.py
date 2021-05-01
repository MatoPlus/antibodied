import requests
from requests_oauthlib import OAuth1
from dotenv import dotenv_values

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
# Covibes
(Formerly known as antibodied)

<p align="center">
  <img src="https://i.imgur.com/mfdAo2g.png" />
</p>

## Inspiration
Taking your COVID-19 shots? Undecided between Pfizer and Moderna? Wouldn't it be great if there was an app that let people share their anecdotes about vaccines? That's what inspired us to create Covibes - a user-friendly web application that displays and filters Twitter tweets based on: location, vaccine, and positive/negative vibes.

## What it does
Covibes is the first application that allows you to search what the public is thinking about COVID-19 vaccines. To start, simply click one of the many relevant city markers placed throughout Canada or type in the search bar to find a specific location. For each city, you can directly see what people are saying about AstraZeneca, Pfizer, and Moderna, and feel confident in your decision on which vaccine you are taking and where you are taking it.

## How we built it
For our backend, we created a Python script that periodically web scrapes Twitter tweets for vaccine-related comments. Through Twitter's API, we were able to grab latitude & longitude coordinates and tweet data (profile picture, user handle, tweet content). Through Google's NLP model, we were able to detect the sentiment of the tweet, separating them into positive and negative categories. We then upload the JSON data to Google Cloud Storage to be read and filtered by the Node.js/Express server written in Typescript.

For our frontend, we used React and Node.js to serve the web application to our users. When a city is selected, a request is made for a specific vaccine and then displayed using Google Maps API.

## Challenges we ran into
First, we had trouble adjusting our scraper model such that it scraped only relevant tweets because the number of tweets was so large. In the beginning, we coded sample data but eventually transitioned to our Python script. Also, we had little to no experience with Google Cloud Platform, so there was a steep learning curve for us to overcome. By completing this project, as a team that has never done web scraping, we learned a lot about scraping social media sites.

## Accomplishments that we're proud of
We are very proud of the final product. Going into an ambitious idea was scary, but it was equally fulfilling upon the completion of a functioning app that doesn't rely on hard-coded data. We are also proud as a team that we were able to learn new tools and applications ranging from Cloud Storage to Node.js. We are proud of how we worked throughout all 48 hours of this hackathon.

## What we learned
1. How to use Typescript in a backend Node.js/Express server
2. How to use GCP with Google Maps, Places, and NLP APIs
3. How to scrape Twitter for interesting data with geolocation data
4. How to use Google Cloud Storage, specifically reading and uploading files
5. Develop a React front-end client

# What's next for Covibes
Worldwide expansion, to countries outside Canada! Also, due to the limited time of the hackathon, we were only able to parse a limited amount of data from a single social media source. In the future, we hope to expand to other Social Media platforms such as Facebook and Instagram and parse larger volumes of data.

# Cricket Correspondence App

This an app to display the latest tweets from 6 prominent cricket twitter profiles.

The app is hosted at: https://gentle-waters-21780.herokuapp.com/

## Running the app locally with tweet data

To run the app you will need to generate a `consumer key` and `consumer secret` to access the twitter api. To do this follow the instructions under **Generating access tokens** at: https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens.html

Once you have you `consumer key` and `consumer secret` fill in these values in 'config_template'.js and rename that file to 'config.js'

Finally load up a terminal and run:
```
yarn
yarn start
```
The app will run on port 8080
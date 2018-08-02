(Size bug on iphone view)

Plan:

1 minute introduction of the website

Hi, I'm going to talk throught the development of this cricket correspondance video e.t.c

Talk through the javascript
One of the most interesting features of the website is the iteraction. What i mean by that is what happens behind the scenes when i click on a twitter profile panel and load the tweets into the right hand side of the screen. This is the part of the website that I'm going to start the lesson by explaining.

So to create this interaction we need to use javascript and it's going to do three things really, which are:

- load the data for the tweets
- create html based on the tweets and render that html to the page
- link it all together by attaching a click event to the tile elements on the page

To write the code for that I've create 3 javascript objects, one for each part of the JavaScript code. The reason I've done that is to make the code readible and easy to understand, to keep each piece of funcionality seperate from the other so it's easier to maintain and if we need to fix a bug we know which part of the code to go to.

Let's look at the dataModule first:

Two functions in here:

1) fetchTweets - this is the function to retreive tweet data from the api. It expects a twitter id to be passed as a parameter and use the native javascript fetch function to get the data relating to that twitter id.

For example it would make a call to the tweet/jbairstow21 endpoint and get the JSON data from there.

Basic explaination of a map, basic explaination of a promise

(4 mins) to here
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

To write the code for that I've create 3 javascript objects, one for each part of the JavaScript code. The reason I've done that is to make the code readible and easy to understand, to give us a separate scope for each peice of funcionality so it's easier to maintain and if we need to fix a bug we know which part of the code to go to. It gives us a separate scope for each peice of function

Let's look at the dataModule first:

Two functions in here:

1) fetchTweets - this is the function to retreive tweet data from the api. It expects a twitter id to be passed as a parameter and use then uses the native javascript fetch function to get the data relating to that twitter id.

For example it would make a call to the tweet/jbairstow21 endpoint and get the JSON data from there.

4ish mins
I want explain how fetch is working as it's quite a key concenpt to grasp. Fetch returns a promise and a promise is what JavaScript uses to do asynchronous operataions. Promises allow us to execute some code that will run for an indeterminate amount of time and then do something once that code has finished running. With fetch the indeterminate amount of time is the time take for the api to process the request and return the data. In our fetchTweets function we call fetch, and specify what to do when it has finised getting data with the 'then' function and we specify what to do with any errors with the 'catch' function.

In summary fetch allows us to get tweet data and do something with it once we have that data. In this case what we do is call the extractRelevantData function. This is function to process the data we receive from the twitter api and extract only the relevant functions.

I'll now talk through the extractRelevantData function and how we process that data: Basic explaination of a map.

And that's all we need to do to get the tweet data...

The next import js module is RenderModule, which is where we use the tweet data to dynamically generate html for our app.

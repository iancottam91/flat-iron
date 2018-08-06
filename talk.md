(Size bug on iphone view)

Plan:

1 minute introduction of the website

Hi, in this lesson I'm going to be teaching how to develop this cricket correspondence website. And the website is single page site that displays 6 twitter profiles from prominent cricketing twitter accounts and when you click on one of the tiles displaying the ac  count information, it'll load the tweets from that account into the right hand side of the page. And when you click a different account it'll remove the existing tweets and display the latest tweets from that other account. 
The site it optimised to work on a desktop and a mobile device, so if I load up developer tools and view the site on a iPhone you can see that it display nice still on that device. Loading in tweets on the right, being able to scroll those and being able to scroll the twitter account profiles on the left. (50 seconds)

Talk through the JavaScript
One of the most interesting features of the website is the interaction. What i mean by that is what happens behind the scenes when i click on a twitter profile panel and load the tweets into the right hand side of the screen. This is the part of the website that I'm going to start the lesson by explaining.

So to create this interaction we need to use JavaScript and it's going to do three things really, which are:

- load the data for the tweets
- create html based on the tweets and render that html to the page
- link it all together by attaching a click event to the tile elements on the page

To write the code for that I've create 3 JavaScript function, one for each part of the JavaScript code. The reason I've done that is to make the code readable and easy to understand, to give us a separate scope for each piece of functionality so it's easier to maintain and we wont have any clashes between functions and variable in each module.

Let's look at the dataModule first:

Two functions in here:

1) fetchTweets - this is the function to retrieve tweet data from the api. It expects a twitter id to be passed as a parameter and use then uses the native javascript fetch function to get the data relating to that twitter id.

For example it would make a call to the tweet/jbairstow21 endpoint and get the JSON data from there.

2 mins 30.

I want explain how fetch is working as it's quite a key concept to grasp. Fetch returns a promise and a promise is what JavaScript uses to do asynchronous operations.

We've just had a questions and for those that didn't hear the question is, 'what is an asynchronous operation?'

 Asynchronous code is a part of your code that will run for an indeterminate amount of time and then allow us to do something once that code has finished running. For example, in this case getting data from the twitter api. We need to wait until we've succeeding in getting the data before trying to do something with it, so that's why we need to use asynchronous code here.

Going back to our fetchTweets function, we call fetch, and specify what to do when it has finished getting data with the 'then' function and we specify what to do with any errors with the 'catch' function.

The part we're interested in here is what we do in the `then` function, and what we're doing is saying return the data as json. Then call `extractRelevantData` with the data from the twitter api and that's our second function in the data module, which I'll talk through now. 

3.50 mins



I'll now talk through the extractRelevantData function and how we process the data that we've gathered from the twitter api.

Extract relevant data expects tweetData as a parameter and the tweet data looks like this:

SHOW DATA ON THE WEBSITE HERE

It's an array of JavaScript Objects, and each object contains information about an individual tweet. The objects for each tweet contain quite a lot of information and actually much more than we need for our website. So what we want to do is process this data by extracting only the properties of the Object that we need, which are 'created_at', 'text', and some information about the tweet user themselves which is in the user object. We're going extract this data by using a map.

Now a map is a function that's available on all Arrays in JavaScript and it's used to create a new array from an existing array. Hence the name map, as we're basically mapping one array onto another.
This is perfect for our twitter data as we can just transform the array of data from the twitter api into an array of objects with just the data we need.

To use a map, we call `.map` on a array, in this case tweetData in the array we call it on, and we pass one parameter to the map, which is a function. The function that we pass to the map will be called on each individual item in the array and we should return from that function what we want the item in the new array to look like. 

So in our example here, we just return an object with the individual properties we want from each object in the tweet data. THIS IS THE OBJECT THAT WE'RE RETURNING

And the final thing we need to do in our DataModule is return the fetchTweets function, so that we can call `fetchTweets` from others parts of our code, that's written outside DataModule, for example in the RenderModule. And we only return fetchTweets, not extractRelevantData because fetchTweets is the only function we want to be able to use elsewhere. This mean that `extractRelevantData` is known as a private function because it can only be used in our DataModule.

To summarise, in our DataModule, we're getting tweet data based on a twitter handle. We're extracting relevant fields from that data and we're exposing a function that will allow us to do this elsewhere in our code.

Ok, we've just had a question which is why do we need to return Object.freeze or in other words what's the purpose of the 'freeze'. 

The answer is freeze is there to ensure that no changes can be made to the object returned by dataModule anywhere else in our code. This is really important because it's prevents the functionality we've created in dataModule from being broken or overwritten by accident.

2.50 (+ 3.50) = 6.40

I'll now move onto the RenderModule which is the module we'll use to create the html we need to render our view of the tweets on the right side of the page. That html is going be dynamically generated and we have two functions to do this, renderTweets and createTweetItem. 

`createTweetItem` is used to create the html for an individual tweet in our list of tweets. `renderTweets` is used to put the list of tweets together and render them to the page.

I'm going to start by explaining `createTweetItem` which as i said is used to create the html an individual tweet row, so for one of these tweets. If I take a look at developer tools  SHOW THE HTML IN INSPECTOR VIEW , you can see the html here for a individual tweet and we need a .... so let's look at how we do that in JavaScript.

 Firstly we create a list item, which will be the outermost html element, as you saw in the html in inspector view and we use document.createElement to do that. document.createElement is a built in JavaScript function that allows us to create html elements and it must be provided a tagName for the element you want to create, which in this case is `li`. It returns an Element object which we store as the variable tweetItem. 

The next thing we need to do is add a class to that element we've created, and we do that in the next line here.  One of the properties on an element object is classList and we can use that to manage the classes on the element. In this case we want to add a class called `tweet-list-item` to allow us to style this item later on and so we use the method `add` to add this class.

(2.30) = 9.10

On the next two lines we create the `div` that's used for details about the tweeter and it's exactly the same process as above, we create a div element with document.createElement and we add a class using `classList`

We've just has a question which is isn't this going to be quite a lot of effort and lines of code to generate all the mark up we need?

The answer is yes it is and it's quite rare that you'll actually create html like this. There are countless JavaScript frameworks and libraries that will make rendering a view more simple for you. One of the most popular of these frameworks at the moment is ReactJS and in the past jQuery was the main tool to help do this. So yes it is a lot of effort and lines of code, but it's important to know how to do this with no frameworks so that you have a better understand of JavaScript and don't rely solely on frameworks.




Now firsly you see that createTweetItem expects one parameter which is the data for the individual tweet, and tweet that data is the object that we created earlier in our dataModule and it will have the format definied in the comment here. We'll use the information from the tweet object to populate our html as we're creating it.

few more element...
img need to add a property..
tweet name add text
talk through all of the function...

QUESTION ABOUT WHY THIS IS SUCH A CONVOLUTED WAY OF DOING IT! Answer - it is, and react is an alternative





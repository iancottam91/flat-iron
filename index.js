const express = require('express');

const app = express();


// route for the twitter data
const Twit = require('twit');
const T = new Twit({
    consumer_key: 'tEHaaxU8oJ9W0GyJiUfPNTdLR',
    consumer_secret: '90f5WYiSZq6xwqdhKyRzi0AjhpcNqP5YwNI49aQxkAKWhB08vZ',
    app_only_auth: true
})

// route for getting twitter data from a twitter handle
app.get('/tweet/:twitterId', function(req, res) {
    T.get('statuses/user_timeline', { screen_name: req.params.twitterId, count: 20, exclude_replies: true }, function (err, data, response) {
        res.send(data);
    });
});


// route for the html file
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080, () => {
   console.log('listening on port 8080'); 
});
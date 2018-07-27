const DataModule = () => {

    const extractRelevantData = (tweetData) => {
        const trimmedData = tweetData.map((tweetData) => {
            return {
                userName: tweetData.user.name,
                screenName: tweetData.user.screen_name,
                profileImg: tweetData.user.profile_image_url,
                time: tweetData.created_at,
                text: tweetData.text
            }
        });
        return trimmedData;
    }

    const fetchTweets = (twitterId) => {
        return fetch(`/tweet/${twitterId}`).then((response) => {
            return response.json()
        }).then((data) => {
            return extractRelevantData(data);
        }).catch((error) => {
            console.log(error);
        });
    };

    return Object.freeze({
        fetchTweets
    })
}

const RenderModule = () => {

    const render = (tweets) => {
        const tweetListContainer = document.createElement('div');
        tweetListContainer.classList.add('tweet-list');
        const tweetList = document.createElement('ul');
        tweetListContainer.appendChild(tweetList);
        console.log(tweets[0]);
        createTweetItem(tweets[0]);
    }

    const createTweetItem = (tweet) => {
        const tweetItem = document.createElement('li');
        tweetItem.classList.add('tweet-list-item');
        
        const tweetDetails = document.createElement('div');
        tweetDetails.classList.add('tweeter-details');
        tweetItem.appendChild(tweetDetails);

        const tweetText = document.createElement('p');
        tweetText.classList.add('tweet-text');
        tweetText.innerHTML = tweet.text
        tweetItem.appendChild(tweetText);

        console.log(tweetItem);
    }

    return Object.freeze({
        render
    })

}

const dataModule = DataModule();
const renderModule = RenderModule();

dataModule.fetchTweets('jbairstow21').then((tweets) => {
    console.log(tweets);
    renderModule.render(tweets);
    // use the render module now
});

// dataModule.fetchTweets('jbairstoqweww21');
// dataModule.fetchTweets();

// renderModule.render();

// load the data
// extract the needed fields
// populate the page
// attach functionality to tiles
// dont use <a> tag

// tests
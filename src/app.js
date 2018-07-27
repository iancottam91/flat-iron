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

    const renderTweets = (tweets) => {
        const tweetListContainer = document.createElement('div');
        tweetListContainer.classList.add('tweet-list');
        const tweetList = document.createElement('ul');
        for (var i=0;i<tweets.length;i++) {
            tweetList.appendChild(createTweetItem(tweets[i]));
        }
        tweetListContainer.appendChild(tweetList);
        document.getElementById('main-content').appendChild(tweetListContainer);
    }

    const createTweetItem = (tweet) => {
        const tweetItem = document.createElement('li');
        tweetItem.classList.add('tweet-list-item');
        
        const tweetDetails = document.createElement('div');
        tweetDetails.classList.add('tweeter-details');
        
        const profileImg = document.createElement('img');
        profileImg.classList.add('twitter-profile-img');
        profileImg.setAttribute('src', tweet.profileImg);
        tweetDetails.appendChild(profileImg);

        const tweetName = document.createElement('p');
        tweetName.classList.add('twitter-name');
        tweetName.innerHTML = tweet.userName
        tweetDetails.appendChild(tweetName);

        const tweetHandle = document.createElement('p');
        tweetHandle.classList.add('twitter-handle');
        tweetHandle.innerHTML = tweet.screenName
        tweetDetails.appendChild(tweetHandle);

        // const tweetTime = document.createElement('p');
        // tweetTime.classList.add('tweet-time');
        // tweetTime.innerHTML = tweet.time;
        // tweetDetails.appendChild(tweetTime);

        const tweetText = document.createElement('p');
        tweetText.classList.add('tweet-text');
        tweetText.innerHTML = tweet.text
        
        tweetItem.appendChild(tweetDetails);
        tweetItem.appendChild(tweetText);

        return tweetItem;
    }

    return Object.freeze({
        renderTweets
    })

}

const attachInteraction = () => {
    const dataModule = DataModule();
    const renderModule = RenderModule();

    const tweetItems = document.getElementsByClassName('twitter-profile-item');

    for(let i=0;i<tweetItems.length;i++) {
        const tweetItem = tweetItems[i];
        tweetItem.addEventListener('click', () => {
            dataModule
            .fetchTweets('jbairstow21')
            .then((tweets) => {
                renderModule.renderTweets(tweets);
            });
        })
    }
    
}

attachInteraction();



// dataModule.fetchTweets('jbairstoqweww21');
// dataModule.fetchTweets();
// const dataModule = DataModule();
// const renderModule = RenderModule();

// dataModule.fetchTweets('jbairstow21').then((tweets) => {
//     renderModule.renderTweets(tweets);
// });

// populate the page
// attach functionality to tiles
// dont use <a> tag

// tests`

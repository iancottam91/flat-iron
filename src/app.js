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

    const utils = Utils();

    const renderTweets = (tweets) => {
        // add 'tweets-displayed' class
        document.getElementById('main-content').classList.remove('tweets-not-displayed');
        document.getElementById('main-content').classList.add('tweets-displayed');

        // empty the container first
        const tweetBlock = document.getElementById('tweet-list-block');
        if(tweetBlock) {
            tweetBlock.remove();
        }

        const tweetListContainer = document.createElement('div');

        tweetListContainer.classList.add('tweet-list');
        tweetListContainer.id = 'tweet-list-block';

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

        const tweetProfile = document.createElement('div');
        tweetProfile.classList.add('tweeter-profile');
        
        const profileImg = document.createElement('img');
        profileImg.classList.add('twitter-profile-img');
        profileImg.setAttribute('src', tweet.profileImg);
        tweetProfile.appendChild(profileImg);

        const tweetName = document.createElement('p');
        tweetName.classList.add('twitter-name');
        tweetName.innerHTML = tweet.userName
        tweetProfile.appendChild(tweetName);

        const tweetTime = document.createElement('p');
        tweetTime.classList.add('tweet-time');
        tweetTime.innerHTML = `${utils.timeSince(tweet.time)} ago`;

        tweetDetails.appendChild(tweetProfile);
        tweetDetails.appendChild(tweetTime);

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

    // loop through tweet tiles and bind blick events
    for(let i=0;i<tweetItems.length;i++) {
        const tweetItem = tweetItems[i];
        tweetItem.addEventListener('click', (e) => {

            // extract twitter handle
            const twitterHandle = tweetItem.attributes['data-twitter-id'].value;

            // load the tweets
            dataModule
            .fetchTweets(twitterHandle)
            .then((tweets) => {
                renderModule.renderTweets(tweets);
            });
        })
    }
    
}

attachInteraction();

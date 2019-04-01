const config = require('./config')

const Twit = require('twit')

function hey(){
    document.getElementById('tweetbox').innerHTML = 'hey'
}


function searchTweet(){
    


    const T = new Twit(config)

    let params = {
        q: 'class',
        geocode: ["-37.753000", "174.779000", "50km"],
        count: 3
    }

    
    T.get('search/tweets', params, haveData);
}


function haveData(err, data, response){
    if(err){
        console.log(err)
    } else {
        readTextToArray(data)
        // console.log(data)
        // fs.writeFile('tweetText.json', JSON.stringify(data), (err) => console.log(err + ' reading out'))
    }
}

function readTextToArray(data){
    let messageList = data.statuses;

    let tweetList = messageList.map(tweet => {
        return messageList[tweet].text
    })

    document.getElementById('tweetbox').innerHTML = tweetList;

    // for(let i=0; i < messageList.length; i++){
    //     console.log(messageList[i]['text'] + "\n")
    // }
}
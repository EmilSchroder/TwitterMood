const config = require('./config')
const Twit = require('twit')

const T = new Twit(config)

let params = {
    q: 'happy',
    count: 1
}

T.get('search/tweets', params, haveData);

function haveData(err, data, response){
    if(err){
        console.log(err)
    } else {
        readTextToArray(data)
    }
}

function readTextToArray(data){
    let messageList = data.statuses;

    for(let i=0; i < messageList.length; i++){
        console.log(messageList[i]['text'])
    }
}
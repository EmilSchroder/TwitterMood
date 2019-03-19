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
        console.log(data)
    }
}
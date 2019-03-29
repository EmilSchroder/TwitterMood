const express = require('express');
// const db = require('../db/db');
const router = express.Router();
router.use(express.json());

const config = require('./config')
const Twit = require('twit')

router.get('/', (req, res) => {

  const T = new Twit(config)
  
  let params = {
    q: 'class',
    geocode: ["-37.753000", "174.779000", "50km"],
    count: 3
  }

  T.get('search/tweets', params, haveData);

  function haveData(err, data, response){
    if(err){
        console.log(err)
    } else {
        return readTextToArray(data)
        // console.log(data)
        // fs.writeFile('tweetText.json', JSON.stringify(data), (err) => console.log(err + ' reading out'))
    }
}

  function readTextToArray(data){
    let messageList = data.statuses;

    let tweetList = messageList.map(tweet => {
        return messageList[tweet].text
    })

    return tweetList;
    // document.getElementById('tweetbox').innerHTML = tweetList;

    // for(let i=0; i < messageList.length; i++){
    //     console.log(messageList[i]['text'] + "\n")
    // }
  }

});

module.exports = router;
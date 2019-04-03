
import React from 'react'
import request from 'superagent'

// import config from '../../config'
// import Twit from 'twit'


class App extends React.Component{
    constructor(props){
        super(props);

        // this.replaceText = this.replaceText.bind(this)
        // this.haveData = this.haveData.bind(this)
        // this.readTextToArray = this.readTextToArray.bind(this)

        this.tweetCall = this.tweetCall.bind(this)
    }

    tweetCall(){
        return request.get('localhost:3000/tweetSearch')
            .then(res => {
                console.log(res)
            })
    }
    // replaceText(){

    //     const T = new Twit(config)

    //     let params = {
    //         q: 'class',
    //         geocode: ["-37.753000", "174.779000", "50km"],
    //         count: 3
    //     }
    
        
    //     return T.get('search/tweets', params, this.haveData);
        
    // }

    // haveData(err, data, response){
    //     if(err){
    //         console.log(err)
    //     } else {
    //         this.readTextToArray(data)
    //     }
    // }

    // readTextToArray(data){
    //     let messageList = data.statuses;

    //     let tweetList = messageList.map(tweet => {
    //         return messageList[tweet].text
    //     })
    //     console.log('beep boop')
    //     return tweetList
    // }

    render(){
        {this.tweetCall()}
        return(
            <h1>Done</h1>
        )
    }
}

export default App
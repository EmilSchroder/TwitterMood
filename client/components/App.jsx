
import React from 'react'

import config from '../../config'
import Twit from 'twit'


class App extends React.Component{
    constructor(props){
        super(props);

        this.replaceText = this.replaceText.bind(this)
        this.haveData = this.haveData.bind(this)
        this.readTextToArray = this.readTextToArray.bind(this)
    }

    replaceText(){

        const T = new Twit(config)

        let params = {
            q: 'class',
            geocode: ["-37.753000", "174.779000", "50km"],
            count: 3
        }
    
        
        return T.get('search/tweets', params, this.haveData);
        
    }

    haveData(err, data, response){
        if(err){
            console.log(err)
        } else {
            this.readTextToArray(data)
        }
    }

    readTextToArray(data){
        let messageList = data.statuses;

        let tweetList = messageList.map(tweet => {
            return messageList[tweet].text
        })

        return tweetList
    }

    render(){
        return(
            <h1>{this.replaceText()}</h1>
        )
    }
}

export default App
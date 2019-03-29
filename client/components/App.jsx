
import React from 'react'
import request from 'superagent'

const baseURL = 'localhost:3000'

class App extends React.Component{
    constructor(props){
        super(props);

        this.replaceText = this.replaceText.bind(this)
    }

    replaceText(){
        request.get(baseURL+'/tweetSearch')
            .then(res => {
                console.log(res);
            })
        
    }

    render(){
        return(
            <h1>{this.replaceText()}</h1>
        )
    }
}

export default App
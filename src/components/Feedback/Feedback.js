import { Component } from 'react';

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }


    render(){
        return(
            <h1>Please leave feedback</h1>
        )
    }
}
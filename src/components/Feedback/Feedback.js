import { Component } from 'react';

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onClickGood = () =>{
        this.setState(prevState =>({
            good: prevState.good + 1,
        }));
    }

    onClickNeutral = () =>{
        this.setState(prevState =>({
            neutral: prevState.neutral + 1,
        }));
    }

    onClickBad = () =>{
        this.setState(prevState =>({
            bad: prevState.bad + 1,
        }));
    }

    render(){
        return(
            <div>
                <h1>Please leave feedback</h1>
                <button onClick={this.onClickGood}>Good😀</button>
                <button onClick={this.onClickNeutral}>Neutral😐</button>
                <button onClick={this.onClickBad}>Bad😡</button>
                <h2> Statistics </h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
            </div>
        )
    }
}
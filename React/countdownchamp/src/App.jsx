import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline : "December 26, 2018",
            newDeadline : ""
        }
    }

    changeDeadline() {
        console.log(this.state);
        this.setState({
            // deadline : "November 26, 2018"
            deadline : this.state.newDeadline
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-title">Countdown to {this.state.deadline}</div>
                <div>
                    <div className='App-days'>14 days</div>
                    <div className='App-hours'>30 hours</div>
                    <div className='App-minutes'>15 minutes</div>
                    <div className='App-seconds'>20 seconds</div>
                </div>
                <div>
                    <input placeholder="new data" onChange={
                        (event) => {
                            this.setState({
                                newDeadline : event.target.value
                            });
                        }
                    }/>
                    <button onClick={()=>this.changeDeadline()}>Submit</button>
                </div>
            </div>
            
        );
    }
}

export default App;
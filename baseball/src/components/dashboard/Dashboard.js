import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            balls: 0,
            strikes: 0,
            outs: 0,
        };
    }

    strike = () => {
        const strikes = this.state.strikes;
        // increment strikes if strikes is less than 2
        if (strikes < 2) {
            this.setState((prevState) => ({
                strikes: prevState.strikes + 1,
            }));
        } else {
            // if strikes is 3 or more
            // reset strikes back to zero
            // add an out
            this.setState((prevState) => ({
                balls: 0,
                strikes: 0,
                outs: ++prevState.outs,
            }));
        }
    };

    ball() {
        const balls = this.state.balls;
        if (balls < 3) {
            this.setState((prevState) => ({
                balls: prevState.balls + 1,
            }));
        } else if (this.state.balls === 3) {
            this.setState({
                balls: 0,
                strikes: 0,
            });
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.strike()}>Strike</button>
                <button onClick={() => this.ball()}>Balls</button>
                <button onClick={() => this.something}>Foul</button>
                <h2 data-testid="strikes">Strikes:{this.state.strikes}</h2>
                <h2>Balls: {this.state.balls}</h2>
                <h2>Outs: {this.state.outs}</h2>
            </div>
        );
    }
}

export default Dashboard;

import React, { Component, Fragment } from 'react';
import ToDigitsControl from '../ToDigitsControl/ToDigitsControl';
import FibonacciDisplay from '../FibonacciDisplay/FibonacciDisplay';

class FibonacciUI extends Component {
    state = {
        toDigits: 13,
        fibonacciNumbers: [0]
    }

    dropDigits = () => {
        const current = this.state.toDigits;
        const next = (current - Math.round(current * .22));
        if(next > 2){
            this.setState({toDigits: next});
        } else this.setState({toDigits: 1});
        this.getFibonacciNumbers();
    }

    bumpDigits = () => {
        const current = this.state.toDigits > 2 ? this.state.toDigits : 3;
        const next = (current + Math.round(current * .18));
        this.setState({toDigits: next});
        this.getFibonacciNumbers();
    }

    handleToDigitsChagned = (event) => {
        this.setState({toDigits: event.target.value});
    }

    getFibonacciNumbers = async () => {
        const toDigits = this.state.toDigits;
        const response = await fetch(`http://localhost:8000/fibonacci/${toDigits}`);
        const data = await response.json();
        this.setState({fibonacciNumbers: data});
    }

    componentDidMount() {
        this.getFibonacciNumbers();
    }

    render() {
        return (
            <Fragment>
                <ToDigitsControl toDigits={this.state.toDigits}
                        changed={this.handleToDigitsChagned}
                        calculateClicked={this.getFibonacciNumbers}
                        lessClick={this.dropDigits}
                        moreClick={this.bumpDigits}></ToDigitsControl>
                <FibonacciDisplay numbers={this.state.fibonacciNumbers}></FibonacciDisplay>
            </Fragment>

        );
    }
}

export default FibonacciUI;
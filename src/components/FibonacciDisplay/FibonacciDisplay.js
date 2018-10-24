import React from 'react';
import classes from './FibonacciDisplay.css';

const fibonacciDisplay = (props) => {
    if(props.numbers){
        return (
                <div className={classes.numberList}>
                    { props.numbers.map( (number, i) => {
                        return (
                            <div className={classes.number} key={i}>{number}</div>
                        );
                    })}
                </div>
                );
    } else return (<div></div>);
}

export default fibonacciDisplay;
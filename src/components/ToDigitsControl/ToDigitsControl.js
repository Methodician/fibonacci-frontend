import React from 'react';
import classes from './ToDigitsControl.css';


const toDigitsControl = (props) => (
    <div className={classes.toDigitsControl}>
        <div className={classes.directions}>Enter a number or increment the existing number</div>
        <br></br>
        <button className={classes.bumperBtn} onClick={props.calculateClicked}>Recalculate</button>
        <input type="number"
        value={props.toDigits}
        onChange={props.changed}></input>
        <button onClick={props.lessClick}
            className={classes.bumperBtn}>Less</button>
        <button onClick={props.moreClick}
            className={classes.bumperBtn}>More</button>
        
    </div>  
);

export default toDigitsControl;
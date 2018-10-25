import React from 'react';
import {shallow} from 'enzyme';
import FibonacciDisplay from './FibonacciDisplay';

test('should render fibonacci to 13 digits', () => {
    const display = shallow(<FibonacciDisplay numbers={[0,1,1,2,3]}></FibonacciDisplay>);

    console.log(display);

    expect(display.children.toString()).toEqual('hello');

});
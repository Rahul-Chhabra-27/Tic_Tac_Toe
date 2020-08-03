import React from 'react';
import { add, div, sub, mul } from './Cal';

function Final(){
    return (
        <>
            <ul>

                <li>the sum of two number is {" "}{add(10, 5)}</li>
                <li> the subtraction of two number is  {" "}{sub(10, 5)}</li>
                <li>the multiplication of two number is  {" "}{mul(10, 5)}</li>
                <li>the division of two number is {" "} {div(10, 3)}</li>
            </ul>

        </>

    );
}
export default Final;
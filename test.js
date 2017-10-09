import dummy from "dummy";

const increment = (a) => a + 1;
const double = ( b ) => b + b

let compose = ( f, g ) => ( x ) => f( g( x ) );
const doubleAndIncrement = compose( increment, double );

console.log( doubleAndIncrement( 1 ) );

const jsx = (
    <div className='eslint-test'>
        <strong>Indentation</strong>
    </div>
);
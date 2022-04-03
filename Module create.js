// index.js


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PrintMyNames from './print_function'; // imported our own created function in this file through that module



ReactDOM.render(
  <PrintMyNames></PrintMyNames>,
  document.getElementById('root')
);






// prin_function.js

import React from 'react'; // imported module

function PrintmyName(props){
    return <h1> I am {props.name} and my age is {props.age}</h1> // props is the object and we are changing our function variable through this props object.
}

function PrintMyNames(){
    return(
    <> // retrun fucntion will return single tag that's why putted all the code function calling code into the single block
      
      
    <PrintmyName name="jitu" age={26} ></PrintmyName>,
    <PrintmyName name="Sachin" age={24} ></PrintmyName>,
    <PrintmyName name="Punit" age={30} ></PrintmyName>,
    <PrintmyName name="Deepak" age={29} ></PrintmyName>


    </>
    )
}

export default PrintMyNames;   // exported this function to the different file

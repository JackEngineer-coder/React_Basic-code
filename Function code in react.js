import React from 'react'; 
import ReactDOM from 'react-dom'; // modules
import './index.css';

function PrintMyName(){
  return <h1> Hello I am  jitender</h1>   // function declaration and return values
}
ReactDOM.render(
  <PrintMyName></PrintMyName>, // fucntion calling in react
  document.getElementById('root') // whatever the function it is it can be fully an app also it will pass through root in react
);



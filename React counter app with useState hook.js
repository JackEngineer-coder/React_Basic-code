// index.js file of counter code with useState hook
import ReactDOM from 'react-dom';
import './index.css';
import React, { useState } from 'react'; // useState hook that remove this function dependencies and we can create variable change code using function also instead of class code.


function Counter() {
  let [count,updateCount] = useState(0);
  const increament_Counter = ()=>{
     updateCount(count+1);
    
  }

  const decreament_counter = () =>{
     updateCount(count-1);
  
    
  }
   





  return(
    <div class="app">
      <button class="plus" onClick={increament_Counter}>+</button>
      <p>{count}</p>
      <button class="minus" onClick={decreament_counter}>-</button>
    </div>


  )
  
}

  
ReactDOM.render(
  <Counter></Counter>,
  
  document.getElementById('root')
);
  



// index.css file of counter app

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.app{
  background-color: azure;
  display: flex;
  align-items: center;
  size: 500px;
  padding:200px;
}
.plus{
  background-color:teal;
  cursor: pointer;
  width:200px;
  height: 200px;
  font-size: 100px;
}
.minus
{
  cursor: pointer;
  background-color:teal;
  width:200px;
  height: 200px;
  font-size: 100px;
}
p{
  height: 200px;
  width:200px;
  font-size: 100px;
  margin-left: 8rem;
  margin-top:10rem;
}

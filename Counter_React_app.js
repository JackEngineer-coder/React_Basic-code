

// index.js file of counter app

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Counter extends React.Component{
  state={
    count:0
  }
  increament_Counter = ()=>{
    this.setState({
      count:this.state.count+1
    })
  }

  decreament_counter = () =>{
    this.setState({
      count:this.state.count-1
    })
  }
   




render(){
  return(
    <div class="app">
      <button class="plus" onClick={this.increament_Counter}>+</button>
      <p>{this.state.count}</p>
      <button class="minus" onClick={this.decreament_counter}>-</button>
    </div>


  )
  }
}
  
ReactDOM.render(
  <Counter></Counter>,
  
  document.getElementById('root')
);
  





//index.css file of counter app using react


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





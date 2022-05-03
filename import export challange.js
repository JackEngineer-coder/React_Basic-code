// main file

import  React from "react";
import ReactDom from "react-dom";
import Heading from "./Heading";
import List from "./List";

ReactDom.render(
  <div>
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);


// Heading file

import react from "react";

function Heading()
{
  return <h1> Hello I am Jitender Chauhan</h1>
}
export default Heading



// List file
import react from "react";

function List()
{
  return <ul> 
      <li>I am Innovator</li>
      <li>I am Developer</li>
      <li>I am Researcher</li>


      </ul>
  
}
export default List

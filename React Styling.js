//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

const date = new Date();
const currentTime = date.getHours();
var pahar = "";
const customStyle ={
  color : ""
}
if(currentTime <12)
{
  pahar = "Good Morning";
  customStyle.color="red";
}
else if(currentTime < 18)
{
  pahar = "Good Afternoon";
  customStyle.color="green";
}
else
{
  pahar = "Good evening";
  customStyle.color="blue";
}
console.log(date);

ReactDom.render(
  <div>
    <h1 className = "heading" style={customStyle}>{pahar}</h1>
  </div>,
  document.getElementById("root")
);

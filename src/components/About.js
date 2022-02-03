import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here
       
      </p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <user links={props.links}></user>
    </div>
  );
}

export default About;
const pTag (){
 if (!props.isPassedDown) {
    // display in p tag
          return null 
  } else {
    // don't display p tag
   return (
        <div>
        <p>{props.bio}</p>
        </div>
          )
  }
}
const pTag = props.isPassedDown
if (isPassedDown) {
  return { props.bio }
} else {
   return null
}
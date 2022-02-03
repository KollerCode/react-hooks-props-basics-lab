import React from "react";
import user from "../data/user";

function About(props) {
  console.log(props)
  const pTag = function () {
 if (!props.bio) {
          return null 
  } else {
   return (
        <p>{props.bio}</p>
          )
  }
  }
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {pTag()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* <user links={props.links}></user> */}
    </div>
  );
}

export default About;

import React from "react";

function Project(props) {
  
  <h1>Projects</h1>
  
  return (

    
    <div>
      
      <p id={props.id}>{props.title}</p>
      <a className="nav-link" id={props.id} href={props.link}>
        Link
      </a>
      <a className="nav-link" id={props.id} href={props.git}>
        Github
      </a>
    <p>-</p>

    </div>
  );
}

export default Project;

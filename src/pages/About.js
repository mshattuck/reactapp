import React from "react";
import profilepic from "../Assets/img/profile.jpg"

function About(){
    return(

    <div className="body_container">
     
   

    <h3> About Me</h3>
    

    <div className="row">


        <div className="col-sm-12" text-indent="20px">
        
            <img id="profilePic" className="img-fluid" src={profilepic} alt="blank"   align="left"/>
            <p>
            I am currently learning Full Stack Web Development through Coding Bootcamp. Interested in coding projects that combine these aspects of my background in technology support and education. 
            
            </p>


            </div>
       
        </div>
    
    </div>
    
  );
}

export default About;

import React, { Component } from 'react'
import resume from '../sources/Resume_MinjiKim.pdf'

function Profile() {

        return(
            <div className="introcontainer"> 
               
                    
                  Hello, my name is<br/>
                 <h1 className="animate__animated animate__fadeIn">Minji Kim</h1> 
                 <h3 className="title">An aspiring developer, software engineer</h3> 
                 <br/>
                 <a href={resume} className="btn btn-outline-dark btn-lg animate__animated animate__fadeIn animate__delay-2s mobv">View Resume</a>
                

                
                 
                
            </div>

        )
    
}
export default Profile;
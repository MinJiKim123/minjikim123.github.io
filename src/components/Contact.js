import React from 'react';
import * as Icon from 'react-bootstrap-icons';

function Contact() {
    const email = "dalimanju15@gmail.com";
    const email2 = "mkim168@my.centennialcollege.ca";
    const linkedin = "https://www.linkedin.com/in/mkim9713/";
    const facebook = "https://www.facebook.com/mkim0713/"
    const instagram = "https://www.instagram.com/__dydeekim/"
    const github = "https://github.com/MinJiKim123"

    return(
        <div className="contact-div">
            <h2>Contact</h2>
            <div>
                <div style={{textAlign:"center", margin: "10px", color: "white"}}>
                <Icon.EnvelopeFill size = {30} className="contact-ic"/> {email} &nbsp;&nbsp; | &nbsp;&nbsp;{email2}
                </div>
                <table>
                    <tbody>
                        <tr >
                            <td className="contact-td"><a href={linkedin}><Icon.Linkedin size={30} className="contact-ic"/> {linkedin} </a></td>
                            <td className="contact-td"><a href={github}><Icon.Github size={30} className="contact-ic"/> {github}</a></td>
                        </tr>
                        <tr>
                            <td className="contact-td"><a href={facebook}><Icon.Facebook size={30} className="contact-ic"/> {facebook}</a></td>
                            <td className="contact-td"><a href={instagram}><Icon.Instagram size={30} className="contact-ic"/> {instagram}</a></td>
                        </tr>

                    </tbody>

                </table>
              
            </div>
            
        </div>
    )


}
export default Contact
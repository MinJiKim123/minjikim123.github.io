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
            <div >
                <div className="contact-div-title">
                <Icon.EnvelopeFill size = {30} className="contact-ic"/> {email} &nbsp;&nbsp; <p className="email-tabmob">| &nbsp;&nbsp;{email2}</p>
                </div>
                
                <table >
                    <tbody>
                        <tr >
                            <td className="contact-td"><a href={linkedin}><Icon.Linkedin size={30} className="contact-ic"/><p className="email-tabmob">{linkedin}</p></a></td>
                            <td className="contact-td"><a href={github}><Icon.Github size={30} className="contact-ic"/><p className="email-tabmob">{github}</p></a></td> 
                            <td className="newrow contact-td " ><a href={facebook} ><Icon.Facebook size={30} className="contact-ic"/></a></td>
                            <td className="newrow contact-td "><a href={instagram}><Icon.Instagram size={30} className="contact-ic"/></a></td>
                        </tr>
                        <tr className="secondrow-tabmob">
                            <td className="contact-td"><a href={facebook}><Icon.Facebook size={30} className="contact-ic"/><p className="email-tabmob">{facebook}</p></a></td>
                            <td className="contact-td"><a href={instagram}><Icon.Instagram size={30} className="contact-ic"/><p className="email-tabmob">{instagram}</p></a></td> 
                        </tr>
                       

                    </tbody>

                </table>
                <p className="contact-div-footer">Say Hi! <Icon.EmojiSmileFill/></p>
              
            </div>
            
        </div>
    )


}
export default Contact
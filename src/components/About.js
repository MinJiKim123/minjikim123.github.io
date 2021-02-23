import React,{useState,useEffect} from 'react'
import picture from '../sources/profile.jpg';
import * as Icon from 'react-bootstrap-icons';
import ReactMarkdown from 'react-markdown';
import text from '../sources/about.md'

function About() {
    
    const [markdown, setMarkdown] = useState(null);
    useEffect(() => {
       
        fetch(text)
            .then(response => {
            return response.text()
            })
            .then(content => {
            setMarkdown(content)
            
        })
    })
    return(
    <div className="subdiv">
     
        <h6><Icon.PersonFill size={20} color="gray"/> ABOUT</h6>
        <hr/>
        <div className="aboutdesc">
        <ReactMarkdown source={markdown}/>
        </div>
        <div className="aboutimg">
        
        <img src={picture}  style={{width:300, height:300, borderRadius:400/2, borderColor:'black', border:'3px' }} />
        
       
        </div>
    </div>
    )
}
export default About;
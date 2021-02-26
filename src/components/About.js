import React,{useState,useEffect} from 'react'
import picture from '../sources/profile.jpg';
import * as Icon from 'react-bootstrap-icons';
import ReactMarkdown from 'react-markdown';
import text from '../sources/about.md'
import MediaQuery, { useMediaQuery } from 'react-responsive'

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
    const isDesktop = useMediaQuery({query:'(min-width: 1040px)'});
    const isMobileOrTablet = useMediaQuery({query:'(max-width: 1040px'});
    return(
    <div className="subdiv">
         <h6><Icon.PersonFill size={20} color="gray"/> ABOUT</h6>
        <hr/>
            {isDesktop && 
            <div>
            <div className="aboutdesc">
                <ReactMarkdown source={markdown}/>
            </div>
            <div className="aboutimg">           
                <img src={picture}  style={{width:'100%', height:'100%', borderRadius:400/2}} />
            </div></div>}
            {isMobileOrTablet && 
                <div style={{fontSize:'small', color:'dimgray'}}>
                    <ReactMarkdown source={markdown}/>
                    <div className="aboutimg-mob">
                    <img src={picture}  style={{width:300, height:300, borderRadius:400/2 }} />
                    </div>
                </div>
            }      
       
    </div>
    )
}
export default About;
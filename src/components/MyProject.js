import SimpleImageSlider from "react-simple-image-slider";
import React, {useState,useEffect} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactMarkdown from 'react-markdown';
import * as Icon from 'react-bootstrap-icons';
import MediaQuery, { useMediaQuery } from 'react-responsive'


function MyProject(props) {
    const images = props.images; 
    const project = props.name;
    const gitlink = props.gitlink;
    const [markdown, setMarkdown] = useState(null);
    const [open, setOpen] = useState(false);
    
    
    
    useEffect(() => {
        const aboutPath = require(`./${project}/about.md`);
        fetch(aboutPath.default)
            .then(response => {
            return response.text()
            })
            .then(text => {
            setMarkdown(text)
            
        })
    },[]);
    const isMobileOrTablet = useMediaQuery({query:'(max-width: 1000px'});
    const closeModal = () => setOpen(false);
    return (
        <div>
            <div className="prjimg">
            
            
            <button onClick={!isMobileOrTablet ? () => setOpen(o => !o): null} className="prjbtn">  
            <img src={images[0].url} alt="alt image" className="pimg-thumbnail"></img>
            <div className="overlay">
            <p className="prjimg-smaller">
                <ReactMarkdown source={markdown} />
                <a href={gitlink} ><Icon.BoxArrowUpRight className="git-ic-smaller" /></a> 
            </p>
            </div>
            
            </button>  
            
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>    
           
            <div>  
            <a className="close" onClick={closeModal}>
                &times;
            </a>    
            <SimpleImageSlider
                width='95%'
                height={355}
                images={images}
                showBullets={true}
                showNavs={true}
                useGPURender={true}
                navStyle={1}
             /> 
             </div>
             </Popup>
            </div>
            <div className="prjdesc">
                <ReactMarkdown source={markdown}/>
                <div className="git-ic-link">
                <a href={gitlink} style={{color: "aliceblue"}}><Icon.BoxArrowUpRight size={20} /></a> 
                </div>
            </div>
           
           
        </div>
    )
}
export default MyProject;
import SimpleImageSlider from "react-simple-image-slider";
import React, {useState,useEffect} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactMarkdown from 'react-markdown';
import * as Icon from 'react-bootstrap-icons';


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
    const closeModal = () => setOpen(false);
    return (
        <div className = "subDiv">
            <div className="prjimg">
            <button onClick={() => setOpen(o => !o)}> <img src={images[0].url} alt="alt image" className="pimg-thumbnail"></img></button>   
            <Popup open={open} closeOnDocumentClick onClose={closeModal} >    
            <div>  
            <a className="close" onClick={closeModal}>
                &times;
            </a>    
            <SimpleImageSlider
                style={{color: 'black', margin: 'auto'}}
                width={650}
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
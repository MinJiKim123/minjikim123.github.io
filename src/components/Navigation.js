import React,{useState} from 'react'
import {useScrollSection} from 'react-scroll-section';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';
import * as Icon from 'react-bootstrap-icons';

function Navigation() {

  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  const MINIMUM_SCROLL = 50;
  const TIMEOUT_DELAY = 400;

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setShouldShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });
  
  const shadowStyle = shouldShowShadow ? 'shadow' : '';
  const hiddenStyle = shouldHideHeader ? 'hidden' : '';

    const aboutSection = useScrollSection('section_about');
    const experienceSection = useScrollSection('section_experience');
    const projectSection = useScrollSection('section_projects');
    const profileSection = useScrollSection('section_profile');
    const abilitiesSection = useScrollSection('section_abilities');
    const contactSection = useScrollSection('section_contact');

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const aboutOnClick = () => {
      aboutSection.onClick();
      setClick(false);
    }
    const expOnClick = () => {
      experienceSection.onClick();
      setClick(false);
    }
    const prjOnClick = () => {
      projectSection.onClick();
      setClick(false);
    }
    const prfOnClick = () => {
      profileSection.onClick();
    }
    const abilOnClick = () => {
      abilitiesSection.onClick();
      setClick(false);
    }
    const cntOnClick = () => {
      contactSection.onClick();
      setClick(false);
    } 
   
    return (
     
        <div className={`header ${shadowStyle} ${hiddenStyle}`}>
         
            <div className="col-sm-3"><div onClick={prfOnClick} selected={profileSection.selected} className="header-nav"><a href="#profile" >Minji Kim</a></div></div>
            <div className="col-sm-9">         
                <ul className={click ? "ul-nav active" : "ul-nav"}>
                  <div style={{float:'right'}}>
                  <li onClick={aboutOnClick} selected={aboutSection.selected} className="li-nav">
                  <a href="#about" >About</a>
                  </li>
                  <li onClick={expOnClick} selected={experienceSection.selected} className="li-nav">
                  <a href="#experience"> Experience</a>
                  </li>
                  <li onClick={ prjOnClick} selected={projectSection.selected} className="li-nav">
                  <a href="#projects"> Projects</a>
                  </li>
                  <li onClick={ abilOnClick} selected={abilitiesSection.selected} className="li-nav">
                  <a href="#abilities"> Abilities</a>
                  </li>
                  <li onClick={cntOnClick} selected={contactSection.selected} className="li-nav">
                  <a href="#contact"> Contact</a>
                  </li>
                  </div>
                </ul>
                <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                  <Icon.X className="menu-icon" />
                ) : (
                  <Icon.List className="menu-icon" />
                )}
              </div>
             </div>
        </div>
        
    );
}
export default Navigation;
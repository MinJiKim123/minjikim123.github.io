import React,{useState} from 'react'
import {useScrollSection} from 'react-scroll-section';
import useDocumentScrollThrottled from './useDocumentScrollThrottled';

function Navigation2() {

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
   
    return (
     
        <div className={`header ${shadowStyle} ${hiddenStyle}`}>
            <div className="col-sm-4" style={{paddingTop:'15px',paddingLeft:'30px'}}><div onClick={profileSection.onClick} selected={profileSection.selected} className="header-nav"><a href="#profile" >Minji Kim</a></div></div>
            <div className="col-sm-8">
                <ul className="ul-nav">
                  <li onClick={aboutSection.onClick} selected={aboutSection.selected} className="li-nav">
                  <a href="#about" >About</a>
                  </li>
                  <li onClick={experienceSection.onClick} selected={experienceSection.selected} className="li-nav">
                  <a href="#experience"> Experience</a>
                  </li>
                  <li onClick={projectSection.onClick} selected={projectSection.selected} className="li-nav">
                  <a href="#projects"> Projects</a>
                  </li>
                  <li onClick={abilitiesSection.onClick} selected={abilitiesSection.selected} className="li-nav">
                  <a href="#abilities"> Abilities</a>
                  </li>
                  <li onClick={contactSection.onClick} selected={contactSection.selected} className="li-nav">
                  <a href="#contact"> Contact</a>
                  </li>
                </ul>
             </div>
        </div>
        
    );
}
export default Navigation2;
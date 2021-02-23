import Profile from './Profile'
import Navigation2 from './Navigation2'
import About from './About'
import Experience from './Experience'
import MyProjects from './MyProjects'
import Abilities from './Abilities'
import Contact from './Contact'
import {
  ScrollingProvider,
  Section,
} from 'react-scroll-section';



function App() {
  
  return (
    <div className="BigDiv">
     
      <ScrollingProvider scrollBehavior="smooth"> 
    <div>
      
      <Navigation2/>
     
    </div>
    <div className="contentContainer">
     <Section id="section_profile" className="section-title">
     <Profile/>
     </Section>
     </div>

     
       <Section id = "section_about" className="section-st">
     <About/>
     </Section>
     
     <Section id = "section_experience" className="section-st">
     <Experience/>
     </Section>
     <Section id = "section_projects" className="section-st">
       
     <MyProjects/>
     </Section>
     <Section id = "section_abilities" className="section-st">
     <Abilities/>
     </Section>
     <Section id = "section_contact" className="section-st">
     <Contact/>
     </Section>

     
 
   </ScrollingProvider>
   </div>
  
  );
}

export default App;

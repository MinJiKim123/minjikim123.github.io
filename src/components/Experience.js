import React from 'react'
import Tabs from "./Tabs"
import * as Icon from 'react-bootstrap-icons';

function Experience(){
    return(
        <div className="subdiv subdiv-add-ex">
            <h6><Icon.BriefcaseFill size={20} color="gray"/> PROFESSIONAL EXPERIENCE</h6>
            <hr/>
            <div>
                <Tabs>
                    <div label = "Zenith I &amp; T">
                        
                        <strong>Software Developer</strong>  
                        <p className="exp-dur-font"><em>May 2020 ~ Aug 2020</em></p>
                        <p className="exp-loc-font"><Icon.GeoAltFill/> 350-27 Gumi-daero Republic of Korea</p>            
                        <ul>
                            <li>Successfully implemented RPA process for the application auto-execution on remote AGC production server using Microsoft Automation API, PsTools, and SQL</li>
                            <li>Facilitated daily data export jobs by creating web automation tool using Selenium, C#, and xml</li>
                        </ul>
                        
                        
                    </div>
                    <div label = "RBC">
                
                        <strong>Software Developer</strong> 
                        <p className="exp-dur-font"><em>Sep 2019 ~ Dec 2019</em></p>
                        <p className="exp-loc-font"><Icon.GeoAltFill/>88 Queens Quay W, Toronto, ON</p>           
                        <ul>
                            <li>Utilized knowledge of Blue Prism RPA process, .NET, Selenium, SQL to develop automation tool for Service Now incident ticketing process of 5+ different client applications</li>
                            <li>Assisted in creating C# tool to manage data from Active Directory using Directory Services library by extracting and exporting the data to excel</li>
                        </ul>
                        
                    </div>
                    <div label = "CIBC">
                    
                        <strong>Application Developer</strong> 
                        <p className="exp-dur-font"><em>Jan 2019 ~ Apr 2019</em></p>
                        <p className="exp-loc-font"><Icon.GeoAltFill/>40 Dundas St, Toronto, ON</p>         
                        <ul>
                            <li>Rendered assistance in creating a user-friendly WPF tool to run calculation jobs and manage database-level user roles, privileges on different servers</li>
                            <li>Automated 10+ batch files daily execution process to manage mortgage processes and to generate reports</li>
                        </ul>
                        
                    </div>
                    <div label = "Centennial College">
                    <strong>Peer Tutor</strong> 
                        <p className="exp-dur-font"><em>Oct 2020 ~ Dec 2020</em></p>
                        <p className="exp-loc-font"><Icon.GeoAltFill/>Progress Campus, 941 Progress Ave, Toronto, ON</p>         
                        <ul>
                            <li>Virtually tutored 3+ students weekly focusing on Java EE, C# (WPF), and Web development (MERN stack)</li>
                            <li>Answer technical questions precisely with short example code</li>
                        </ul>
                    </div>
                </Tabs>
            </div>
            
        </div>
    )
}
export default Experience;
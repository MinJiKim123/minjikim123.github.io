import React from 'react';
import Skills from './Skills'
import Tools from './Tools'
import Languages from './Languages'
import * as Icon from 'react-bootstrap-icons';

function Abilities() {
    const skills = [
        {name: "OOP", rating: 5},
        {name: "C#", rating: 5},
        {name: "WPF", rating: 5},
        {name: "SQL (MySQL, SQL Server)", rating: 5},
        {name: "HTML", rating: 5},
        {name: "ASP.NET", rating: 4.5},
        {name: "Java", rating: 4},
        {name: ".NET", rating: 4},
        {name: "NoSQL", rating: 4},
        {name: "React.Js", rating: 4},
        {name: "Node.Js", rating: 4},
        
        
    ];
    const tools = ["Visual Studio","SQL Management Studio","Visual Studio Code","Atom","Postman","Github","Eclipse"]
    const lgs = ["English (daily use)","Korean (mother tongue)"]
    return(
        <div className="subdiv">

        <h6><Icon.TagsFill size={20} color="gray"/> ABILITIES</h6>
        <hr/>
        <Skills skills = {skills}/>
        <Tools tools = {tools}/>
        <Languages lgs = {lgs}/>
        </div>
    )

}
export default Abilities;
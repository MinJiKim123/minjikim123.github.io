import React, {useState,useEffect}from 'react';
import StarRatings from 'react-star-ratings'
import MediaQuery, { useMediaQuery } from 'react-responsive'

function Skills(props) {
    const skills = props.skills;
    const [firstArr, setFirstArr] = useState([]);
    const [secondArr, setSecondArr] = useState([]);
    useEffect(() => {
        var temp = [];
        if(skills.length <= 6) {
            for(var i = 0; i<skills.length; i++){
                temp[i] = skills[i];
            }         
            setFirstArr(temp);
        } else {
            for(var i = 0; i<6; i++){
                temp[i] = skills[i];
            }
            setFirstArr(temp);
            temp = [];         
            var a = 6;
            while(a != skills.length) {
                temp[a-6] = skills[a];
                a++;
            }
            setSecondArr(temp);    
            temp = [];
            a=6;      
        }       
    },[]);
    
    const isDesktop = useMediaQuery({query:'(min-width: 1040px'});
    
    return (
        <div className="div-abil">
          <strong> Skills</strong>   
            <div className={isDesktop ? "row" : "skills-sec"}>
                <div className={isDesktop ? "col-sm-6" : null}>        
                    <table style={{width:'100%'}}>
                        <tbody>
                        {firstArr.map((value,index) => {
                            return (
                                <tr key={index} className="tr-skills">
                                    <td className="td-skills-name">{value.name}</td>
                                    <td>
                                    <StarRatings
                                        rating={value.rating}
                                        starRatedColor="#feb236"
                                        numberOfStars={5}
                                        starDimension="15px"
                                        starSpacing="3px"
                                    />
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                <div className={isDesktop ? "col-sm-6" : null}>
                    {secondArr.length != 0 ?  <table style={{width:'100%'}}>
                        {secondArr.map((value,index) => {
                            return (
                                <tr key={index} className="tr-skills">
                                    <td className="td-skills-name">{value.name}</td>
                                    <td>
                                    <StarRatings
                                        rating={value.rating}
                                        starRatedColor="#feb236"
                                        numberOfStars={5}
                                        starDimension="15px"
                                        starSpacing="3px"
                                    />
                                    </td>
                                </tr>
                            )
                        })}
                    </table> : null}
                </div>
            </div>
        </div>
    )

}
export default Skills;


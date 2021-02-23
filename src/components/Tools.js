import React, {useState,useEffect}from 'react';

function Tools(props) {
    const tools = props.tools;
    const [firstArr, setFirstArr] = useState([]);
    const [secondArr, setSecondArr] = useState([]);

    useEffect(() => {
        var temp = [];
        if(tools.length <= 4) {
            for(var i = 0; i<tools.length; i++){
                temp[i] = tools[i];
            }         
            setFirstArr(temp);
        } else {
            for(var i = 0; i<4; i++){
                temp[i] = tools[i];
            }
            setFirstArr(temp);
            temp = [];         
            var a = 4;
            while(a != tools.length) {
                temp[a-4] = tools[a];
                a++;
            }
            setSecondArr(temp);    
            temp = [];
            a=4;    
        }  
    },[]);

    return(
        <div className="div-abil">
            <strong>Tools</strong>
            <div className="row">
                <div className="col-sm-6">
                    <ul>
                        {firstArr.map((value,index) => {
                            return(
                                <li key={index}>{value}</li>
                               )
                        })}
                    </ul>
                </div>
                <div className="col-sm-6">
                   {secondArr.length != 0 ? <ul>
                       {secondArr.map((value,index) => {
                           return(
                            <li key={index}>{value}</li>
                           )
                           
                       })}
                   </ul> : null}
                </div>
            </div>

        </div>
    )
    
}
export default Tools;
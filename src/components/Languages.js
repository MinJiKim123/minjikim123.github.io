import React from 'react';
function Languages(props) {

    const lgs = props.lgs;
    return(
        <div className="div-abil">
            <strong>Languages</strong>
        <div className="row">
            <div className="col-sm-6">
                <ul>
                    <li>{lgs[0]}</li>
                </ul>
            </div>
            <div className="col-sm-6">
                <ul>
                    <li>{lgs[1]}</li>
                </ul>
            </div>


        </div>
        </div>

    )

}
export default Languages;
import React, { Component, Fragment } from 'react';

class Symposium extends Component {
    state = {  }
    render() { 
        return ( <Fragment>
             <div className="background_other">
             <div  >
                <div className="keynote-speaker-div" >
                    <h2 className="speaker-header">Plenary Speakers</h2>
                    <ul className="keynote-speaker-ul" style={{animation: "fadeIn 8.25s infinite"}}>
                    <hr className="speaker-hr"/>
                    <li><strong>Engr. Farouk A. Tarfa (FNSE, FNICE)</strong> <br/><i> Adamawa State Minsitry of Works, Yola, Nigeria</i></li><br/>
                   <hr className="speaker-hr"/>
                    <li><strong>Engr. (Prof.) Bashir Aliyu</strong> <br/> <i>Modibbo Adama University of Technology, Yola, Nigeria</i></li><br/>
                    <hr className="speaker-hr"/>
                    <li><strong>Prof. Semiu A. Kareem</strong> <br/> <i>Modibbo Adama University of Technology, Yola, Nigeria</i></li><br/>
                    <hr className="speaker-hr"/>
                    <li><strong>Prof. Elvis Fosso-Kankeu</strong> <br/> <i>Northwest University, Potchefstroom, South Africa</i></li><br/>
                </ul>
                </div>
              
            </div>
             </div>

             <div id="background-speaker">
             <div className="plenary-speaker" >
                <div className="plenary-speaker-div" >
                    <h2 className="speaker-header">Keynote Speakers</h2>
                    <ul className="plenary-speaker-ul" style={{animation: "fadeIn 8.25s infinite"}}>
                    <hr className="speaker-hr"/>
                    <li><strong>Engr. T.S.G Wudil</strong> <br/><i> Deputy Presisent, The Nigerian Society of Engineers</i></li><br/>
                   <hr className="speaker-hr"/>
                    <li><strong>Dr. Sandip Rakshit</strong> <br/> <i>American University of Nigeria, Yola, Nigeria</i></li><br/>
                    <hr className="speaker-hr"/>
                    <li><strong>Prof. P.A Olubambi</strong> <br/> <i>University of Johannesburg, Johannesburg, South Africa</i></li><br/>
                    <hr className="speaker-hr"/>
                    <li><strong>Prof. A.P.I. Popoola</strong> <br/> <i>Tshwane University of Technology, Pretoria, South Africa</i></li><br/>
                    <li><strong>Prof. David Dodoo-Arhin</strong><br/><i>University of Ghana, Accra, Ghana</i></li>
                </ul>
                </div>
              
            </div>
             </div>
        </Fragment> );
    }
}
 
export default Symposium;
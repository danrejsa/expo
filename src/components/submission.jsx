import React, { Component, Fragment } from 'react';

class Submission extends Component {
    state = {  }
    render() { 
        return ( <Fragment>
            <div className="sub"><h2><center style={{marginTop:"2rem"}}>Submission</center></h2></div>
             <div className="sub" >
            <div style={{width:"85%",marginLeft:"auto", marginRight:"auto",fontSize:"18px",paddingTop:"4rem", color:"#333"}}>
                 <h3 style={{textDecoration:"underline"}}>Abstract Guidelines Structure</h3>
                 <ul> 
                     <li>The acceptable word range for the abstract is 150 - 250 words.</li>
                     <li>Your abstract should be submitted in English.</li>
                     <li>we encourage you to send <strong>informative abstract </strong> (complete abstract), which
                     include include background, purpose, methodology, results, conclusion and keywords.</li>

                 </ul>               
                 </div>
                 </div>
            
                 <div className="sub" >
            <div style={{ width:"85%",marginLeft:"auto", marginRight:"auto", fontSize:"18px",paddingTop:"1.8rem", color:"#333"}}>
                 <h3 style={{textDecoration:"underline"}}>Abstract Submission</h3>
                 <ul> Once you prepared your abstract according to the above guidelines,

                     <li>Submit your abstract to <strong style={{color:"red",textDecoration:""}}> yolabranchnse@gmail.com</strong>.</li>
                     <li>After sumission, you will be acknowledged of the receipt of the abstract via an email as soon as possible.</li>
               </ul>               
                 </div>
                 </div>
            <div className="sub" >
            <div style={{width:"85%",marginLeft:"auto", marginRight:"auto", fontSize:"18px",paddingTop:"1.8rem", paddingBottom:"5rem",color:"#333"}}>
                 <h3 style={{textDecoration:"underline"}}>Reviewing Process</h3>
                 <ul> The Conference Proceedings will be published in a Scopus indexed
                     IOP Conference Series after a rigorous double-blind peer-review process.
                     
                 </ul>                
                 </div>
                 </div>

                
        
        </Fragment> );
    }
}
 
export default Submission;
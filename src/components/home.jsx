import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./register";
import { Container, Table} from 'reactstrap';


class Home extends Component {
    state = {  }
    render() { 
        return ( <Fragment>
            <Router>
           <div className="background1">
           <div className="title-div" style={{display:"flex", width:"100%", height:"450px",marginLeft:"auto",marginRight:"auto"}}>
           <div className="reg-but" style={{paddingTop:"5rem",marginTop:"3rem",width:"70%",marginLeft:"auto",marginRight:"auto"}}>
    <h2 className="icascie-3" style={{background:"#000", fontSize:"21px"}}> PARTICIPATE AT THE SCIENCE, TECHNOLOGY AND INNOVATION EXPO' 2020</h2>
    <h3 className="icascie-3" style={{marginTop:"2rem"}}><em></em></h3>
    <h1 className="icascie-2" style={{background:""}}>Enhancing The Growth Of A Diversified Economy Through Science And Technology</h1>
</div>




</div>
</div>




  <div className="title-div" style={{display:"flex", width:"100%",marginLeft:"auto",marginRight:"auto"}}>
            <div className="title-text" style={{textAlign:"center",marginTop:"3rem",width:"60%", marginLeft:"auto",marginRight:"auto"}}>
            
            
     <p style={{textAlign:"justify", fontSize:"18px"}} >The American University of Nigeria is organizing
     a Technology and Innovation Expo'2020 to facilitate commercialization of Research and Development results
     and encourage inventions and innovations in the state.<br/>
     The objectives of the Expo are to: <br/>
     <ul>
        <li>Encourage interactions between Researchers and Investors with a view to commercializing
          research results, inventions and innovations
        </li>
        <li>Bring to fore the capabilities of Nigerian Scientists, Engineers, Inventions/Innovations to sustainable Development
          in Nigeria </li>
      </ul>
      </p>    
     
    
    </div>

    <div className="reg-but" style={{marginTop:"1rem",width:"30%",marginLeft:"auto",marginRight:"auto"}}>
   <h3>Submission Dates</h3>
   <p><em>Nothing to display</em></p>

    <a target="blank" href="https://docs.google.com/forms/d/10IReUP-vV8QTKpehTKzyzVMdwqKxDkGklx_HOWz-irk/edit"> <div className="join-now-btn">
             <span style={{ marginLeft: "1.2rem" ,color:"red"}}>REGISTER HERE</span>{" "}
              <i style={{ marginLeft: "0.6rem" }} class="material-icons">
                arrow_forward
              </i>
            </div></a>
    </div>
</div>



<Route path="/register_now"  component={Register}/>

</Router>
        </Fragment> );
    }
}
 
export default Home;
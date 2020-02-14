import React, {useState,Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Modal, ModalHeader,Button,
ModalBody, ModalFooter} from 'reactstrap';


const Home = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  
        return ( <Fragment>
           <div>
     
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Register as:</ModalHeader>
        <ModalBody>        
          <div style={{width:"100%", display:"flex", flex:"wrapFlex",marginLeft:"auto",marginRight:"auto"}}>
          <div style={{width:"40%", marginLeft:"auto",marginRight:"auto",padding:"2rem", background:"#fff",boxShadow:"0 5px 45px 0 rgba(89, 109, 121, 0.2"}}>
          <a style={{width:"100%"}} href="https://forms.gle/wTP4ZWxwPRjHCgto7" target="blank" >
             <div className="join-now-btn-modal">
             <span style={{ color:"blue"}}>Individual</span>{" "}
              <i style={{ marginLeft: "0.6rem" }} class="material-icons">
              perm_identity
              </i>
            </div></a>
            </div>
            <div style={{width:"40%",marginLeft:"auto",marginRight:"auto", padding:"2rem",background:"#fff",boxShadow:"0 5px 45px 0 rgba(89, 109, 121, 0.2"}}>
            <a href="https://forms.gle/eC2DY55XvVSTTy4J9" target="blank"> <div className="join-now-btn-modal">
             <span style={{ color:"red"}}>Corporate</span>{" "}
              <i style={{ marginLeft: "0.6rem" }} class="material-icons">
              people_outline
              </i>
            </div></a>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>

          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
            <Router>
           <div className="background1">
           <div className="title-div" style={{display:"flex", width:"100%", height:"450px",marginLeft:"auto",marginRight:"auto"}}>
           <div className="reg-but" style={{paddingTop:"5rem",marginTop:"3rem",width:"70%",marginLeft:"auto",marginRight:"auto"}}>
    <h2 className="icascie-3" style={{background:"#000", fontSize:"21px"}}> PARTICIPATE AT THE SCIENCE, TECHNOLOGY AND INNOVATION EXPO' 2020</h2>
    <h3 className="icascie-3" style={{marginTop:"2rem"}}><em></em></h3>
    <h1 className="icascie-2" style={{background:""}}> Enhancing The Growth Of A Diversified Economy Through Science And Technology</h1>
</div>




</div>
</div>




  <div className="title-div" style={{display:"flex", width:"100%",marginLeft:"auto",marginRight:"auto"}}>
            <div className="title-text" style={{textAlign:"center",marginTop:"3rem",width:"60%", marginLeft:"auto",marginRight:"auto"}}>
            
            
     <p style={{textAlign:"justify", fontSize:"18px"}} >The American University of Nigeria is organizing
     a Technology and Innovation Expo'2020 to facilitate commercialization of Research and Development results
     and encourage inventions and innovations in the state. The Theme for the Expo is
     <strong> Enhancing The Growth Of A Diversified Economy Through Science And Technology</strong>.<br/>
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
   <div style={{animation: "fadeIn 13.25s infinite"}}>
   <h3>Submission Dates</h3>
   <p><em>Nothing to display</em></p>
   </div>
   <a onClick={toggle} target="blank"> <div className="join-now-btn">
             <span style={{ marginLeft: "1.2rem" ,color:"red"}}>REGISTER HERE</span>{" "}
              <i style={{ marginLeft: "0.6rem" }} class="material-icons">
                arrow_forward
              </i>
            </div></a>
    </div>
</div>





</Router>
        </Fragment> );
    
}
 
export default Home;
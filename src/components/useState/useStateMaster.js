import React from 'react';
import {
  Link
} from "react-router-dom";
import NavBar from './nav/navBar'
import Footer from './nav/footer'


const UseStateMaster = ()=>  { 

  return (
 
    <div>
      <NavBar/>
      <div className="jumbotron" >
                <h1 className="display-4" style={{textAlign:"center"}}>Use State</h1>
                <p className="lead" style={{textAlign:"center"}}>Use State Master List of Activities </p>                      
      </div>
    <div className= 'container'>
      <div className="row">
        <div className="col-sm">
          <div className="card" style={{width: '100%'}}>
            <div className="card-header">
            Use State Examples
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> <Link to="/BoxExample">useState Box Example</Link></li>
              <li className="list-group-item">  <Link to="/counter">Counter</Link></li>
              <li className="list-group-item"><Link to="/register">Register Step Form</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
    <Footer/>
  </div>
  )
     
}

export default UseStateMaster ;

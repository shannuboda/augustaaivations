import React from 'react'
import logo from './assets/logo.png'
import './css/footer.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, Navigate, useNavigate } from 'react-router-dom';
function Footer() {
  const Navigate = useNavigate()
  return (
    <div className='foot-main'>
        <div className="f1">
              <img src={logo} alt="" className='logo-footer'/>
              <div className="f1_1">
                  <div className="phn">
                      <div className="phoneicon">
                        {/* phn logo here */}
                        <i className="fa fa-phone"></i>
                      </div>
                      <h3>
                        Phone Number <br /> <span>+91 9390513054</span>
                      </h3>
                  </div>

                  <div className="phn mail">
                      <div className="phoneicon mailicon">
                        {/* phn logo here */}
                        <i className="fa fa-envelope"></i>
                      </div>
                      <h3>
                        Mail Id <br /> <span>agastaaviation1@gmail.com</span>
                      </h3>
                  </div>
              </div>
          </div>
          <hr /> 
          <div className="foot-part-2">
              <div className="f2_1">
                  <h4>Latest Posts</h4>
                  <ul>
                    <li onClick={()=>{Navigate('/post1')}} style={{cursor:'pointer'}}><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>How To Be Motivated</li>
                    <li onClick={()=>{Navigate('/post2')}} style={{cursor:'pointer'}}><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>The Corporate Handshake Etiquette</li>
                    <li onClick={()=>{Navigate('/post3')}} style={{cursor:'pointer'}}><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>How To Be Self-Disciplined</li>
                    <li onClick={()=>{Navigate('/post4')}} style={{cursor:'pointer'}}><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>COFFEE ETIQUETTE</li>
                    <li onClick={()=>{Navigate('/post5')}} style={{cursor:'pointer'}}><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>10 Most Common Etiquette Mistakes</li>
                  </ul>
              </div>

              <div className="f2_2">
                  <h4>Popular Courses</h4>
                  <ul>
                    <li onClick={()=>{Navigate('/airportmanagement')}}> <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span >&nbsp;&nbsp;AUGUSTA Certified Airport Management</li>
                    <li onClick={()=>{Navigate('/groundstaff')}}><span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>&nbsp;&nbsp;Aviation,  Ground Staffing Training </li>
                    <li onClick={()=>{Navigate('/ticketing')}}> <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>&nbsp;&nbsp;AUGUSTA Certified Ticketing</li>
                    <li onClick={()=>{Navigate('/cabincrew')}}> <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>&nbsp;&nbsp;AUGUSTA Certified Cabin Crew</li>
                    <li onClick={()=>{Navigate('/cargo')}}> <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>&nbsp;&nbsp;AUGUSTA Certified Cargo Course</li>
                    <li onClick={()=>{Navigate('/pilot')}}>  <span><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>&nbsp;&nbsp;AUGUSTA Certified Pilot Course</li>

                  </ul>
              </div>

              <div className="f2_3">
                  <h4>Sign up for Our Newsletter!</h4>
                  <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Submit
        </Button>
      </InputGroup>
              </div>
          </div>
    </div>
  )
}

export default Footer
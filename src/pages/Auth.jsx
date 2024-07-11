import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Auth({register}) {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center flex-column' style={{height:'100vh'}}>
      

      <div className="container shadow w-75 p-3 mt-3 rounded" style={{backdropFilter:'blur(50px)'}}>
        <Row>
          <Col sm={12} md={6} className='p-5 d-flex justify-content-center align-items-center'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" width={'100%'} alt="" />
          </Col>
          <Col sm={12} md={6}>
          <div className="ms-5 justify-content-center align-items-center">
          <img className='mb-4' src="https://cdn-icons-png.flaticon.com/512/5539/5539922.png" style={{marginLeft:'95px'}} width={'90'} alt="" />
            {register?<h5>Sign Up to your Account</h5>
            :
            <h5>Sign In to your Account</h5>}

            <form className="mt-4 w-75">
              {register && <div className="mb-3">
                <input type="text" placeholder='Username' className='form-control rounded-0 shadow'/>
              </div>}
              <div className="mb-3">
                <input type="text" placeholder='Email' className='form-control rounded-0 shadow'/>
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Password' className='form-control rounded-0 shadow'/>
              </div>
              <div className='mb-3 mt-4'>
                {register?<div className="reg mt-2">
                <button className="contact-btn btn text-dark w-100 mt-1 shadow">Register</button>
                <p className='mt-1'>already a user?Click here to <Link to={'/login'} style={{ textDecoration: 'none', color: 'red' }}>Login</Link> </p>
                </div>
              :
                <div className="login ">
                <button className="contact-btn btn text-dark w-100 mt-1 shadow">Login</button>
                <p className='mt-1'>New user?Click here to <Link to={'/register'} style={{ textDecoration: 'none', color: 'green' }}>Register</Link> </p>
                </div>}
              </div>
            </form>
          </div>
            
          </Col>
        </Row>
      </div>
      <h5 className='mt-4 p-2'><Link to={'/'} style={{color:'#a993fe',fontWeight:'bolder',fontSize:'large',marginTop:'20px'}} ><FontAwesomeIcon icon={faArrowLeft} className='me-2'/>Go To Back</Link></h5>
    </div>
  )
}

export default Auth
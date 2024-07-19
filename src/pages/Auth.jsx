
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-bootstrap/Modal';

function Auth({register}) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData,setFormData] = useState({
    fname:"",
    lname:"",
    email:"",
    password:""
  })

  const handleRegister = (e)=>{
    e.preventDefault();
    let isvalid =true;
    let validationError={}
    if(!formData.fname || !formData.lname || !formData.email || !formData.password){
      toast.dark('Please fill missing fields')
    }
    //else if(!/\S+@\S+\.\s+/.test(formData.email)){
    //   isvalid=false;
    //   validationError.email="Email is not valid"
    // }
    // else if(formData.password.length < 6){
    //   isvalid=false;
    //   validationError.email="password requires atleast 6 characters"
    // }
    
    else{
      handleShow()
    }
  }

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
              {register && <div className="mb-3 d-flex">
                <input type="name" placeholder='First name' className='form-control rounded-0 shadow me-3' onChange={(e)=>setFormData({...formData,fname:e.target.value})}/>
                <input type="name" placeholder='Last name' className='form-control rounded-0 shadow' onChange={(e)=>setFormData({...formData,lname:e.target.value})}/>
              </div>}
              <div className="mb-3">
                <input type="email" placeholder='Email' className='form-control rounded-0 shadow' onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
              </div>
              <div className="mb-3">
                <input type="password" placeholder='Password' className='form-control rounded-0 shadow' onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
              </div>
              {/* {register &&<div className="mb-3">
                <input type="password" placeholder='Confirm Password' className='form-control rounded-0 shadow'/>
              </div>} */}
              <div className='mb-3 mt-4' >
                {register?<div className="reg mt-2">
                <button className="contact-btn btn text-dark w-100 mt-1 shadow" onClick={handleRegister}>Create Account</button>
                <p className='mt-1'>already a user?Click here to <Link to={'/login'} style={{ textDecoration: 'none', color: 'red' }}>Login</Link> </p>
                </div>
              :
                <div className="login ">
                <button className="contact-btn btn text-dark w-100 mt-1 shadow">Login</button>
                <p className='mt-1'>New user?Click here to <Link to={'/register'} style={{ textDecoration: 'none', color: 'green' }}>create account</Link> </p>
                </div>}
              </div>
            </form>
          </div>
            
          </Col>
        </Row>
      </div>
      <h5 className='mt-4 p-2'><Link to={'/'} style={{color:'#a993fe',fontWeight:'bolder',fontSize:'large',marginTop:'20px'}} ><FontAwesomeIcon icon={faArrowLeft} className='me-2'/>Go To Back</Link></h5>
      <ToastContainer theme='colored' position='bottom-right' autoClose= '2000'/>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Body className='text-center'>Account created successfully</Modal.Body>
        <Link to={'/login'} className='justify-content-center text-center p-3'>
          <Button variant="primary" onClick={handleClose} className='btn btn-success'>
            Login
          </Button></Link>
      </Modal>
    </div>
    
  )
}

export default Auth
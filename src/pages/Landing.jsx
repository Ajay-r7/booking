import React from 'react'
import img1 from '../assets/bg1.jpg'
import { Link } from 'react-router-dom'


function Landing() {
  return (
    <>
    <div>
        <div style={{position:'relative'}}>
        <h5 style={{position:'absolute'}} className='text-light p-3'>Hotel<span style={{color:'darkviolet',}}>ier.</span></h5>
            {/* <video autoPlay loop muted className='video right-0 top-0 object-cover z-[-1]' src={vid} itemType='video/mp4' width={'100%'}></video> */}
            <img src="https://w0.peakpx.com/wallpaper/430/953/HD-wallpaper-space-purple-light-blur-minimalism-purple-blur-minimalism-artist-artwork-digital-art-gradient-deviantart.jpg" width={'100%'} height={'620px'} alt="" />
            <div className="text-light text-center"  style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
                <h1 className='text-light'>Welcome to Hotel<span style={{color:'violet',}}>ier.</span></h1>
                <p>Spend Quality Holidays With Us"</p>
                <Link to={'/login'}><button className="contact-btn btn text-light  mt-1 shadow" style={{background:'violet'}}>Get Started</button></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landing
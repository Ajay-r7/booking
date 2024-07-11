import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import homeimg from '../assets/homeimg.jpg'
import SearchInput from '../components/SearchInput'

function Home() {
  return (
    <>
    <Navbar/>
    <div className="row w-100" style={{position:'relative'}}>
    <div className='col-md-12 text-center'>
        <img src={homeimg} width={'800px'} alt="" />
        </div>
            <div className="col-md-12 text-dark text-center"  style={{position:'absolute',left:'50%',top:'10%',transform:'translate(-50%,-50%)'}}>
                <h1 className='text-dark'>Welcom to Hotel<span style={{color:'violet',}}>ier.</span></h1>
                <p>Spend Quality Holidays With Us"</p>
                
            </div>
            <div className="mt-3 text-center" style={{position:'absolute',top:'80%',}}>
                <Link to={'/rooms'}><button className="contact-btn btn btn-dark text-light  mt-1 me-3 shadow">Our Rooms</button></Link>
                <Link to={'/booking'}><button className="contact-btn btn btn-dark text-light  mt-1 shadow">bookings</button></Link>
                </div>
    </div>
    <SearchInput/>
    </>
  )
}

export default Home
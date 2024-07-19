import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function SearchInput() {
  return (
    <>
        <div className="container shadow w-75 mb-5" style={{backgroundColor:'rgba(250, 214, 255, 0.345)'}}>
            <div className="items p-3 d-flex align-items-center justify-content-center text-center">
            <TextField id="outlined-basic" label="Select Place" color="secondary" variant="outlined" className='w-25 me-3'/>
            <TextField id="outlined-basic" label="Date" color="secondary" variant="outlined" className='w-25 me-3'/>
            <TextField id="outlined-basic" label="Persons" color="secondary" variant="outlined" className='w-25 me-3'/>
            <Link><button className="contact-btn btn text-light rounded  mt-1 shadow" style={{background:'blueviolet'}}><FontAwesomeIcon icon={faMagnifyingGlass}/></button></Link>
            </div>
        </div>
    </>
  )
}

export default SearchInput
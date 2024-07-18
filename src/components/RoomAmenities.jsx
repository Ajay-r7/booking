import { faDog, faDumbbell, faSquareParking, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'



function RoomAmenities() {
  return (
    <>
    
    <div className="features text-center mt-3">
        <h4>our features</h4>
    </div>
    <Row>
        <Col md={12} className='px-5 my-3 d-flex justify-content-between text-center' >
        <div className='text-info'>
            <p><FontAwesomeIcon icon={faWifi} /></p>
            dfffd
        </div>
        <div className='text-warning'>
            <p><FontAwesomeIcon icon={faSquareParking} /></p>
            <p>parking</p>
        </div>
        <div className='text-danger'>
            <p><FontAwesomeIcon icon={faDumbbell} /></p>
            <p>gym</p>
        </div>
        <div className='text-success'>
            <p><FontAwesomeIcon icon={faDog} /></p>
            <p>pets</p>
        </div>
        
        
        </Col>
    </Row>
       
    
    
    </>
  )
}

export default RoomAmenities
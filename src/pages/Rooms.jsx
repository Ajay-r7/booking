import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import SearchInput from '../components/SearchInput'
import { Col, Row } from 'react-bootstrap';
import RoomCards from '../components/RoomCards';



function Rooms() {
return (

    <>
    
    <Navbar/>
    <div className='mt-5'><SearchInput /></div>

    <div className='container p-4 roomCard' >
      <Row className='justify-content-center align-items-center roomCard' style={{rowGap:'50px'}}>
        <Col sm={12} md={4} lg={3}> <RoomCards/> </Col>
        {/* <Col sm={12} md={4} lg={3}> <RoomCards/> </Col>
        <Col sm={12} md={4} lg={3}> <RoomCards/> </Col>
        <Col sm={12} md={4} lg={3}> <RoomCards/> </Col>
        <Col sm={12} md={4} lg={3}> <RoomCards/> </Col>
        <Col sm={12} md={4} lg={3}> <RoomCards/> </Col>
        <Col sm={12} md={4} lg={3}> <RoomCards/> </Col>
        <Col sm={12} md={4} lg={3}> <RoomCards/> </Col> */}
      </Row>

      
    </div>
    

    </>
  )
}

export default Rooms
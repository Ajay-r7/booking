import React from 'react';
import { faDog, faDumbbell, faSquareParking, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from 'react-bootstrap';

function RoomAmenities() {
  return (
    <>
      <div className="features text-center mt-3">
        <h4>Our Features</h4>
      </div>
      <Row>
        <Col md={12} className='px-5 my-3 d-flex justify-content-between text-center'>
          <div className='text-info'>
            <p><FontAwesomeIcon icon={faWifi} /></p>
            <p>Wifi</p>
          </div>
          <div className='text-warning'>
            <p><FontAwesomeIcon icon={faSquareParking} /></p>
            <p>Parking</p>
          </div>
          <div className='text-danger'>
            <p><FontAwesomeIcon icon={faDumbbell} /></p>
            <p>Gym</p>
          </div>
          <div className='text-success'>
            <p><FontAwesomeIcon icon={faDog} /></p>
            <p>Pets</p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default RoomAmenities;

import React, { useState } from "react";
import { Card, Modal, Button, Carousel, Col, Row } from "react-bootstrap";
import RoomAmenities from "./RoomAmenities";

function RoomCards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="container shadow p-5">
        <Card className="rounded shadow border border-secondary">
          <Row className="d-flex justify-content-center w-100 p-3">
            <Card.Title className="ms-5 fs-2 mb-3 text-center">
              Kerala Beach Resort
            </Card.Title>
            <Col md={5}>
              <Card.Img
                className="rounded-2 mb-3"
                style={{ cursor: "pointer", width: "" }}
                onClick={handleShow}
                variant="top"
                src="https://r1imghtlak.mmtcdn.com/5c72f12f-9eba-4c73-9639-1dc5d0856526.webp"
              />
            </Col>
            <Col md={1}></Col>
            <Col md={5} className="align-items-center justify-content-center d-flex">
              <Card.Body>
                <div className="mb-4 ms-2">
                  <p>Type: Deluxe</p>
                  <p>Price: 5000</p>
                </div>
                <div className="align-items-center">
                  <Button onClick={handleShow} className="mt-1 contact-btn btn btn-success rounded-3 w-75" variant="primary">
                    Book Now
                  </Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        className="justify-content-center align-items-center d-flex shadow"
      >
        <Modal.Header closeButton>
          <Modal.Title>Kerala Beach Resort</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://watermark.lovepik.com/photo/20211121/large/lovepik-hotel-room-picture_500597052.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://wallpapers.com/images/hd/hotel-room-1920-x-1080-background-ur8zfah9q06oxc6a.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-elegant-modern-living-room-design-with-a-dark-and-luxurious-touch-image_3796376.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>

          <div className="container">
            <RoomAmenities />
          </div>

          <Row className="mt-3">
            <Col sm={12} md={1}></Col>
            <Col sm={12} md={5}>
              <div className="d-flex align-itmes-end">
                <Button className="rounded-3 w-100" variant="primary">
                  Availability
                </Button>
              </div>
            </Col>
            <Col sm={12} md={5}>
              <div className="d-flex align-itmes-end">
                <Button className="rounded-3 w-100" variant="primary">
                  Book Now
                </Button>
              </div>
            </Col>
            <Col sm={12} md={1}></Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RoomCards;

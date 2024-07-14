import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

function RoomCards() {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/rooms")
      .then((res) => setRooms(res.rooms))
      .catch((err) => console.log(err));
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* rooms card */}

      <div className="container ">
        <Card style={{ width: "18rem" }} className="rounded shadow ">
          <Card.Img
            style={{ cursor: "pointer" }}
            onClick={handleShow}
            variant="top"
            src="https://r1imghtlak.mmtcdn.com/5c72f12f-9eba-4c73-9639-1dc5d0856526.webp"
          />
          <Card.Body>
            <Card.Title>Kerala Beach Resort</Card.Title>
            <Card.Text>
              <p>Type: Deluxe</p>
              <p>Price: 5000</p>
            </Card.Text>
            <Button className="w-100" variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
      </div>

      <Modal 
        show={show}
        onHide={handleClose}
        className="justify-content-center align-items-center d-flex shadow"
      >
        <Modal.Header closeButton >
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
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RoomCards;

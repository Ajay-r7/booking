
import { faFacebookF, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
    <>
        <section>

            <footer className="text-center text-white" style={{backgroundColor: 'blueviolet'}}>

                <div className="container p-4 pb-0">
                    <section className='d-flex justify-content-center p-4 border-bottom'>
                        <div className='me-5 d-block d-md-block'>
                            <span>Get connected with us on social networks:</span>
                        </div>

                        <div>
                            <a href='' className='me-4 text-reset'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                            <a href='' className='me-4 text-reset'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        
                        </div>
                    </section>
                    <div className="justify-content-center mt-3 ">
                    <h6 className='text-light fw-bold mb-4 '>Contact</h6>
                        <div className="d-flex justify-content-center mt-3" style={{cursor:'pointer'}}>
                        <p>
                            <FontAwesomeIcon icon={faHome} className="me-2" />
                            New York, NY 10012, US
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="ms-4 me-2" />
                            info@example.com
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} className="ms-4 me-2" /> + 01 234 567 88
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPrint} className="ms-4 me-2" /> + 01 234 567 89
                        </p>
                        </div>
                    </div>
                </div>

                <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                    © 2020 Copyright:
                    <a className="text-white" href="#">Hotelier.com</a>
                </div>

            </footer>

        </section>

    </>
  )
}

export default Footer

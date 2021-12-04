import React from 'react'
import { Card, Row, Col, Container, Image } from 'react-bootstrap'
import kovalam from '../images/kovalam.jpg'
import munnar from '../images/munnarr.jpg'
import alapuzha from '../images/ALAPUZHA.jpg'

function Destination() {
    return (

        <div id="destinations" className="destinations py-5">
             <h2 className="in-container fancy-title "> Top Destinations </h2>
            <Container>
                <Row className='text-center' >
                    <Col md={4} sm={8} >
                        <div>
                             <Image src={kovalam} alt="Kovalam beach" fluid style={{ width: "400px", height: "450px", borderRadius: '5px' }} />
                        </div>
                        <h3 className="font-normal" style={{ color: '#aeb849',}}>KOVALAM</h3>
                    </Col>
                    <Col md={4} sm={8} >
                        <div> <Image src={munnar} alt="Munnar" fluid style={{ width: "400px", height: "450px", borderRadius: '5px' }} /></div>
                        <h3 style={{ color: '#aeb849',  }}>MUNNAR</h3>
                    </Col>
                    <Col md={4} sm={8} >
                        <div> <Image src={alapuzha} alt="Alapuzha" fluid style={{ width: "400px", height: "450px", borderRadius: '5px' }} /></div>
                        <h3 style={{ color: '#aeb849',}}>ALAPUZHA</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Destination

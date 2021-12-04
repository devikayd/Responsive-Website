import React from 'react'
import { Carousel } from 'react-bootstrap'
import beach from '../images/beach.jpg'
import boatimage from '../images/boatimage.jpg'
import waterfall from '../images/waterfall.jpg'
import greenimg from '../images/greenimg.jpg'


const Sliding = () => {
    return (
        <div className="intro">
            <Carousel variant="white" fade={true} >
                <Carousel.Item interval={2000} className="h-75">
                    <img
                        src={beach}
                        alt="First slide"
                        className='d-block w-100 img-fluid'
                    />
                    <Carousel.Caption>
                        <h1 className="text-black" style={{ fontSize: "8vw", }}>Welcome</h1>
                        <p style={{ fontSize: "5vw", }}>Experience the beauty of nature</p>
                    </Carousel.Caption >
                </Carousel.Item>
                <Carousel.Item interval={2000} className="h-75">
                    <img
                        src={boatimage}
                        alt="Second slide"
                        className='d-block w-100  img-fluid'
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000} className="h-75">
                    <img
                        src={waterfall}
                        alt="athirapally aterfall"
                        className='d-block w-100  img-fluid'
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000} className="h-75" >
                    <img
                        src={greenimg}
                        alt="image of bridge"
                        className='d-block w-100  img-fluid'
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Sliding

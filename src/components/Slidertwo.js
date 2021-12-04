import React from 'react'
import { Carousel } from 'react-bootstrap'
import Landscapee from '../images/landscapet.jpg'
import sea2 from '../images/sea2.jpg'
import waterfall2 from '../images/thrissur.jpg'
import alapuzha from '../images/ALAPUZHA.jpg'
import IMAGE from '../images/IMAGE.jpg'


const Slidertwo = () => {
    return (
        <div id="explore" className="slider-two py-5">
            <h2 className="fancy-title"> Things to Do </h2>
            <Carousel variant="dark" fade={true} indicators={false}>
                <Carousel.Item interval={2000} >
                    <img
                        src={Landscapee}
                        alt="munnar hills"
                        className='d-block w-100'
                    />
                    <Carousel.Caption>
                        <h1 className="fancy-text text-white" style={{ fontSize: 80, }}>WAYANAD</h1>
                    </Carousel.Caption >
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        src={sea2}
                        alt="varkala sea"
                        className='d-block w-100'
                    />
                    <Carousel.Caption>
                        <h1 className="fancy-text text-white" style={{ fontSize: 80, fontFamily: "Serif" }}>VARKALA</h1>
                    </Carousel.Caption >
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        src={alapuzha}
                        alt="Third slide"
                        className='d-block w-100'
                    />
                    <Carousel.Caption>
                        <h1 className="fancy-text text-white" style={{ fontSize: 80, fontFamily: "Serif" }}>ALLEPPEY</h1>

                    </Carousel.Caption >
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        src={waterfall2}
                        alt="Third slide"
                        className='d-block w-100'
                    />
                    <Carousel.Caption>
                        <h1 className="fancy-text text-white" style={{ fontSize: 80, fontFamily: "San-Serif" }}>ATHIRAPALLY WATERFALL</h1>
                    </Carousel.Caption >
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        src={IMAGE}
                        alt="Third slide"
                        className='d-block w-100'
                    />
                    <Carousel.Caption>
                        <h1 className="fancy-text text-white" style={{ fontSize: 80, fontFamily: "Serif" }}>KALARI PAYATTU</h1>
                    </Carousel.Caption >
                </Carousel.Item>

            </Carousel>

        </div>
    )
}

export default Slidertwo

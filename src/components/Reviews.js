import React from 'react'
import { Carousel} from 'react-bootstrap'
import rewimage from '../images/rewimage.jpg'
import rewpeople from '../images/rewpeople.jpg'
import peprew from '../images/peprew.jpg'

function Reviews() {
    return (
        <div id="reviews" className="py-5">
            <h2 className="fancy-title">Reviews</h2>
            <Carousel className="inside-carousel w-100" nextIcon="" prevIcon="" variant="dark" controls="false" indicators={false}>
                <Carousel.Item interval={3000}>
                    <div className="review-card">
                        <div>
                            <img
                                className="reviews image-fluid"
                                src={rewimage}
                                alt="Firest slide"
                            />
                        </div>

                        <div className="px-4">
                            <h3>Alex Moei</h3>
                            <p className="review-info">Best places to visit.</p>
                        </div>

                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <div className="review-card">
                        <div>
                            <img
                                className="reviews"
                                src={rewpeople}
                                alt="Second slide"
                            />
                        </div>
                        <div className="px-4">
                            <h3>Natali Dew</h3>
                            <p className="review-info">The perfect combination-lone travelling, thank you.

                            </p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <div className="review-card">
                        <div>
                            <img
                                className="reviews"
                                src={peprew}
                                alt="Third slide"
                            />
                        </div>
                        <div className="px-4">
                            <h3>Juie Carter</h3>
                            <p className="review-info">Praesent commodo cursus magna, vel scelerisque.</p>
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Reviews

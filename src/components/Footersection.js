import React from 'react'

function Footersection() {
    return (
        <div id="contact" className="main footer" style={{backgroundColor:'#aeb849',objectFit:'cover'}}>
            <div className="container" style={{paddingTop:'80px'}}>
                <div className="row">
                <div className="col">
                    <h4>CONTACT US</h4>
                    <ul className="list-unstyled text-left">
                        <li>Address: 22 street india</li>
                        <li>Mobile : 147-489-0987</li>
                        <li>Email  : keralatourismkl@gmail.com</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>COMPANY</h4>
                    <ul className="list-unstyled">
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        </ul>
                </div>
                <div className="col">
                    <h4>LEARN MORE</h4>
                    <ul className="list-unstyled">
                        <li>Support </li>
                        <li>Developers</li>
                    </ul>
                </div>
                </div>

               <hr/>
               <div className="text-center p-4">
               <h6>© 2021 All Rights Reserved. Kerala Tourism is developed by devikayd.</h6>
               </div>
             

            </div>
            
        </div>
    )
}

export default Footersection

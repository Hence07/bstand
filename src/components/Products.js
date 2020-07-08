import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

class Products extends React.Component{

    render(){
        return(
            <Carousel>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./Images/bs01.png"
                    alt="first slide"
                />
                <Carousel.Caption>
                    <h3>Business Intelligence</h3>
                    <p>Technology-driven process for analyzing data and presenting actionable information .</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./Images/bs5.png"
                    alt="Second slide"
                />
            
                <Carousel.Caption>
                    <h3>Analytics</h3>
                    <p>Sophisticated capabilities for data modeling and reporting.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="./Images/bs02.png"
                    alt="Third slide"
                />
            
                <Carousel.Caption>
                    <h3>E-Commerce</h3>
                    <p>We provide e-commerce services.</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
    
}

export default Products;
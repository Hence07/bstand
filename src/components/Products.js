import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const imgUrls = [
	"https://www.canva.com/design/DAEAd15tdY4/clLLg2S76a7_4hYGhkDp6w/view?utm_content=DAEAd15tdY4&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu#1", 
	"https://drive.google.com/file/d/1xdOAFta_9ol9KLBEnG25k5gOme7E7DOz/view?usp=sharing",
	"https://drive.google.com/file/d/1hyeCDjiLH8IV3jClGiYSmVKCut-60OrQ/view?usp=sharing",
	"https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpghttps://drive.google.com/file/d/1s3BI7-CbPxsNhp36llH2zCQLw7wX0I85/view?usp=sharing",
	"https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpehttps://drive.google.com/file/d/1p_PkZAtpro5B5nskCAIBVLFCjt35VqJh/view?usp=sharingghttps://drive.google.com/file/d/1p_PkZAtpro5B5nskCAIBVLFCjt35VqJh/view?usp=sharing"
];

class Products extends React.Component {
	constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
		};
		
		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}
	
	previousSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	render () {
		return (
			<div className="carousel">
				<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
				<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
				<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
			</div>
		);
	}
}

const Arrow = ({ direction, clickFunction, glyph }) => (
	<div 
		className={ `slide-arrow ${direction}` } 
		onClick={ clickFunction }>
		{ glyph } 
	</div>
);

const ImageSlide = ({ url }) => {
	const styles = {
		backgroundImage: `url(${url})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	};
	
	return (
		<div className="image-slide" style={styles}></div>
	);
}


// class Products extends React.Component{

//     render(){
//         return(
//             <Carousel>
//                 <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://www.canva.com/design/DAEAd15tdY4/clLLg2S76a7_4hYGhkDp6w/view?utm_content=
//                     DAEAd15tdY4&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu"
//                     alt="First slide"
//                 />
//                 <Carousel.Caption>
//                     <h3>Business Intelligence</h3>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                 </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://www.nicesnippets.com/upload/thumbnail/year.png"
//                     alt="Second slide"
//                 />
            
//                 <Carousel.Caption>
//                     <h3>Analytics</h3>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                 </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                 <img
//                     className="d-block w-100"
//                     src="https://www.nicesnippets.com/upload/thumbnail/footer-social-icon-design-example-using-bootstrap-4.png"
//                     alt="Third slide"
//                 />
            
//                 <Carousel.Caption>
//                     <h3>E-Commerce</h3>
//                     <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                 </Carousel.Caption>
//                 </Carousel.Item>
//             </Carousel>
//         )
//     }
    
// }

export default Products;
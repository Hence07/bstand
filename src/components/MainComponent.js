import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import Nav from './NavbarComponent'
import Products from './Products';
import Contact from './ContactComponent';
import Homes from './Homes';
import Footer from './Footer';


class Main extends Component {
	constructor(props) {
		super(props);

	}


	render() {
        const HomePage = () => {
            return (
                <Homes />
            );
        }

		return (
			<div>
				
				<Nav />
				
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/products" component={Products} />
					<Route exact path="/contact" component={Contact} />
				</Switch>
				
				<Footer />
			</div>
		);
	}
}

export default Main;

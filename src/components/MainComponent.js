import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import Directory from './DirectoryComponent';
import Products from './components/Products';
import Contact from './components/ContactComponent';
import Homes from './components/Homes'
import Footer from './components/Footer';


class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pages: PAGES,
			comments:  COMMENTS,
			partners: PARTNERS,
			promotions: PROMOTIONS
		};
	}


	render() {
        const HomePage = () => {
            return (
                <Home 
				 page={this.state.pages.filter(page => page.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.state.partners.filter(partner => partner.featured)[0]}
				/>
            );
        }

		 const PageWithId = ({match}) => {
            return (
                <PageInfo 
                    page={this.state.pages.filter(page => page.id === +match.params.pageId)[0]}
                    comments={this.state.comments.filter(comment => comment.pageId === +match.params.pageId)}
                />
            );
        };

		return (
			<div>
				<Navbar dark color="primary">
					<div className="container">
						<NavbarBrand href="/">Seal Of Hope</NavbarBrand>
					</div>
				</Navbar>
				<Header />
				
				<Switch>
					<Route path="/home" component={HomePage} />
					<Route exact path="/contactus" component={Contact} />
					<Route exact path="/aboutus" render={() => <About partners={this.state.partners}/>} />
					<Route path="/directory/:pageId" component={PageWithId} />

					<Route exact path="/directory"render={() => <Directory pages={this.state.pages} />}
					/>
					<Redirect to="/home" />
				</Switch>
				
				<Footer />
			</div>
		);
	}
}

export default Main;

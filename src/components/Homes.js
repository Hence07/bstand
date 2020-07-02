import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

class Homes extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <React.Fragment>
      <div>
      <Navbar dark sticky="top" expand="md">
          <div className="container">
                <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/bs2.png" height="90" width="95" alt="logo" />Business Standard | Business Intelligence</NavbarBrand>
             </div>
    </Navbar>
        <div 
          className="b1"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
         Business Standard
        </div>
        {
          this.state.isHovering &&
          <div className="container">
            <div class="row">
              <div class="col">
                <h4>About Us</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
              </div>
              <div class="col">
                <h4>Our vision</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                   incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                   exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
          </div>
        }
      </div>
      </React.Fragment>
    );
  }
}

export default Homes;
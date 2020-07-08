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
                <NavbarBrand className="mr-auto" href="/"><img src="./Images/bs0.png" height="90" width="95" alt="logo" />Business Standard | Business Intelligence</NavbarBrand>
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
              <div class="col" id="col1">
                <h4>About Us</h4>
                  <p>At Business Standard, we’re obsessed with making data the most valuable asset in
                     any organization. We believe that when people have unconstrained access to explore 
                     massive amounts of data at the speed of thought, they can make data-driven decisions 
                     that can wholly impact the future of any business. We believe our entire future will 
                     be revolutionized by data. The real innovations will happen when we stop only asking 
                     the data ‘what happened’ and start asking it ‘what if’?
                  </p>
              </div>
              <div class="col" id="col2">
                <h4>Our vision</h4>
                <p>How we experience data is not what it used to be. An effective dashboard is great, but 
                  it’s not the solution to every problem. You want to get more value from your data, do more
                   with your data, and enable others to work with data in more ways. That’s why Looker provides
                    more options to help you unleash more powerful data experiences.</p>
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
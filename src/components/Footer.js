import React from 'react';
import {Link} from 'react-router-dom'


function Footer() {
    
    return(
        
  
        <footer className="site-footer">
        <div className="container">
            <div className="row">
                <div className="col  offset-1">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/contact'>contactUs</Link></li>
                    {/* <li><Link to='/faq'>FAQ</Link></li> */}
                    </ul>
                </div>
            </div>
        </div>
        </footer>
  
    )
}

export default Footer;
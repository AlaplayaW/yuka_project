import React from 'react';

import NavbarTitle from './NavbarTitle';
import Footer from './Footer';
import "./Layout.css";

const Layout = ({children}) => {
  return ( 
    <div className="Layout Site">
      <div className="Site-Content">
        <div className="Site-NavBar">
          <NavbarTitle />
        </div>
        <div className="Site-Children">
          {children}
        </div>
      </div>
      <div className="Site-Footer">
      <Footer />
      </div>
    </div>
   );
}
 
export default Layout;
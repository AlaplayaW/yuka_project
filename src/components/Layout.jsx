import React from 'react';
import NavbarTitle from './NavbarTitle';
import Footer from './Footer';

const Layout = ({children}) => {
  return ( 
    <>
    <NavbarTitle />
    <div >
    {children}
    </div>
    <Footer />
    </>
   );
}
 
export default Layout;
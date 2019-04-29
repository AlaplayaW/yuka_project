import React from 'react';

import NavbarTitle from './NavbarTitle';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({children}) => {
  return ( 
    <div className={styles.Layout}>
    <NavbarTitle />
    <div>
    {children}
    </div>
    <Footer />
    </div>
   );
}
 
export default Layout;
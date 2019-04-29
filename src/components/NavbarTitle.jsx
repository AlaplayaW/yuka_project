import React from "react";
import { Link } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";

import Logo from "../images/logo_yukids1.png";
import styles from "./NavbarTitle.module.css";

export default class NavbarTitle extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<Navbar expand="lg">
				<NavbarBrand className={`m-auto`} tag={Link} to="/">
					<img src={Logo} alt="logo yukids" className={styles.imgLogo} />
				</NavbarBrand>
				{/*Centre le titre quand on passe sur mobile*/}
				<NavbarToggler className="d-none" onClick={this.toggle} />
				{/*Fais disparaitre le toggler quand on passe sur mobile */}
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink className={styles.Link} tag={Link} to="/">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={styles.Link} tag={Link} to="/contact/">
								Contact
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={styles.Link} tag={Link} to="/faq/">
								F.A.Q
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={styles.Link} tag={Link} to="/apropos/">
								A propos
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

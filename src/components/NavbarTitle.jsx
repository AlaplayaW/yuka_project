import React from "react";
import { Link } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Media
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
			<Navbar color="white" light expand="lg" className="border-bottom">
				<NavbarBrand tag={Link} to="/">
					<Media object src={Logo} alt="logo yukids" className={styles.imgLogo} />
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink className={styles.Link} tag={Link} to="/">
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={styles.Link} tag={Link} to="/contact">
								Contact
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={styles.Link} tag={Link} to="/faq">
								F.A.Q
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink className={styles.Link} tag={Link} to="/apropos">
								A propos
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		);
	}
}

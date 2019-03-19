import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-md';
import './nav.scss';

class Nav extends Component {
	renderNavItem = () => {
		const { navItems } = this.props;

		return navItems.map(navItem => (
			<Button className="nav-container__button" key={"button-"+navItem.id} flat primary>
				<Link className="nav-container__button-link" key={"link-"+navItem.id} to={navItem.path}>
					{navItem.label}
				</Link>
			</Button>));
	}

	render() {
		return(
			<div className="nav-container">
				{this.renderNavItem()}
			</div>
		);
	}
}

Nav.propTypes = {
    navItems: PropTypes.array
}

export default Nav;
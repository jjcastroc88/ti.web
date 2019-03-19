import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helper from '../../utilities/helper';
import ProTypes from 'prop-types';
import { Toolbar, Button } from 'react-md';
import Nav from '../nav/nav';

class Header extends Component {
	render() {
		return(
			<Toolbar
				themed
      	nav={<Nav navItems={Helper.getMenu()} />}
      />
		);
	}
}

Header.propTypes = {
	currentMenu: ProTypes.object
}

export default Header;
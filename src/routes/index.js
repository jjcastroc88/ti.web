import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import HomeView from './HomeView/homeView';
import ClientView from './ClientView/clientView';
import ProductView from './ProductView/productView';
import ContactView from './ContactView/contactView';
import { NavigationDrawer } from 'react-md';
import Nav from '../components/nav/nav';
import Helper from '../utilities/helper';
import Category from '../components/category/category';

class Routes extends PureComponent {
	constructor(props) {
    super();

    this.state = { 
			drawerType: 'temporary'
		};
  }

  componentWillReceiveProps(nextProps) {
		this.setState({ drawerType: this.getCurrentPath(nextProps) });
  }

  getCurrentPath = ({ location: { pathname } }) => {
    const path = pathname.split('/')[1];
		
		return path === 'products' ? 'clipped' : 'temporary';
	};

	render() {
		return (
			<NavigationDrawer
				desktopDrawerType={this.state.drawerType}
				toolbarThemeType="themed"
				toolbarChildren={<Nav navItems={Helper.getMenu()} />}
				drawerHeaderChildren={<Category/>}
			>
				<Switch>
					<Route exact path="/" component={HomeView}/>
					<Route path="/clients" component={ClientView}/>
					<Route path="/products/:filter?" component={ProductView}/>
					<Route path="/contacts" component={ContactView}/>
				</Switch>
			</NavigationDrawer>
		);
	}
}

Routes.propTypes = {
	location: PropTypes.object.isRequired,
};

export default withRouter(Routes);
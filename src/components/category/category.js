import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Subheader, ListItem, Divider, Avatar, FontIcon} from 'react-md';
import './category.scss';

class Category extends Component {
	filterProducts = (filter) => {
		if(filter) {
			window.location.href ='/products/'+filter;
		} else {
			window.location.href ='/products';
		}
	}

	render() {
		return(
			<List className="list-categories dividers__example md-paper">
				<Subheader className="list-categories__subheader" primaryText="Categories" />
				<ListItem 
					leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>}/>}
					className="list-categories-item" 
					primaryText="All"
					onClick={() => this.filterProducts()}
				/>
				<Divider/>
				<ListItem 
					leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>}/>}
					className="list-categories-item" 
					primaryText="Tech"
					onClick={() => this.filterProducts('Tech')}
				/>
				<ListItem 
					leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>}/>}
					className="list-categories-item" 
					primaryText="Services"
					onClick={() => this.filterProducts('Services')}
				/>
				<ListItem
					leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>}/>}
					className="list-categories-item" 
					primaryText="Office"
					onClick={() => this.filterProducts('Office')}
				/>
			</List>
		);
	}
}

export default Category;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'react-md';
import './productCard.scss';

class ProductCard extends Component {
	render() {
		const { product } = this.props;
		
		return(
			<Paper
				key={product.ID}
				zDepth={4}
				className="container-card"
			>	
				<div key={'container-card-header'} className="container-card__header">
					<h1 className="container-card__header-title">{product.Name}</h1>
					<h2 className="container-card__header-subtitle">{ product.Categories.toString() + ' - ' + product.Brand}</h2>
				</div>
				<div key={'container-card-content'} className="container-card__content">
					<div className="container-card__content-image">
						<img src={product.Photo} alt={product.Name}/>
					</div>
					<div className="container-card__content-wrapper">
						<div className="container-card__content-wrapper-description">{product.Description}</div>
						<div className="container-card__content-wrapper-stock"><b>Stock:</b> {product.Stock}</div>
						<div className="container-card__content-wrapper-price"><b>Price:</b> ${product.Price}</div>
					</div>
				</div>
			</Paper>
		);
	}
}

ProductCard.propTypes = {
	product: PropTypes.object.isRequired
}

export default ProductCard;
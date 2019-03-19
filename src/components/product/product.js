import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../productCard/productCard';
import './product.scss';

class Product extends Component {
	componentWillMount() {
		this.getProductList(this.props);
	}

	getProductList = (props) => {
		const {
			filterProductCurrentState,
			requestProductCurrentState,
			location
		} = props;

		const pathSplit = location.pathname.split('/');
		const filter = pathSplit.length > 2 ? pathSplit[2] : null;

		if(filter) {
			filterProductCurrentState(filter);
		} else {
			requestProductCurrentState();
		} 
		
	}
	
	drawProduct = () => {
		const { productList, filteredList } = this.props;
		const dataToRender = filteredList && filteredList.length > 0 ? filteredList : productList; 
		
		if(dataToRender) {
			return dataToRender.map(dataItem => (<ProductCard product={dataItem} />));
		}
	}

	render() {
		const { totalItem, totalHidden} = this.props;

		return(
			<div className="container-product">
				<div className="container-product-disclaimer">Showing {totalItem} products-Hidden: {totalHidden}</div>
				{this.drawProduct()}
			</div>
		);
	}
}

Product.propTypes = {
	productList: PropTypes.array,
	filteredList: PropTypes.array,
	filterProductCurrentState: PropTypes.func.isRequired,
	requestProductCurrentState: PropTypes.func.isRequired,
	totalItem: PropTypes.number,
  totalHidden: PropTypes.number,
}

export default Product;
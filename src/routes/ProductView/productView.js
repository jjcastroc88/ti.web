import React, { Component } from 'react';
import { connect } from 'react-redux'
import Product from '../../components/product/product';
import { filterProductCurrentState, requestProductCurrentState  } from '../../actions/product/product';
import PropTypes from 'prop-types';

class ProductView extends Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Product {...this.props} />
    );
  }
}

ProductView.propTypes = {
  filterProductCurrentState: PropTypes.func,
  requestProductCurrentState: PropTypes.func
}

const mapStateToProps = state => ({
  productList: state.productState.data,
  filteredList: state.productState.dataFiltered,
  totalItem: state.productState.totalItem,
  totalHidden: state.productState.totalHidden,
});

export default connect(
  mapStateToProps,
  {
    filterProductCurrentState,
    requestProductCurrentState
  }
)(ProductView);
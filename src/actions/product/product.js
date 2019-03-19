import Api from '../../api/index';

const {
	PRODUCT_REQUEST_STATE_REQUEST,
	PRODUCT_REQUEST_STATE_SUCCESS,
	PRODUCT_REQUEST_STATE_FAILURE,
	PRODUCT_FILTER_STATE_REQUEST,
	PRODUCT_FILTER_STATE_SUCCESS,
	PRODUCT_FILTER_STATE_FAILURE,

} = require('../../constants/actionTypes');

const { URL_SERVER } = require('../../constants/config');

export const requestProductInProgress = reset => ({
	type: PRODUCT_REQUEST_STATE_REQUEST,
	data: { reset }
});

export const requestProductSuccess = data => ({
	type: PRODUCT_REQUEST_STATE_SUCCESS,
	data
});

export const requestProductFailure = error => ({
	type: PRODUCT_REQUEST_STATE_FAILURE,
	data: { error }
});

export const filterProductInProgress = reset => ({
	type: PRODUCT_FILTER_STATE_REQUEST,
	data: { reset }
});

export const filterProductSuccess = data => ({
	type: PRODUCT_FILTER_STATE_SUCCESS,
	data
});

export const filterProductFailure = error => ({
	type: PRODUCT_FILTER_STATE_FAILURE,
	data: { error }
});

export const requestProductCurrentState = (reset = false) => (dispatch, getState) => {
	const currentState = getState().productState;

	if(!currentState.isFetching) {
		dispatch(requestProductInProgress(reset));
		
		return Api.get(URL_SERVER+'/product').then(async (response) => {
			const data = await response.json();

			dispatch(requestProductSuccess(data));
		}).catch(error => {
			dispatch(requestProductFailure(error));
		});
	}
}

export const filterProductCurrentState = (reset = false) => (dispatch, getState) => {
	const currentState = getState().productState;
	
	if(!currentState.isFetching) {
		dispatch(filterProductInProgress(reset));
		
		return Api.get(URL_SERVER+'/product/' + reset).then(async (response) => {
			const data = await response.json();

			dispatch(filterProductSuccess(data));
		}).catch(error => {
			dispatch(filterProductFailure(error));
		});
	}
}
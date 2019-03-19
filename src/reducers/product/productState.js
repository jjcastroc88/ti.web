const {
	PRODUCT_REQUEST_STATE_REQUEST,
	PRODUCT_REQUEST_STATE_SUCCESS,
	PRODUCT_REQUEST_STATE_FAILURE,
	PRODUCT_FILTER_STATE_REQUEST,
	PRODUCT_FILTER_STATE_SUCCESS,
	PRODUCT_FILTER_STATE_FAILURE,
} = require('../../constants/actionTypes');

const initialState = {
	data: null,
	dataFiltered: null,
	isFetching: false,
	hasFetched: false,
	error: '',
	totalItem: 0,
	totalHidden: 0,
	isFiltered: false,
}

const productState = (state = initialState, action) => {
	switch (action.type) {
		case PRODUCT_REQUEST_STATE_REQUEST:
			return { ...state, ...{
					isFetching: true,
					error: '',
					hasFetched: action.data.reset ? false : state.hasFetched,
					data: action.data.reset ? null : state.data,
				}
			};

		case PRODUCT_REQUEST_STATE_SUCCESS:
			return { ...state, ...{
					data: action.data,
					hasFetched: true,
					isFetching: false,
					totalItem: action.data ? action.data.length : 0
				}
			};

		case PRODUCT_REQUEST_STATE_FAILURE:
			return { ...state, ...{
					error: action.data.error,
					isFetching: false,
					hasFetched: true,
				}
			};

		case PRODUCT_FILTER_STATE_REQUEST:
			return { ...state, ...{
					isFetching: true,
					error: '',
					hasFetched: action.data.reset ? false : state.hasFetched,
					dataFiltered: action.data.reset ? null : state.data
				}
			};

		case PRODUCT_FILTER_STATE_SUCCESS:
			return { ...state, ...{
					dataFiltered: action.data,
					hasFetched: true,
					isFetching: false,
					totalHidden: state.totalItem - action.data.length
				}
			};

		case PRODUCT_FILTER_STATE_FAILURE:
			return { ...state, ...{
					error: action.data.error,
					isFetching: false,
					hasFetched: true,
				}
			};

		default:
			return state
	}
}

export default productState;
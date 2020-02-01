import * as Types from './../constants/actionTypes';

const initialState = null

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case Types.SET_ITEM_EDITING : {
			return action.product;
		}
		default:
			return state;
	}
}

export default reducer;
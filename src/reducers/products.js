import * as Types from './../constants/actionTypes';

const initialState = []

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case Types.FETCH_PRODUCTS : {
			state = action.products;
			return [...state];
		}
		case Types.DELETE_PRODUCTS : {
			let index = findIndexOf(action.id, state);
			return [...state.slice(0, index), ...state.slice(index+1)];
		}
		case Types.ADD_PRODUCT : {
			return [...state, action.product]
		}
		case Types.UPDATE_PRODUCT : {
			let index = findIndexOf(action.product.id, state);
			return [...state.slice(0, index), action.product, ...state.slice(index+1)];
		}
		default:
			return state;
	}
}

const findIndexOf = (id, products) => {
    let result = -1;
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  }

export default reducer;
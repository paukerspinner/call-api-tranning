import * as Types from './../constants/actionTypes';
import CallApi from './../utils/apiCaller';

export const fetchProducts = products => {
	return {
		type: Types.FETCH_PRODUCTS,
		products
	}
}

export const fetchProductsRequest = () => {
	return (dispatch) => {
		return CallApi('products', 'GET', null).then(response => {
			dispatch(fetchProducts(response.data))
		})
	}
}

export const deleteProduct = id => {
	return {
		type: Types.DELETE_PRODUCTS,
		id
	}
}

export const deleteProductRequest = id => {
	return (dispatch) => {
		CallApi(`products/${id}`, 'DELETE', null).then(response =>{
			dispatch(deleteProduct(id));
		})
	}
}

export const addProduct = product => {
	return {
		type: Types.ADD_PRODUCT,
		product
	}
}

export const addProductRequest = product => {
	return (dispatch) => {
		CallApi('products', 'POST', product).then(response => {
			dispatch(addProduct(response.data));
		})
	}
}

export const updateProduct = product => {
	return {
		type: Types.UPDATE_PRODUCT,
		product
	}
}

export const updateProductRequest = product => {
	return dispatch => {
		CallApi(`products/${product.id}`, 'PUT', product).then(response => {
			dispatch(updateProduct(response.data));
		})
	}
}

export const setItemEditing = product => {
	return {
		type: Types.SET_ITEM_EDITING,
		product
	}
}

export const setItemEditingRequest = id => {
	return dispatch => {
		CallApi(`products/${id}`).then(response => {
			dispatch(setItemEditing(response.data));
		})
	}
}
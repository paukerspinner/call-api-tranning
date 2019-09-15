import React from 'react';
import ProductAction from './../../components/ProductAction/productAction';

class ProductActionPage extends React.Component {
	render() {
		return (
			<ProductAction history={ this.props.history } match={this.props.match}/>
		)
	}
}

export default ProductActionPage;

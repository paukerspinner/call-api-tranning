import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as Actions from './../../actions/index';

class ProductAction extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			price: '',
			available: false
		}
	}

	componentDidMount() {
		const { match } = this.props;
		if (match) {
			const { id } = match.params;
			this.props.setItemEditing(id);
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps && nextProps.itemEditing) {
			const { id, name, price, available } = nextProps.itemEditing;
			this.setState({
					id, name, price, available
			})
		}
	}

	findIndexOf = (id, products) => {
		let result = -1;
		for (let i = 0; i < products.length; i++) {
			if (products[i].id === id) {
				result = i;
				break;
			}
		}
		return result;
	}

	render() {
		if (this.state.redirectToProducts === true) {
			return (<Redirect to="/products" />)
		}
		const titleForm = this.state.id === '' ? 'Add a product' : 'Update a product';
		const { name, price, available } = this.state;
		return (
			<div className="row">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<form className="form-horizontal">
						<legend>{ titleForm }</legend>
					
						<div className="form-group">
							<label htmlFor="name" className="col-xs-2 control-label">Name</label>
							<div className="col-xs-10">
								<input type="text" className="form-control" name="name" value={ name } onChange={ this.onHandleChange } />
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="price" className="col-xs-2 control-label">Price</label>
							<div className="col-xs-10">
								<input type="text" className="form-control" name="price" value={ price } onChange={ this.onHandleChange } />
							</div>
						</div>

						<div className="form-group">
							<div className="col-xs-offset-2 col-xs-10">
								<div className="checkbox">
									<label>
										<input type="checkbox" name="available" onChange={ this.onHandleChange } checked={available}/>
										available
									</label>
								</div>
							</div>
						</div>
						
						<div className="form-group">
							<div className="col-xs-offset-2 col-xs-10">
								<button type="submit" className="btn btn-primary" onClick={ this.onHandleSubmit }>Submit</button>&nbsp;
						 		<Link to="/products" className="btn btn-danger">Cancel</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}

	onHandleChange = event => {
		const { target } = event;
		const { name } = target;
		this.setState({
			[name] : target.type === 'checkbox' ? target.checked : target.value
		})
	}

	onHandleSubmit = event => {
		event.preventDefault();
		const { id, name, price, available } = this.state;
		if (name !== '' && price !=='') {
			let product = { id, name, price, available };
			if (id === '') {
				this.props.addProductRequest(product);
				this.setState({
					redirectToProducts: true
				})
			} else {
				this.props.updateProductRequest(product);
				this.setState({
					redirectToProducts: true
				})
			}
		} else {
			alert("Ban chua dien day du thong tin");
		}
	}
}

const mapStataToProps = state => {
	return {
		itemEditing: state.itemEditing
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addProductRequest: product => dispatch(Actions.addProductRequest(product)),
		updateProductRequest: product => dispatch(Actions.updateProductRequest(product)),
		setItemEditing: id => dispatch(Actions.setItemEditingRequest(id))
	}
}

export default connect(mapStataToProps, mapDispatchToProps)(ProductAction);
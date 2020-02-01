import React from 'react';
import ProductItem from './../ProductItem/productItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from './../../actions/index';

class ProductList extends React.Component {

  componentDidMount() {
    this.props.fetchProductsRequest();
  }

  render() {
    const { products } = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/add" className="btn btn-primary">Them san pham</Link>
        <div className="panel panel-info mt-10">
          <div className="panel-heading">
            <h3 className="panel-title">Danh sach san pham</h3>
          </div>
          <div className="panel-body">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Ma</th>
                  <th>Ten</th>
                  <th>Gia</th>
                  <th>Trang thai</th>
                  <th>Hanh dong</th>
                </tr>
              </thead>
              <tbody>
                { this.showProducts(products) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  showProducts = products => {
    return products.map((product, index) => {
      return (<ProductItem key={index} index={index} product={product} onDelete={ this.onDelete }/>)
    })
  }

  onDelete = id => {
    this.props.deleteProductRequest(id);
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsRequest: () => dispatch(Actions.fetchProductsRequest()),
    deleteProductRequest: id => dispatch(Actions.deleteProductRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

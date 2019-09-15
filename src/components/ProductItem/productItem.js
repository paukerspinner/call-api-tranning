import React from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {
  render() {
    const { index, product } = this.props;
    const { id, name, price, available } = product;
    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ id }</td>
        <td>{ name }</td>
        <td>{ price }</td>
        <td>
          {
            available ? <span className="label label-success">Con hang</span>
                      : <span className="label label-warning">Het hang</span>
          }
        </td>
        <td>
          <Link to={`/${id}/edit`} className="btn btn-warning">
            Sua
          </Link>&nbsp;
          <button type="button" className="btn btn-danger" onClick={ () => this.onDelete(id) }>
            Xoa
          </button> 
        </td>
      </tr>
    );
  }

  onDelete = id => {
    if (confirm('Ban co chac chan xoa?')) { // eslint-disable-line
      this.props.onDelete(id);
    }
  }
}

export default ProductItem;

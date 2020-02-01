import React from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Products',
    to: '/products',
    exact: false
  }
]

const MenuLink = ({ to, label, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => (
          <li className={ match? 'active': '' }>
            <Link to={to}> { label } </Link>
          </li>
      )}
    />
  )
}

class Menu extends React.Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <a className="navbar-brand" href=".#">CallAPI</a>
          <ul className="nav navbar-nav">
            { this.showMenus(menus) }
          </ul>
        </div>
      </div>
    );
  }

  showMenus = menus => {
    return menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          to={menu.to}
          label={menu.name}
          activeOnlyWhenExact={menu.exact}
        />
      )
    })
  }
}

export default Menu;

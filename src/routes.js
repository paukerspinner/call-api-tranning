import React from 'react';
import HomePage from './pages/HomePage/homePage';
import NotFoundPage from './pages/NotFoundPage/notFoundPage';
import ProductListPage from './pages/ProductListPage/productListPage';
import ProductActionPage from './pages/ProductActionPage/productActionPage';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <HomePage />
	},
	{
		path: '/products',
		exact: false,
		main: () => <ProductListPage />
	},
	{
		path: '/add',
		exact: false,
		main: ({history}) => <ProductActionPage history={history} />
	},
	{
		path: '/:id/edit',
		exact: false,
		main: ({match, history}) => <ProductActionPage match={match} history={history} />
	},
	{
		path: '',
		exact: false,
		main: () => <NotFoundPage />
	}
]

export default routes;
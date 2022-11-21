import { createBrowserRouter } from 'react-router-dom'
import { Cat, Home } from '../views'
import { loaderCat } from '../views/Cat/Cat'
import Wrapper from '../Wrapper'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Wrapper />,
		errorElement: <p>Oh no... that page doesn't exist </p>,
		children: [
			{
				index: true,
				path: '/',
				element: <Home />,
			},
			{
				path: '/cat/:id',
				element: <Cat />,
				loader: loaderCat,
			},
		],
	},
])

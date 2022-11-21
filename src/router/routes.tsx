import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Cat from '../views/Cat/Cat'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <p>Ups... that route not exist 😾</p>,
	},
	{
		path: '/cat/:id',
		element: <Cat />,
		errorElement: <p>Ups... not found cat 😾</p>,
	},
])

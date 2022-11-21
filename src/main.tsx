import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'

import style from './App.module.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<main className={style.container}>
			<RouterProvider router={router} />
		</main>
	</React.StrictMode>
)

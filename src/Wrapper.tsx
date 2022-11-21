import { Outlet } from 'react-router-dom'

import Footer from './components/Footer'
import NavBar from './components/Navbar'

import style from './App.module.css'
export default function Wrapper() {
	return (
		<main className={style.container}>
			<NavBar />
			<Outlet />
			<Footer />
		</main>
	)
}

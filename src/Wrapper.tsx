import { Outlet } from 'react-router-dom'

import Footer from './components/Footer'
import NavBar from './components/Navbar'

export default function Wrapper() {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	)
}

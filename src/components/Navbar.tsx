import { Link } from 'react-router-dom'
import style from './NavBar.module.css'

export default function NavBar() {
	return (
		<nav className={style.container}>
			<Link to='/'>
				<img src="/logos/CatwikiLogo.svg" alt="cat wiki logo" />
			</Link>
		</nav>
	)
}

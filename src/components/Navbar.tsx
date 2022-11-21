import style from './NavBar.module.css'

export default function NavBar() {
	return (
		<nav className={style.container}>
			<img src="/logos/CatwikiLogo.svg" alt="cat wiki logo" />
		</nav>
	)
}

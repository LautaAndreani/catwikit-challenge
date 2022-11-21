import style from './Footer.module.css'

export default function Footer() {
	return (
		<footer className={style.footer}>
			<img src="/logos/CatwikiLogo.svg" alt="cat wiki logo" />
			<p>© created by LautaAndreani - devChallenge.io 2021</p>
		</footer>
	)
}

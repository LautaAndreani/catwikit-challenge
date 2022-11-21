import style from './MainCard.module.css'
type Props = {
	catImage: string
	name: string
}

export default function MainCard({ catImage, name }: Props) {
	return (
		<span className={style.card_img}>
			<img className={style.img_content} src={catImage} alt={name} />
			<p>{name}</p>
		</span>
	)
}

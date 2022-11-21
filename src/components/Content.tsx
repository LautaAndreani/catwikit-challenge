import style from './Content.module.css'

export default function Content() {
	return (
		<section className={style.container}>
			<div className={style.content_left}>
				<h3>Why should you have a cat?</h3>
				<p>
					Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and
					anxiety leves
				</p>
				<a href="">
					<small>
						<b>READ MORE →</b>
					</small>
				</a>
			</div>

			<div className={style.content_right}>
				<div className={style.grid}>
					<div className={style.column}>
						<img src="/grids/image2.png" alt="cat picture" />
						<img src="/grids/image1.png" alt="cat picture" />
					</div>
					<img src="/grids/image3.png" alt="cat picture" />
				</div>
			</div>
		</section>
	)
}

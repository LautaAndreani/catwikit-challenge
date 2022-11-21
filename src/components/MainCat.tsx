import style from './MainCat.module.css'
import { favourites } from '../api/mock'
import MainCard from './MainCard'

export default function MainCat() {
	return (
		<div className={style.main_container}>
			<section className={style.cat_container}>
				<div className={style.cat_info}>
					<img src="/logos/CatwikiLogo.svg" alt="cat wiki logo" className={style.cat_logo} />
					<h2>Get to know more about your cat breed</h2>
					<span className={style.input}>
						<input type="text" placeholder="Enter your breed" />
						<img src="/icons/search.svg" alt="search input icon" />
					</span>
				</div>
			</section>

			<section className={style.bottom}>
				<div className={style.bottom_content}>
					<p className={style.bottom_text}>Most Searched Breed</p>
					<span className={style.bottom_title}>
						<h1 className={style.bottom_h1}>66+ Breeds For you to discover</h1>
						<a href="">
							<small>
								<b>
									SEE MORE <span>→</span>
								</b>
							</small>
						</a>
					</span>
					<div className={style.cat_card}>
						{favourites.map((cat: any) => (
							<MainCard catImage={cat.image.url} name={cat.name} key={cat.id} />
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

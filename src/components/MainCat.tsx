import { useState } from 'react'

import { favourites } from '../api/mock'
import { Favourite } from '../models/types'

import style from './MainCat.module.css'

import MainCard from './MainCard'
import DataList from './DataList'
import { useNavigate } from 'react-router-dom'

export default function MainCat() {
	const [isFocus, setIsFocus] = useState(false)
	const [value, setValue] = useState('')
	const navigate = useNavigate()

	function handleForm (catName: string, id = '') {
		setValue(catName)
		return navigate(`/cat/${id}`)
	}
	return (
		<div className={style.main_container}>
			<section className={style.cat_container}>
				<div className={style.cat_info}>
					<img src="/logos/CatwikiLogo.svg" alt="cat wiki logo" className={style.cat_logo} />
					<h2>Get to know more about your cat breed</h2>
					<form onMouseEnter={() => setIsFocus(true)} className={style.form}>
						<span className={style.input}>
							<input type="text" autoComplete='off' onChange={(e) => setValue(e.target.value)} value={value || ''} name="breeds-names" placeholder="Enter your breed" />
							<button type="submit" className={style.form_btn}>
								<img src="/icons/search.svg" alt="search input icon" />
							</button>
						</span>
						<DataList isFocus={isFocus} setIsFocus={setIsFocus}>
							{favourites.map((cat: Favourite) => (
								<option value={cat.name} key={cat.id} onClick={() => handleForm(cat.name, cat.id)}>{cat.name}</option>
							))}
						</DataList>
					</form>
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
						{favourites.map((cat: Favourite) => (
							<MainCard catImage={cat.image.url} name={cat.name} key={cat.id} />
						))}
					</div>
				</div>
			</section>
		</div>
	)
}

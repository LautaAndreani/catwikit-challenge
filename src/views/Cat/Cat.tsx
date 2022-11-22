import { useLoaderData } from 'react-router-dom'
import { api } from '../../api/api'

import { favourites } from '../../api/mock'
import Chart from '../../components/Chart'
import { Breed, Image } from '../../models/types'

import style from './Cat.module.css'

type Response = { detail: Breed[]; images: Image[] }

export default function Cat() {
	const { detail, images } = useLoaderData() as Response

	if (detail)
		return (
			<>
				{detail.map(cat => (
					<section key={cat.id} className={style.cat}>
						<span>
							<img src={cat.image.url} alt={style.name} className={style.cat_image} />
						</span>
						<div className={style.right}>
							<h2>{cat.name}</h2>
							<p>{cat.description}</p>
							<div className={style.detail}>
								<span>
									<b>Temperament: </b>
									{cat.temperament}
								</span>
								<span>
									<b>Origin: </b>
									{cat.origin}
								</span>
								<span>
									<b>Life Span: </b>
									{cat.life_span} years
								</span>
								<div className={style.chart}>
									<Chart label="Adaptability" length={cat.adaptability}></Chart>
									<Chart label="Affection level" length={cat.affection_level}></Chart>
									<Chart label="Child Friendly" length={cat.child_friendly}></Chart>
									<Chart label="Grooming" length={cat.grooming}></Chart>
									<Chart label="Intelligence" length={cat.intelligence}></Chart>
									<Chart label="Health issue" length={cat.health_issues}></Chart>
									<Chart label="Social needs" length={cat.social_needs}></Chart>
									<Chart label="Stranger friendly" length={cat.stranger_friendly}></Chart>
								</div>
							</div>
						</div>
					</section>
				))}
				<div>
					<h3 className={style.chart_title}>Other photos</h3>
					<div className={style.photos}>
						{images.map(cat => (
							<img src={cat.url} key={cat.id} />
						))}
					</div>
				</div>
			</>
		)

	return <div>Ups... cat not found</div>
}

export const loaderCat = async ({ params }: any) => {
	const detail: Breed[] = favourites.filter(cat => cat.id === params.id)
	const images: Image[] = await api.images(params.id)

	return { detail, images }
}

interface BreeImage {
	url: string
}

export interface Breed {
	id: string
	name: string
	image: BreeImage
	temperament: string
	description: string
	origin: string
	life_span: string
	adaptability: number
	affection_level: number
	child_friendly: number
	grooming: number
	intelligence: number
	health_issues: number
	social_needs: number
	stranger_friendly: number
}

export interface Favourite {
	image: BreeImage
	name: string
	id: string
}

import { Breed, Favourite, Image } from '../models/types'
const isProd = import.meta.env.VITE_ENVIRONMENT === 'production' 

const PARAMETERS = {
	method: 'GET',
	headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
}

async function handlePromise(URL = '') {
	try {
		const response = await fetch(URL, PARAMETERS)
		const data = await response.json()
		return data
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message)
		}
	}
}

export const api = {
	favourites: async (): Promise<Favourite[] | undefined> => isProd ? await handlePromise('https://api.thecatapi.com/v1/breeds?limit=4') : import('./mock/favourites.json').then(mod => mod.default),
	breeds: async (): Promise<Breed['name'][] | undefined> => isProd ? await handlePromise('https://api.thecatapi.com/v1/breeds') : import('./mock/favourites.json').then(mod => mod.default),
	images: async(breed_id = ''): Promise<Image[]> => isProd ? await handlePromise(`https://api.thecatapi.com/v1/images/search?breed_id=${breed_id}&limit=8`) : import('./mock/images.json').then(mod => mod.default)
}

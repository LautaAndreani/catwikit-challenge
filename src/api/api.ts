import { Breed } from '../models/types'

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
	favourites: async (): Promise<Breed[] | undefined> => await handlePromise('https://api.thecatapi.com/v1/breeds?limit=4'),
	breeds: async (): Promise<Breed['name'][] | undefined> => await handlePromise('https://api.thecatapi.com/v1/breeds'),
}

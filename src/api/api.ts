// const URL =
// 	'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_hx5ryJHLWEk540t1AtT9YHbBZKPJU2lAc9pQfyxQNsd5ULST0ZcSwCKrv9aimZ0Z'
// // const URLFAVORITES = https://api.thecatapi.com/v1/favourites?api_key=17d94b92-754f-46eb-99a0-65be65b5d18f

const PARAMETERS = {
	method: 'GET',
	headers: { 'x-api-key': import.meta.env.VITE_API_KEY },
}
export const api = {
	favourites: async (): Promise<any> => {
		try {
			const response = await fetch('https://api.thecatapi.com/v1/breeds?limit=4', PARAMETERS)
			const data = await response.json()
			return data
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message)
			}
		}
	},
}

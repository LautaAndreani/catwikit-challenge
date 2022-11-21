import { useLoaderData } from 'react-router-dom'

export default function Cat() {
	const { data } = useLoaderData()
	return <div>Cat</div>
}

export const loaderCat = async ({ params }) => {
	const data = params.id

	return { data }
}

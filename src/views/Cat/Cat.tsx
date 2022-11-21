import { useLoaderData } from 'react-router-dom'

export default function Cat() {
	const params = useLoaderData()
	return <div>Cat</div>
}

export const loaderCat = async ({ params }: any) => {
	const data = params.id

	return { data }
}

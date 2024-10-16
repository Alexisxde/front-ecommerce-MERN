import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const API_URL = import.meta.env.VITE_API_URL

const axiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${API_KEY}`
	}
})

export async function getAllProducts(page = 1, active = '1') {
	try {
		const response = await axiosInstance.get('api/products', {
			params: { page, active }
		})
		return response.data.results
	} catch (error) {
		throw new Error('Error fetching movies: ' + error.message)
	}
}

export async function getOneProduct(slug) {
	try {
		const response = await axiosInstance.get(`api/products/${slug}`)
		return response.data
	} catch (error) {
		throw new Error('Error fetching movies: ' + error.message)
	}
}

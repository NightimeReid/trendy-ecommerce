import { error } from '@sveltejs/kit';
import { getProduct } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const product = await getProduct(params.id);

	if (!product) {
		throw error(404, 'Product not found');
	}

	return {
		product
	};
};

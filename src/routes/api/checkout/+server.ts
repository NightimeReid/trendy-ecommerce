import { json } from '@sveltejs/kit';
import Stripe from 'stripe';
import { STRIPE_SECRET_KEY } from '$env/static/private';
import type { RequestHandler } from './$types';

const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null;

export const POST: RequestHandler = async ({ request, url }) => {
	try {
		if (!stripe) {
			throw new Error('Stripe Secret Key is not configured in .env');
		}

		const { items } = await request.json();
		
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: items.map((item: any) => ({
				price_data: {
					currency: 'usd',
					product_data: {
						name: item.name,
						images: [item.image_url],
					},
					unit_amount: Math.round(item.price * 100),
				},
				quantity: item.quantity,
			})),
			mode: 'payment',
			success_url: `${url.origin}/success`,
			cancel_url: `${url.origin}/`,
		});

		return json({ id: session.id, url: session.url });
	} catch (error: any) {
		return json({ error: error.message }, { status: 500 });
	}
};

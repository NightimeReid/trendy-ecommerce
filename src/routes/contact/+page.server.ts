import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const phone = data.get('phone');
		const message = data.get('message');

		// In a real app, you would save this to Supabase here
		// e.g. await supabase.from('contact_messages').insert({ name, email, phone, message });
		
		console.log('Contact form submission:', { name, email, phone, message });

		return { success: true };
	}
} satisfies Actions;

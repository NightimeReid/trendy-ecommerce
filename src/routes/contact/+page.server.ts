import { supabase } from '$lib/supabase';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const phone = data.get('phone');
		const message = data.get('message');

		const { error } = await supabase
			.from('contact_messages')
			.insert({ name, email, phone, message });
		
		if (error) {
			console.error('Error saving contact message:', error);
			return { success: false, error: 'Failed to send message.' };
		}

		return { success: true };
	}
} satisfies Actions;

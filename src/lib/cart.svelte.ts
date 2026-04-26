import { writable } from 'svelte/store';
import type { Product } from './db';

export interface CartItem extends Product {
	quantity: number;
}

function createCart() {
	const { subscribe, set, update } = writable<CartItem[]>([]);

	return {
		subscribe,
		addItem: (product: Product) => update(items => {
			const existingItem = items.find(i => i.id === product.id);
			if (existingItem) {
				return items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
			}
			return [...items, { ...product, quantity: 1 }];
		}),
		removeItem: (id: string) => update(items => items.filter(i => i.id !== id)),
		updateQuantity: (id: string, quantity: number) => update(items => 
			items.map(i => i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i)
		),
		clear: () => set([])
	};
}

export const cart = createCart();

<script lang="ts">
	import { cart } from '$lib/cart.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	async function handleCheckout() {
		const response = await fetch('/api/checkout', {
			method: 'POST',
			body: JSON.stringify({ items: $cart }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();
		if (data.url) {
			window.location.href = data.url;
		} else {
			alert('Checkout failed: ' + (data.error || 'Unknown error'));
		}
	}
</script>

<div class="max-w-4xl mx-auto space-y-8">
	<h1 class="text-4xl font-extrabold tracking-tighter">Your Shopping Cart</h1>

	{#if $cart.length === 0}
		<div class="text-center py-20 bg-muted rounded-xl border-2 space-y-4">
			<p class="text-2xl font-bold text-muted-foreground">Your cart is empty.</p>
			<Button href="/" size="lg" class="text-xl py-8 px-12">Start Shopping</Button>
		</div>
	{:else}
		<div class="space-y-6">
			{#each $cart as item}
				<Card.Root class="flex flex-col md:flex-row items-center p-6 gap-6 border-2">
					<img src={item.image_url} alt={item.name} class="w-32 h-32 object-cover rounded-md" />
					<div class="flex-1 text-center md:text-left space-y-2">
						<h2 class="text-2xl font-bold">{item.name}</h2>
						<p class="text-muted-foreground">{item.description}</p>
					</div>
					<div class="flex items-center gap-4">
						<Button variant="outline" onclick={() => cart.updateQuantity(item.id, item.quantity - 1)} class="text-2xl h-12 w-12">-</Button>
						<span class="text-2xl font-bold w-8 text-center">{item.quantity}</span>
						<Button variant="outline" onclick={() => cart.updateQuantity(item.id, item.quantity + 1)} class="text-2xl h-12 w-12">+</Button>
					</div>
					<div class="text-2xl font-bold text-primary w-32 text-right">
						${(item.price * item.quantity).toFixed(2)}
					</div>
					<Button variant="ghost" onclick={() => cart.removeItem(item.id)} class="text-destructive font-bold text-lg">Remove</Button>
				</Card.Root>
			{/each}

			<div class="flex flex-col md:flex-row justify-between items-center p-8 bg-muted rounded-xl border-2 gap-8">
				<div class="text-center md:text-left">
					<p class="text-xl text-muted-foreground">Total Amount</p>
					<p class="text-5xl font-black text-primary">
						${$cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
					</p>
				</div>
				<Button onclick={handleCheckout} class="w-full md:w-auto text-3xl py-12 px-20 font-black">
					PROCEED TO CHECKOUT
				</Button>
			</div>
		</div>
	{/if}
</div>

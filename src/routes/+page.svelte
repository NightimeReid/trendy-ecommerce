<script lang="ts">
	import { getProducts } from '$lib/db';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { cart } from '$lib/cart.svelte';

	let productsPromise = getProducts();
</script>

<section class="space-y-8">
	<div class="flex flex-col items-center text-center space-y-4">
		<h1 class="text-4xl md:text-6xl font-extrabold tracking-tighter">
			Simple. Trendy. <span class="text-muted-foreground">Accessible.</span>
		</h1>
		<p class="text-muted-foreground text-xl max-w-[700px]">
			High-quality tech products designed for everyone. Large buttons, clear displays, and modern aesthetics.
		</p>
	</div>

	{#await productsPromise}
		<div class="flex justify-center py-20">
			<p class="text-2xl font-semibold animate-pulse">Loading products...</p>
		</div>
	{:then products}
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each products as product}
				<Card.Root class="overflow-hidden border-2 transition-all hover:border-primary group">
					<a href="/product/{product.id}" class="block">
						<div class="aspect-square relative overflow-hidden bg-muted">
							<img 
								src={product.image_url} 
								alt={product.name}
								class="object-cover w-full h-full transition-transform group-hover:scale-105"
							/>
						</div>
						<Card.Header>
							<Card.Title class="text-2xl font-bold group-hover:text-primary transition-colors">{product.name}</Card.Title>
							<Card.Description class="text-lg">{product.category}</Card.Description>
						</Card.Header>
						<Card.Content>
							<p class="text-3xl font-black text-primary">${product.price.toFixed(2)}</p>
						</Card.Content>
					</a>
					<Card.Footer>
						<Button 
							class="w-full text-xl py-8 font-bold" 
							size="lg"
							onclick={() => cart.addItem(product)}
						>
							Add to Cart
						</Button>
					</Card.Footer>
				</Card.Root>
			{/each}
		</div>
	{:catch error}
		<div class="text-center py-20">
			<p class="text-destructive text-2xl font-bold">Failed to load products.</p>
		</div>
	{/await}
</section>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { cart } from '$lib/cart.svelte';
	import { ArrowLeft, ShoppingCart } from 'phosphor-svelte';

	let { data } = $props();
</script>

<div class="max-w-6xl mx-auto space-y-8">
	<Button href="/" variant="ghost" class="text-xl gap-2 h-14">
		<ArrowLeft size={24} />
		Back to Shop
	</Button>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
		<div class="aspect-square bg-muted rounded-2xl overflow-hidden border-2">
			<img 
				src={data.product.image_url} 
				alt={data.product.name} 
				class="w-full h-full object-cover transition-transform hover:scale-105" 
			/>
		</div>

		<div class="space-y-8">
			<div class="space-y-2">
				<p class="text-xl font-bold text-muted-foreground uppercase tracking-widest">{data.product.category}</p>
				<h1 class="text-5xl md:text-6xl font-black tracking-tighter leading-tight">
					{data.product.name}
				</h1>
			</div>

			<p class="text-2xl text-muted-foreground leading-relaxed">
				{data.product.description}
			</p>

			<div class="flex flex-col gap-6 pt-4">
				<p class="text-6xl font-black text-primary">
					${data.product.price.toFixed(2)}
				</p>
				
				<div class="flex flex-col sm:flex-row gap-4">
					<Button 
						size="lg" 
						class="flex-1 text-2xl py-10 font-black gap-4"
						onclick={() => cart.addItem(data.product)}
					>
						<ShoppingCart size={32} />
						ADD TO CART
					</Button>
					
					<div class="p-6 bg-muted rounded-xl border-2 text-center">
						<p class="text-sm font-bold text-muted-foreground uppercase">Availability</p>
						<p class="text-xl font-black">
							{data.product.stock_count > 0 ? `${data.product.stock_count} IN STOCK` : 'OUT OF STOCK'}
						</p>
					</div>
				</div>
			</div>

			<div class="p-8 bg-primary/5 rounded-2xl border-2 border-primary/20 space-y-4">
				<h3 class="text-xl font-bold uppercase tracking-tighter">Why we love this</h3>
				<ul class="space-y-3 text-lg">
					<li class="flex items-center gap-3">
						<span class="w-2 h-2 bg-primary rounded-full"></span>
						Modern, tech-trendy aesthetic
					</li>
					<li class="flex items-center gap-3">
						<span class="w-2 h-2 bg-primary rounded-full"></span>
						Highly accessible large-print interface
					</li>
					<li class="flex items-center gap-3">
						<span class="w-2 h-2 bg-primary rounded-full"></span>
						Built for performance and durability
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { onMount } from 'svelte';
	import { cart } from '$lib/cart.svelte';

	onMount(() => {
		cart.clear();
	});
</script>

<div class="max-w-2xl mx-auto text-center space-y-8 py-20">
	<div class="space-y-4">
		<h1 class="text-6xl font-black tracking-tighter text-primary">SUCCESS!</h1>
		<p class="text-3xl font-bold">Your order is on the way.</p>
		<p class="text-xl text-muted-foreground">
			We've sent a confirmation email to your inbox. Thank you for shopping with Fix It Tech.
		</p>
	</div>
	
	<div class="p-8 bg-muted rounded-2xl border-2 space-y-4">
		<p class="text-2xl font-bold">Need help with your order?</p>
		<p class="text-xl">Call us directly at <span class="text-primary font-black">+1 740-236-9039</span></p>
	</div>

	<Button href="/" size="lg" class="text-2xl py-10 px-16 font-black">
		CONTINUE SHOPPING
	</Button>
</div>

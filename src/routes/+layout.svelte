<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import { cart } from '$lib/cart.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Fix It Tech | Trendy E-Commerce</title>
</svelte:head>

<div class="min-h-screen flex flex-col font-sans text-lg">
	<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="container flex h-20 items-center justify-between mx-auto px-4">
			<a href="/" class="flex items-center space-x-2">
				<span class="inline-block font-black text-3xl tracking-tighter">FIX IT TECH</span>
			</a>
			<nav class="flex items-center space-x-8 text-xl font-medium">
				<a href="/" class="transition-colors hover:text-foreground/80">Shop</a>
				<a href="/contact" class="transition-colors hover:text-foreground/80">Contact</a>
				<a href="/cart" class="relative ml-4">
					<span class="bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center absolute -top-2 -right-2">
						{$cart.reduce((acc, item) => acc + item.quantity, 0)}
					</span>
					<span class="text-xl">🛒</span>
				</a>
				<div class="ml-4 flex items-center gap-4">
					<span class="text-sm font-semibold">+1 740-236-9039</span>
				</div>
			</nav>
		</div>
	</header>

	<main class="flex-1 container mx-auto px-4 py-8">
		{@render children()}
	</main>

	<footer class="border-t py-12 md:px-8 md:py-0">
		<div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4">
			<p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
				&copy; 2026 Fix It Tech. All rights reserved. Support: (740) 236-9039
			</p>
		</div>
	</footer>
</div>

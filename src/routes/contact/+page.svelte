<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Card from '$lib/components/ui/card';

	let { form } = $props();
</script>

<div class="max-w-2xl mx-auto space-y-8">
	<div class="space-y-4">
		<h1 class="text-4xl font-extrabold tracking-tighter">Contact Us</h1>
		<p class="text-xl text-muted-foreground">
			Have a question? We're here to help. You can use the form below or call us directly.
		</p>
		<div class="p-6 bg-muted rounded-xl border-2">
			<p class="text-2xl font-bold">Direct Support: <span class="text-primary">+1 740-236-9039</span></p>
		</div>
	</div>

	{#if form?.success}
		<div class="p-8 bg-primary/10 border-2 border-primary rounded-xl text-center space-y-4">
			<h2 class="text-3xl font-bold">Message Sent!</h2>
			<p class="text-xl">Thank you for reaching out. We'll get back to you shortly.</p>
			<Button href="/" variant="outline" size="lg" class="text-xl">Back to Shop</Button>
		</div>
	{:else}
		<Card.Root class="border-2">
			<Card.Header>
				<Card.Title class="text-2xl">Send a Message</Card.Title>
				<Card.Description class="text-lg">Fill out the form below and our team will respond within 24 hours.</Card.Description>
			</Card.Header>
			<Card.Content>
				<form method="POST" class="space-y-6">
					<div class="space-y-2">
						<Label for="name" class="text-xl font-semibold">Your Name</Label>
						<Input id="name" name="name" placeholder="John Doe" required class="h-14 text-lg border-2" />
					</div>
					<div class="space-y-2">
						<Label for="email" class="text-xl font-semibold">Email Address</Label>
						<Input id="email" name="email" type="email" placeholder="john@example.com" required class="h-14 text-lg border-2" />
					</div>
					<div class="space-y-2">
						<Label for="phone" class="text-xl font-semibold">Phone Number (Optional)</Label>
						<Input id="phone" name="phone" placeholder="(740) 236-9039" class="h-14 text-lg border-2" />
					</div>
					<div class="space-y-2">
						<Label for="message" class="text-xl font-semibold">Message</Label>
						<textarea 
							id="message" 
							name="message" 
							required 
							rows="5"
							class="w-full rounded-md border-2 bg-background px-3 py-2 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
							placeholder="How can we help you?"
						></textarea>
					</div>
					<Button type="submit" class="w-full py-8 text-2xl font-bold">
						Send Message
					</Button>
				</form>
			</Card.Content>
		</Card.Root>
	{/if}
</div>

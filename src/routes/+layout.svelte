<script lang="ts">
	import './styles.css';
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';
	// import { getProfile } from '$lib/services/auth';
	import Header from './Header.svelte';
	import { goto } from '$app/navigation';

	export let data: { session: AuthSession | null };

	// onMount(() => {
	// 	getProfile(data.session?.user.id);
	// });

	onMount(() => {
		if (data.session) {
			goto('/');
		} else {
			goto('/auth');
		}
	});
</script>

<div class="app">
	<Header session={data.session}/>

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

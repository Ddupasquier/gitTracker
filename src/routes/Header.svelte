<script lang="ts">
	import type { AuthSession } from '@supabase/supabase-js';
	import { page } from '$app/stores';
	import { signout } from '$lib/services/auth';
	import logo from '$lib/images/svelte-logo.svg';

	export let session: AuthSession | null;
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			GitTracker
		</a>
	</div>

	<nav>
		<ul>
			{#if !session}
				<li aria-current={$page.url.pathname === '/auth' ? 'page' : undefined}>
					<a href="/auth">Please authenticate your GitTracker account</a>
				</li>
			{:else}
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Stuff</a>
				</li>
			{/if}
		</ul>
	</nav>

	<div class="corner">
		{#if session}
		<button class="logout" on:click={signout}> Logout </button>
	{/if}
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		width: 100vw;
	}

	.corner {
		width: 7em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>

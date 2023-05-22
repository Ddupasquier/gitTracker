<script lang="ts">
	import { onMount } from 'svelte';
	import type { AuthSession } from '@supabase/supabase-js';

	import Login from '$lib/components/auth/Login.svelte';
	import Signup from '$lib/components/auth/Signup.svelte';
	import { goto } from '$app/navigation';

	export let data: { session: AuthSession | null };

	let loggingIn = true;
	const toggle = () => {
		loggingIn = !loggingIn;
	};

	onMount(() => {
		if (data.session) {
			goto('/');
		}
	});
</script>

<div class="auth-container">
	<form>
		{#if loggingIn}
			<Login {toggle} />
		{:else}
			<Signup {toggle} />
		{/if}
	</form>
</div>

<style lang="scss">
	.auth-container {
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: center;
		flex-direction: column;
		height: fit-content;
		width: fit-content;
	}
</style>

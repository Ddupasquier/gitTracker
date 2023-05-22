<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { fly } from 'svelte/transition';

	export let toggle: () => void;

	let email = '';
	let password = '';

	async function handleSignUp() {
		const { data, error } = await supabase.auth.signUp({
			email: email,
			password: password
		});

		if (error) console.log(error);
		else console.log(data);
	}
</script>

<div
	class="signup"
	in:fly={{ x: 200, duration: 200, delay: 350 }}
	out:fly={{ x: -200, duration: 200 }}
>
	<p>Welcome to the signup page!</p>
	<label for="email">Email</label>
	<input id="email" type="email" bind:value={email} />

	<label for="password">Password</label>
	<input id="password" type="password" bind:value={password} />

	<button on:click={handleSignUp}>Sign Up</button>

	<button class="auth-button" on:click={toggle}>Already have an account?</button>
</div>

<style lang="scss">
	.signup {
		display: flex;
		flex-direction: column;
		width: 300px;
		margin: auto;
		padding: 2rem;
		border-radius: 8px;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
		background: #fff;

		label {
			margin-bottom: 0.2em;
			color: #666;
			font-weight: bold;
		}

		input {
			margin-bottom: 1rem;
			padding: 0.8rem 1rem;
			border: 1px solid #ddd;
			border-radius: 4px;
			font-size: 0.9rem;
			color: #333;
			width: 100%;
			box-sizing: border-box;
			&:focus {
				border-color: #677bc4; // Light blue
				outline: none;
			}
		}

		button {
			padding: 0.8rem 1rem;
			border: none;
			border-radius: 4px;
			background: #677bc4; // Light blue
			color: #fff;
			font-size: 1rem;
			cursor: pointer;
			width: 100%;
			box-sizing: border-box;
			transition: background 0.3s;

			&:hover {
				background: #5683b3; // Darken color on hover
			}
		}
	}

	.auth-button {
		margin-top: 1rem;
		background: none;
		border: none;
		color: #677bc4; // Light blue
		font-size: 1rem;
		cursor: pointer;
	}

	p {
		font-weight: bold;
		text-align: center;
		margin-top: 0;
	}
</style>

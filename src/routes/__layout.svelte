<script>
	import "../app.css";
	import Nav from "../components/nav.svelte";
	import {isOverlayOpen} from '../stores/overlaystore';
	import Overlay from '../components/overlay.svelte';
	import Modal from '../components/modal.svelte';
	import { subreddit } from "../stores/sveltestore.js";
	let modal = [...$subreddit];
</script>

<Nav />

<div class="p-8 max-w-6xl mx-auto">

	{#if $isOverlayOpen}
		<Overlay>
			<Modal 
				redditmodal={modal}
			/>
		</Overlay>
	{/if}
	
	<slot />

</div>

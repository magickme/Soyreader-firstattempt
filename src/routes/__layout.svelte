<script>
	import "../app.css";
	import Nav from "../components/nav.svelte";
	import {isOverlayOpen} from '../stores/overlaystore';
	import Overlay from '../components/overlay.svelte';
</script>

<Nav />

<div class="p-8 max-w-6xl mx-auto">

	{#if $isOverlayOpen}
		<Overlay>
			<p class="text-white text-xl text-left">They played us...</p>
			<p class="text-white text-4xl text-right">...like a damn fiddle!</p>
		</Overlay>
	{/if}
	
	<slot />

</div>

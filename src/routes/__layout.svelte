<script>
	import "../app.css";
	import Nav from "../components/nav.svelte";
</script>

<Nav />

<div class="bg-color">
	<div class="p-8 max-w-6xl mx-auto">
		<slot />
	</div>
</div>

<style>
    .bg-color {
        background-color: rgb(236, 246, 255);
   }
</style>
<script>
    import { subreddit } from "../stores/sveltestore";
    console.log($subreddit);
</script>

<svelte:head>
    <title>Soyreader</title>
</svelte:head>

<h1>Soyreader</h1>

<h2>Newest posts from /r/sveltejs</h2>

<hr>

{#each $subreddit as redditpost}
    <p>{redditpost.title}</p>
{/each}

<style>
    h1 {
        color: purple;
        size: 1.5em;
    }
    hr {
        max-width: 80%;
        color: gainsboro;
    }
</style>
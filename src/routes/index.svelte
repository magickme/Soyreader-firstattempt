<script>
    import { subreddit } from '../stores/sveltestore';
    console.log($subreddit);
    import RedditPost from '../components/redditPost.svelte';
</script>

<svelte:head>
    <title>Soyreader</title>
</svelte:head>

<h1 class="text-4xl text-center antialiased text-indigo-700 my-8 uppercase">Soyreader</h1>

<h2 class="text-2xl text-center text-indigo-600 my-8">Newest posts from /r/sveltejs</h2>

{#each $subreddit as redditpost}
    <RedditPost
        redditpost={redditpost} 
    />
{/each}

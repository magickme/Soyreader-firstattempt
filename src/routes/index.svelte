<script>
    import { subreddit } from '../stores/sveltestore';
    console.log($subreddit);
    import RedditPost from '../components/redditPost.svelte';

    let searchTerm = "";
    let filteredPosts = [];

    $: {
        console.log(searchTerm);
        if(searchTerm) {
            filteredPosts = $subreddit.filter(subreddit => subreddit.title.toLowerCase().includes(searchTerm.toLowerCase));
        } else {
            filteredPosts = [...$subreddit]
        }
    }

</script>

<svelte:head>
    <title>Soyreader</title>
</svelte:head>

<br />
<input class="w-full rounded-md text-lg p-4 border-2 border-gray-200" type="text" bind:value={searchTerm} placeholder="Search posts"><br />
<br />

<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPosts as redditpost}
        <RedditPost
            redditpost={redditpost} 
        />
    {/each}
</div>
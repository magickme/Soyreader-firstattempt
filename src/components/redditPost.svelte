<script>
    export let redditpost;
    import { blur } from 'svelte/transition';
    import {isOverlayOpen} from '../stores/overlaystore.js';
</script>

<a href={redditpost.url} target="_blank">
<div class="py-4 p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-lg hover:shadow-xl flex flex-col items-center" transition:blur on:click={() => {isOverlayOpen.set(true)}}>

    <img class="h-40" src={redditpost.thumbnail} alt={redditpost.title}>

    <h3 class="font-normal font-mono">{redditpost.id}. <a href={redditpost.url} target='_blank'>{redditpost.title}</a> | Posted by <a href='https://www.reddit.com/user/{redditpost.author}/' target='_blank'>u/{redditpost.author}</h3><br />
    
    <p>{redditpost.selftext}</p><br />
</div>
</a>


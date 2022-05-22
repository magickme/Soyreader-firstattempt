<script>
    export let redditpost;
    import { blur } from 'svelte/transition';
    import { quintOut } from 'svelte/easing'; 
</script>

<a class="py-4 p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={redditpost.url} target='_blank' transition:blur>

    <img class="h-40" src={redditpost.thumbnail} alt={redditpost.title}>
    
    <h3 class="font-normal">{redditpost.id}. <a href={redditpost.url} target='_blank'>{redditpost.title}</a> | Posted by <a href='https://www.reddit.com/user/{redditpost.author}/' target='_blank'>u/{redditpost.author}</h3><br />
    
    <p>{redditpost.selftext}</p><br />
</a>
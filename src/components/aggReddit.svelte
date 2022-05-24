<script>
    export let redditpost;
    import { blur } from 'svelte/transition';
</script>

<a class="py-4 p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-lg hover:shadow-xl flex flex-col items-center" href={redditpost.url} target='_blank' transition:blur>

    <h3 class="font-normal font-mono"><a href={redditpost.url} target='_blank'>{redditpost.title}</a>

    <h3 class="font-normal font-mono"><a href={redditpost.url} target='_blank'>{redditpost.title}</a>

    <h3 class="font-normal font-mono"><a href={redditpost.url} target='_blank'>{redditpost.title}</a>

    <h3 class="font-normal font-mono"><a href={redditpost.url} target='_blank'>{redditpost.title}</a>

    <h3 class="font-normal font-mono"><a href={redditpost.url} target='_blank'>{redditpost.title}</a>

</a>
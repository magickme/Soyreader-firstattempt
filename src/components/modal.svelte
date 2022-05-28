<script>
    export let redditmodal;
</script>

<div class="py-8 p-12 bg-gray-100 text-gray-800 text-center rounded-md shadow-lg hover:shadow-xl flex flex-col items-center">

    <img class="h-40" src={redditmodal.thumbnail} alt={redditmodal.title}>

    <h3 class="font-normal font-mono">{redditmodal.id}. <a href={redditmodal.url} target='_blank'>{redditmodal.title}</a> | Posted by <a href='https://www.reddit.com/user/{redditmodal.author}/' target='_blank'>u/{redditmodal.author}</h3><br />
    
    <p>{redditmodal.selftext}</p><br />
</div>


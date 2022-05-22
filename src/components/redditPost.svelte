<script>
    export let redditpost;
</script>

<a href={redditpost.url}>
    <h3><a href={redditpost.url} target='_blank'>{redditpost.title}</a> | <a href='https://www.reddit.com/user/{redditpost.author}/' target='_blank'>u/{redditpost.author}</h3><br />
    <p>{redditpost.selftext}</p><br />
</a>
<script>
    import Subreddit from './components/subreddit.svelte';
</script>

<main>
    <div class="p-10 flex flex-wrap">
        <Subreddit sub="Transhuman" />
        <Subreddit sub="Psychonaut" />
        <Subreddit sub="Apple" />
        <Subreddit sub="Occult" />
        <Subreddit />
        <Subreddit />
        <Subreddit />
        <Subreddit />
        <Subreddit />
        <Subreddit />
        <Subreddit />
        <Subreddit />
    </div>
</main>

<style>
    main {
        background-image: url(/images/soy.jpg);
        /* background-color: lightgray; */
        padding: 3px;
    }
</style>
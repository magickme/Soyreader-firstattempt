import { writable } from 'svelte/store';

export const subreddit = writable([]);

export const fetchSubreddit = async () => {
    const url = `https://www.reddit.com/r/sveltejs/top.json?limit=20`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedSubreddit = data.data.children.map((data, index) => ({
        title: data.data.title,
        thumbnail: data.data.thumbnail,
        selftext: data.data.selftext
    }));
    subreddit.set(loadedSubreddit);
};
fetchSubreddit();
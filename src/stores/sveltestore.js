import { writable } from 'svelte/store';

export const subreddit = writable([]);

export const fetchSubreddit = async (num) => {
    const url = `https://www.reddit.com/r/sveltejs/new.json?limit=${num}`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedSubreddit = data.data.children.map((data, index) => ({
        title: data.data.title,
        thumbnail: data.data.thumbnail,
        selftext: data.data.selftext
    }));
    subreddit.set(loadedSubreddit);
};
fetchSubreddit(50);
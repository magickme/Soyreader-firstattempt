import { writable } from 'svelte/store';

export const subreddit = writable([]);

export const fetchSubreddit = async (num) => {
    const url = `https://www.reddit.com/r/sveltejs/new.json?limit=${num}`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedSubreddit = data.data.children.map((data, index) => ({
        title: data.data.title,
        author: data.data.author,
        selftext: data.data.selftext,
        subreddit_name_prefixed: data.data.subreddit_name_prefixed,
        url: data.data.url
    }));
    subreddit.set(loadedSubreddit);
};
fetchSubreddit(50);
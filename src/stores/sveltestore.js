import { writable } from 'svelte/store';

export const subreddit = writable([]);

export const fetchSubreddit = async (sub) => {
    const url = `https://www.reddit.com/r/${sub}/top.json`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedSubreddit = data.data.children.map((data, index) => ({
        id: index + 1,
        title: data.data.title,
        author: data.data.author,
        thumbnail: data.data.thumbnail,
        selftext: data.data.selftext,
        subreddit_name_prefixed: data.data.subreddit_name_prefixed,
        url: data.data.url
    }));
    subreddit.set(loadedSubreddit);
};
fetchSubreddit("worldnews");

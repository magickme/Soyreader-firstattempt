import { dataset_dev } from "svelte/internal";

const fetchSubreddit = async () => {
    const url = fetch `https://www.reddit.com/r/sveltejs/top.json?limit=10`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedSubreddit = data.title.map((data, index)) => {
        title: data,title,
        thumbnail: data.thumbnail,
        selftext: data.selftext
    }
}
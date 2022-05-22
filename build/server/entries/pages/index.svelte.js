import { n as noop, a as safe_not_equal, c as create_ssr_component, b as add_attribute, e as escape, d as subscribe, f as each, v as validate_component } from "../../chunks/index-525aa5c6.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const subreddit = writable([]);
const fetchSubreddit = async (num) => {
  const url = `https://www.reddit.com/r/dataisbeautiful/top.json?limit=${num}`;
  const res = await fetch(url);
  const data = await res.json();
  const loadedSubreddit = data.data.children.map((data2, index) => ({
    id: index + 1,
    title: data2.data.title,
    author: data2.data.author,
    thumbnail: data2.data.thumbnail,
    selftext: data2.data.selftext,
    subreddit_name_prefixed: data2.data.subreddit_name_prefixed,
    url: data2.data.url
  }));
  subreddit.set(loadedSubreddit);
};
fetchSubreddit(100);
const RedditPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { redditpost } = $$props;
  if ($$props.redditpost === void 0 && $$bindings.redditpost && redditpost !== void 0)
    $$bindings.redditpost(redditpost);
  return `<a class="${"py-4 p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"}"${add_attribute("href", redditpost.url, 0)} target="${"_blank"}"><img class="${"h-40"}"${add_attribute("src", redditpost.thumbnail, 0)}${add_attribute("alt", redditpost.title, 0)}>
    
    <h3 class="${"font-normal"}">${escape(redditpost.id)}. <a${add_attribute("href", redditpost.url, 0)} target="${"_blank"}">${escape(redditpost.title)}</a> | Posted by <a href="${"https://www.reddit.com/user/" + escape(redditpost.author) + "/"}" target="${"_blank"}">u/${escape(redditpost.author)}</a></h3><br>
    
    <p>${escape(redditpost.selftext)}</p><br></a>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $subreddit, $$unsubscribe_subreddit;
  $$unsubscribe_subreddit = subscribe(subreddit, (value) => $subreddit = value);
  console.log($subreddit);
  $$unsubscribe_subreddit();
  return `${$$result.head += `${$$result.title = `<title>Soyreader</title>`, ""}`, ""}

<h1 class="${"text-4xl text-center antialiased text-indigo-700 my-8 uppercase"}">Soyreader</h1>

<h2 class="${"text-2xl text-center text-indigo-600 my-8"}">Top Posts</h2>

<div class="${"grid gap-4 md:grid-cols-2 grid-cols-1"}">${each($subreddit, (redditpost) => {
    return `${validate_component(RedditPost, "RedditPost").$$render($$result, { redditpost }, {}, {})}`;
  })}</div>`;
});
export { Routes as default };

# Soyreader

Working towards building an RSS-style Reddit aggregator to de-soy the Reddit interface and present all information in one panel for quick assessment of followed subreddits. This is a reimagining of a now-defunct web app called Aggreddit that has been offline since around 2018.

## Wireframe

[Initial rough sketch](https://www.figma.com/file/k5G7XdiH8Gg2oUDPYTKVjP/Soyreader?node-id=0%3A1)

## Features

+ Pulls in one subreddit at a time and organizes in a grid layout on the main page. This is just a start. It should be boxes with subreddit headlines only, one box per sub.

## Technologies used

+ Svelte / SvelteKit
+ TailwindCSS
+ Reddit API

## Tasks remaining / Future work

+ Search functionality
+ Detail view (modal or new page/route) when selecting an item
+ Cohesive and polished UI/UX
+ Animations and transitions
+ Ability to exit error state
+ 90+ Lighthouse score
+ Unit and end-to-end tests (Jest, Enzyme, Selenium)
+ Test across devices and browsers
+ Publishing to Cloud Run (lower Node version) with custom domain and CI/CD
+ Convert to Progressive Web App

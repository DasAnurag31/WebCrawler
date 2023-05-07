# Web Crawler

## Objective :

Build a web crawler in Node.js that reports on the internal linking profile of any website.
To rank well in Google Search, websites need to internally link pages one to another. For example, my blog post about the benefits of cheap haircuts should probably have a link to my other blog post about the best places to get haircuts.
We're going to write a JavaScript application that generates an "internal links" report for any website on the internet by crawling each page of the site.

## Scripts

- To Run : `npm start <website url here>`
- To test : `npm test`

## Tasks

- Normalise the urls and links
- Extract the links from html of a page
- Check for relative links in the page
- Check for invalid urls
- Accept a valid url from the CLI
- Check for other links in that webpage
- If a new link is discovered, add it to list else count and keep track of the no of times the link was visited
- Sort the links in descending order on the basis of the no of times they were visited
- Prepare a final report and print it to the console.

## Dependencies Used

- Jest (dev)
  - used for running tests in JS
- JSdom
  - used to get dom object from a html string

## Useful Documentations

- Jest : [https://jestjs.io/docs/getting-started]
- JSdom : [https://www.npmjs.com/package/jsdom]

## Important TakeAways

### Node

- The first argument to any program is the name of the program // node
- The second argument to any program is the name of the entry point // main.js
- The third argument to any program is the the actual input

### Js

- Object.entries(<object>)
- URL object

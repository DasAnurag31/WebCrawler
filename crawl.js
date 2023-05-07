const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const crawlPage = async (origin, currentURL, pages) => {
    const originURLobj = new URL(origin);
    const currentURLobj = new URL(currentURL);
    const normalizedCurrentURL = normaliseURL(currentURL);

    if (originURLobj.hostname != currentURLobj.hostname) {
        return pages;
    }
    if (pages[normalizedCurrentURL] > 0) {
        pages[normalizedCurrentURL]++;
        return pages;
    }
    pages[normalizedCurrentURL] = 1;
    console.log("Actively crawling " + currentURL);
    try {
        const response = await fetch(currentURL);
        if (response.status > 399) {
            console.log(`Error with fetching data status code: ${response.status} in page ${currentURL}`);
            return pages;
        }
        const contentType = response.headers.get('content-type');
        if (!contentType.includes('text/html')) {
            console.log(`Error with content type type: ${contentType} in page ${currentURL}`);
            return pages;
        }
        const htmlContent = await response.text();
        const URLlist = getURLsFromHTML(htmlContent, origin);

        for (const url of URLlist) {
            pages = await crawlPage(origin, url, pages);
        }
        return pages;
    }
    catch (err) {
        console.log("Error with fetching " + err);
    }
}

const extractHostAndPath = (url) => {
    const urlObj = new URL(url);
    return urlObj.hostname + urlObj.pathname;
}
const removeTrailingSlash = (url) => {
    if (url.slice(-1) == "/") {
        return url.slice(0, -1);
    }
    return url;
}
const normaliseURL = (url) => {
    let finalURL = extractHostAndPath(url);
    finalURL = removeTrailingSlash(finalURL);
    return finalURL;
}
const getURLsFromHTML = (htmlString, baseURL) => {
    const urls = [];
    const dom = new JSDOM(htmlString);
    const links = dom.window.document.querySelectorAll('a')
    for (const link of links) {
        let href = link.href;
        // if the link is a relative path to the base url of the page
        if (href.slice(0, 1) == "/") {
            href = baseURL + href;
        }
        try {
            const urlOB = new URL(href);
            urls.push(urlOB.href);
        }
        catch (err) {
            console.log("There happens to be an" + err.message);
        }
    }
    return urls;
}
module.exports = {
    normaliseURL,
    getURLsFromHTML,
    crawlPage
}
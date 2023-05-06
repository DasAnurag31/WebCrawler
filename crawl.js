const jsdom = require("jsdom");
const { JSDOM } = jsdom;

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
    return urls[0];
}

module.exports = {
    normaliseURL,
    getURLsFromHTML,
}
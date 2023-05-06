const extractHostAndPath = (url) => {
    const urlObj = new URL(url);
    return urlObj.hostname + urlObj.pathname;
}
const removeTrailingSlash = (url) =>{
    if(url.slice(-1)=="/"){
        return url.slice(0, -1);
    }
    return url;
}
const normaliseURL = (url) => {
    let finalURL = extractHostAndPath(url);
    finalURL = removeTrailingSlash(finalURL);
    return finalURL;
}

module.exports = {
    normaliseURL
}
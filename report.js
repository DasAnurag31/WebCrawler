const sortPages = (pages) => {
    const pagesArray = Object.entries(pages);
    pagesArray.sort((a, b) => {
        return b[1] - a[1];
    })
    printReport(pagesArray);
    return pagesArray;
}

const printReport = (pagesArray) => {
    console.log("Printing Crawl Report")
    for (const page of pagesArray) {
        console.log(`Found ${page[1]} ${page[1] > 1 ? 'Links' : 'Link'} to ${page[0]}`)
    }
}

module.exports = { sortPages };
const { crawlPage } = require('./crawl.js')
const { sortPages } = require('./report.js')

const main = async () => {
    if (process.argv.length > 3) {
        console.log("Too Many Arguments.. Pass One Link at a time");
        process.exit;
    }
    if (process.argv.length < 3) {
        console.log("No Website Provided");
        process.exit;
    }
    if (process.argv.length == 3) {
        const baseURL = process.argv[2];
        console.log("Starting to Crawl");
        const pages = await crawlPage(baseURL, baseURL, {});
        // printPages(pages);
        sortPages(pages);
    }
}

const printPages = (pages) => {
    console.log("Printing Page Info...");
    for (const page of Object.entries(pages)) {
        console.log(page);
    }

}
main();
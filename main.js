const {crawlPage} = require('./crawl.js')

const main = () => {
    if(process.argv.length > 3){
        console.log("Too Many Arguments.. Pass One Link at a time");
        process.exit;
    }
    if(process.argv.length < 3){
        console.log("No Website Provided");
        process.exit;
    }
    if (process.argv.length == 3) {
        const baseURL = process.argv[2];
        console.log("Starting to Crawl");
        crawlPage(baseURL);
    }

}

main();
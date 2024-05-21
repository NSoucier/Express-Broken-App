const process = require('process');
const fs = require('fs');
const axios = require('axios');

// return array of urls to visit
function readFile() {
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${process.argv[2]}: \n ${err}`);
            process.exit(1);
        }
        readURLs(data.split('\n'))
    });
}

async function readURLs(data) {

    let contents = await Promise.allSettled([
        axios.get(data[0]),
        axios.get(data[1]),
        axios.get(data[2]),
        axios.get(data[3]),
    ]);

    // loop through promises
    for (let idx in data) {
        let url = contents[idx].value;
        if (url === undefined) { // if promise was rejected
            console.log(`Couldn't download ${data[idx]}`)
        } else if (url.request.host.slice(0,4) === 'www.'){
            fs.writeFile(`${url.request.host.slice(4)}.txt`, url.data, 'utf8', (err) => {
                if (err) {
                    console.log(`Error writing ${url.request.host}: \n ${err}`);
                    process.exit(1);
                }
                console.log(`Wrote to ${url.request.host.slice(4)}`)
            });
        } else {
            fs.writeFile(`${url.request.host}.txt`, url.data, 'utf8', (err) => {
                if (err) {
                    console.log(`Error writing ${url.request.host}: \n ${err}`);
                    process.exit(1);
                }
                console.log(`Wrote to ${url.request.host}`)
            });
        }
    }
}

readFile();
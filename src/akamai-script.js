const got = require('got');
const chalk = require('chalk');

let config = require('../config.json');

async function request(target) {
    const { body } = await got(target, {
        https: {
        rejectUnauthorized: false,
        },
        headers: {
        Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        Pragma: 'no-cache',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36',
        },
    });

    return body;
}

async function fetchAkamaiScript(url) {
    try {
        const body = await request(url);

        const scriptUrl = /\['_setAu', '(\/\w+\/\w+)'\]/i.exec(body);
        
        if (!scriptUrl) return;
        
        return { endpoint: `${url}${scriptUrl[1]}`, script: (await request(`${url}${scriptUrl[1]}`)) };
    }
    catch (err) {
        console.log(chalk.red.underline("Failed to fetch Akamai script on " + url));
    }
}

function getVersionFromFile(file) {
    return file.split('ver:')[1].split(',ke_cnt_lmt')[0];
}

async function getAkamaiVersion(url, log=undefined) {
    const result = await fetchAkamaiScript(url);

    if (!result || !result.script) return -1;

    const ver = getVersionFromFile(result.script);

    if (log) console.log(result.endpoint, printColoredVersion(ver));

    return ver;
}

function printColoredVersion(ver) {
    if (parseFloat(ver) > parseFloat(config.akamai_version)) return chalk.yellowBright.bold(ver + " (new)");
    else if (parseFloat(ver) < parseFloat(config.akamai_version)) return chalk.magentaBright.bold(ver + " (old)");
    else return chalk.greenBright.bold(ver + " (current)");
}

module.exports = { fetchAkamaiScript, getVersionFromFile, getAkamaiVersion, printColoredVersion };
const got = require('got');
const chalk = require('chalk');
const pad = require('pad');

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

        scriptUrl = /\['_setAu', '(\/\w+\/\w+)'\]/i.exec(body);
        
        if (!scriptUrl) scriptUrl = /<script type="text\/javascript"  src="([^"]+?)"><\/script><\/body>/g.exec(body);

        if (!scriptUrl) return;
        
        if (scriptUrl[1].includes("http")) endpoint = scriptUrl[1]
        else endpoint = url + scriptUrl[1]

        return { endpoint: endpoint, script: (await request(endpoint)) };
    }
    catch (err) {
        console.log(chalk.red.underline("Failed to fetch Akamai script on " + url));
    }
}

function getVersionFromFile(file) {
    try {
        return file.split('ver:')[1].split(',ke_cnt_lmt')[0];
    }
    catch (err) {
        return chalk.underline("ERROR");
    }
}

async function getAkamaiVersion(url, log=undefined) {
    const result = await fetchAkamaiScript(url);

    if (!result || !result.script) return -1;

    const ver = getVersionFromFile(result.script);

    if (log) console.log(printColoredVersion(ver), result.endpoint);

    return ver;
}

function printColoredVersion(ver) {
    if (parseFloat(ver) > parseFloat(config.akamai_version)) return chalk.yellowBright.bold(pad(ver, 4) + pad("   (new)", 10));
    else if (parseFloat(ver) < parseFloat(config.akamai_version)) return chalk.magentaBright.bold(pad(ver, 4) + pad("   (old)", 10));
    else if (parseFloat(ver) == parseFloat(config.akamai_version)) return chalk.greenBright.bold(pad(ver, 4) + pad(" (current)", 10));
    else return chalk.red.bold(pad(ver, 4) + pad(" :(", 10));
}

module.exports = { fetchAkamaiScript, getVersionFromFile, getAkamaiVersion, printColoredVersion };
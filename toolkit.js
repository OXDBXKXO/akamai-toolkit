#!/usr/bin/node

const { program } = require('commander');
const { saveDeofbfuscatedFile, checkVersion, checkVersions, ternary2if, sensorParsing, runPuppetter } = require('./src/main');

async function main() {
    
    program
    .name("./toolkit.js")
    .usage("<option>")
    .option('-d, --deobfuscate <url>', "Fetches a fresh and readable copy of the Akamai script")
    .option('-v, --version-check [url]', "Checks current Akamai version on a large set of Akamai-protected websites")
    .option('-c, --custom-script <config_file>', "Prompts a Puppeteer-controlled Chromium instance for script behavior analysis")
    .option('-t, --ternary', "Turns a ternary expression to a regular if-statement")
    .option('-p, --parse', "Parses and check sensor_data")
    .option('-h, --help', "Displays list of available parameters")

    program.parse();

    const options = program.opts();
    
    if (options.deobfuscate) await saveDeofbfuscatedFile(options.deobfuscate);

    else if (options.versionCheck) {
        if (options.versionCheck === true) { await checkVersions(); process.exit(0); }
        else { await checkVersion(options.versionCheck); process.exit(0); }
    }

    else if (options.ternary) await ternary2if();

    else if (options.customScript) await runPuppetter(options.customScript);

    else if (options.parse) sensorParsing();

    else if (options.help) program.help();

    else program.help();
}

main();
#!/usr/bin/node
// Use :
// deobfuscator --version checker
// --> use version checker code to fetch the script
// ternary
// custom script loader
// abck parser (abck.dev API)


const { program, args } = require('commander');

const { saveDeofbfuscatedFile, checkVersions, ternary2if } = require('./src/main')
const { parse_sensor } = require('./src/parse-sensor');


async function args_parse() {
    
    program
    .option('-d, --deobfuscate <url>', "Fetches a fresh and readable copy of the Akamai script")
    .option('-v, --version-check', "Checks current Akamai version on a large set of Akamai-protected websites")
    .option('-t, -ternary', "Turns a ternary expression to a regular if-statement")
    .option('-c, --custom-script <config_file>', "Prompts a Puppeteer-controlled Chromium instance for script behavior analysis")
    .option('-p, --parse <sensor>', "Parses provided sensor_data")

    program.parse();

    const options = program.opts();
    
    if (options.deobfuscate) await saveDeofbfuscatedFile(options.deobfuscate);
    if (options.versionCheck) await checkVersions();
    if (options.Ternary) await ternary2if();
    if (options.parse) parse_sensor(options.parse);

}

args_parse();



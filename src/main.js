// Node imports
const fs = require('fs');
const chalk = require('chalk');
const beautify = require('js-beautify')

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Local files imports
const { deobfuscate } = require('./deobfuscate.js');
const { fetchAkamaiScript, getVersionFromFile, getAkamaiVersion } = require('./akamai-script.js');
const { toIf } = require('./ternary2if');

const config = require('../config.json');

async function saveDeofbfuscatedFile(target) {

    if (!/https?:\/\/www\.[\w]+?\.[a-z\/]*$/.test(target)) {
        console.log(target + " did not match URL regex !");
        return;
    }

    const script_obf = (await fetchAkamaiScript(target)).script;

    if (!script_obf) {
        console.log("An error occured while requesting " + target);
        return;
    }
    
    const ver = getVersionFromFile(script_obf);
    const script = deobfuscate(script_obf);

    console.log("Script version is : " + ver)

    const filename = "akamai-" + ver + "-" + target.split('.')[1] + ".js";

    if(!fs.existsSync(__dirname + '/../output')) {
        fs.mkdirSync(__dirname + '/../output');
    }

    fs.writeFile(__dirname + '/../output/' + filename, script, function (err) {
        if (err) throw err;
        console.log(filename + " successfully created in `output` folder");
    });
}

async function checkVersions() {
    config.sites.forEach(async (site) => {
        await getAkamaiVersion(site, log=true);
    });
}

async function ternary2if() {
    rl.question('What ternary do you want to convert ? ', (ternary) => {
        if (ternary == "") { rl.close(); return; }

        let js_raw = toIf(ternary);

        console.log(chalk.whiteBright.bold("\n-------------------------"));
        console.log(chalk.whiteBright.bold(beautify(js_raw, { indent_size: 2, space_in_empty_paren: true })));
        console.log(chalk.whiteBright.bold("-------------------------\n"));

        rl.close();
    });
}

async function sensorParsing() {
    rl.question('Paste sensor_data here: ', (sensor) => {
        if (sensor == "") { rl.close(); return; }

        try {
            const missing_values = parse_sensor(sensor)
            
            if (missing_values.length) console.log(chalk.red.bold("\nMalformed sensor_data"));
            missing_values.forEach(missing_value => {
                console.log(chalk.red.underline("Missing value: " + missing_value));
            });
        }
        catch { console.log(chalk.red.underline("Malformed sensor_data")); }

        rl.close();
    });
}

module.exports = { saveDeofbfuscatedFile, checkVersions, ternary2if, sensorParsing }
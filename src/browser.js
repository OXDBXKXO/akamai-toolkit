const fs = require('fs');
const chalk = require('chalk');
const yaml = require('js-yaml');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

const config = require('../config.json')

function startPuppeteer(puppeteerParams) {

    const size_config = !puppeteerParams.windowSize ? '--start-maximized' : `--window-size=${puppeteerParams.windowSize.width},${puppeteerParams.windowSize.height}`;
    
    puppeteer.launch({ headless: puppeteerParams.headless, devtools: puppeteerParams.devtools, ignoreHTTPSErrors: true, args: [size_config], executablePath: config.chromePath }).then(async browser => {
        page = await browser.newPage();
        
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36")
        await page.setRequestInterception(!puppeteerParams.dis_intercept);
        
        !puppeteerParams.dis_intercept && page.on('request', async req => {

            if (puppeteerParams.script_name_includes && puppeteerParams.script_name_includes.length && req.url().includes(puppeteerParams.script_name_includes)){
                if (req.method() == "GET"){
                    if (puppeteerParams.hijack_script_path && puppeteerParams.hijack_script_path.length) {
                        try {
                            const script = fs.readFileSync(__dirname + '/../' + puppeteerParams.hijack_script_path, {encoding:'utf8'});
                            req.respond({
                                status: 200,
                                headers: {"hijack": "successful"},
                                contentType: 'application/javascript',
                                body: script
                            });
                        }
                        catch {
                            const error = "Could not find hijack script, please check path in Puppeteer config file";
                            console.log(error);
                        }
                    }
                    else req.continue();
                    
                    puppeteerParams.GET && puppeteerParams.GET.node && puppeteerParams.GET.node.length && eval("(async () => {" + puppeteerParams.GET.node + ";})()");
                    puppeteerParams.GET && puppeteerParams.GET.page && puppeteerParams.GET.page.length && await page.evaluate(puppeteerParams.GET.page);
                }
                
                else if (req.method() == "POST"){

                    puppeteerParams.POST && puppeteerParams.POST.node && puppeteerParams.POST.node.length && eval("(async () => {" + puppeteerParams.POST.node + ";})()");
                    puppeteerParams.POST && puppeteerParams.POST.page && puppeteerParams.POST.page.length && await page.evaluate(puppeteerParams.POST.page);
                    req.continue();
                }
                
                else {
                    
                    puppeteerParams.DEFAULT && puppeteerParams.DEFAULT.node && puppeteerParams.DEFAULT.node.length && eval("(async () => {" + puppeteerParams.DEFAULT.node + ";})()");
                    puppeteerParams.DEFAULT && puppeteerParams.DEFAULT.page && puppeteerParams.DEFAULT.page.length && await page.evaluate(puppeteerParams.DEFAULT.page);
                    req.continue();
                }

                return;
            }
            
            else {
                puppeteerParams.requests && puppeteerParams.requests.node && puppeteerParams.requests.node.length && eval("(async () => {" + puppeteerParams.requests.node + ";})()");
                puppeteerParams.requests && puppeteerParams.requests.page && puppeteerParams.requests.page.length && await page.evaluate(puppeteerParams.requests.page);
                req.continue();
            }
        });

        !puppeteerParams.dis_intercept && page.on('response', async req => {

            if (puppeteerParams.script_name_includes && puppeteerParams.script_name_includes.length && req.url().includes(puppeteerParams.script_name_includes)){
                
                puppeteerParams.response && puppeteerParams.response.node && puppeteerParams.response.node.length && eval("(async () => {" + puppeteerParams.response.node + ";})()");
                puppeteerParams.response && puppeteerParams.response.page && puppeteerParams.response.page.length && await page.evaluate(puppeteerParams.response.page);

                return;
            }
            
            else {
                puppeteerParams.requests && puppeteerParams.requests.node && puppeteerParams.requests.node.length && eval("(async () => {" + puppeteerParams.requests.node + ";})()");
                puppeteerParams.requests && puppeteerParams.requests.page && puppeteerParams.requests.page.length && await page.evaluate(puppeteerParams.requests.page);
            }
        });
        
        await page.goto(puppeteerParams.target, {waitUntil: 'load', timeout: 0});
        
        puppeteerParams.main && eval("(async () => {" + puppeteerParams.main.node + ";})()")
        puppeteerParams.main && await page.evaluate(puppeteerParams.main.page)
        
    }).catch((e) => { 
        console.log(chalk.red.underline("browser.js: startPuppeteerInstance\n" + e.message));
        process.exit(0);
     })
}

// If you need to use startPuppeteer from somewhere else
function puppeteerParamsProto() {
    return {
        "headless": false,
        "devtools": false,
        "windowSize": undefined,
        "dis_intercept": false,
        "target": "https://github.com/OXDBXKXO/akamai-toolkit",
        "hijack_script_path": "",
        "helpers": true,
        "script_name_includes": "/staticweb/",
        "main": {
            "page": "",
            "node": ""
        },
        "GET": {
            "page": "",
            "node": ""
        },
        "POST": {
            "page": "",
            "node": ""
        },
        "DEFAULT": {
            "page": "",
            "node": ""
        },
        "response": {
            "page": "",
            "node": ""
        },
        "requests": {
            "page": "",
            "node": ""
        }
    }
}

function getPuppetteerConfigFromFile(filename) {
    
    try {       
        const data = fs.readFileSync(filename, {encoding:'utf8', flag:'r'});
        let puppeteerParams = yaml.loadAll(data)[0];
        
        puppeteerParams.dis_intercept && (puppeteerParams.dis_intercept = true);
        // puppeteerParams.helpers && (puppeteerParams.POST.node = puppeteerParams.POST.node.replace(/cookie\(([^)]+)\)/, 'await page.cookies().then(jar => cookie($1, jar))'));
        
        if (puppeteerParams.helpers) {
            puppeteerParams.GET && puppeteerParams.GET.node && (puppeteerParams.GET.node = puppeteerParams.GET.node.replace(/cookie\(([^)]+)\)/, 'await page.cookies().then(jar => cookie($1, jar))'));
            puppeteerParams.POST && puppeteerParams.POST.node && (puppeteerParams.POST.node = puppeteerParams.POST.node.replace(/cookie\(([^)]+)\)/, 'await page.cookies().then(jar => cookie($1, jar))'));
            puppeteerParams.DEFAULT && puppeteerParams.DEFAULT.node && (puppeteerParams.DEFAULT.node = puppeteerParams.DEFAULT.node.replace(/cookie\(([^)]+)\)/, 'await page.cookies().then(jar => cookie($1, jar))'));
            puppeteerParams.response && puppeteerParams.response.node && (puppeteerParams.response.node = puppeteerParams.response.node.replace(/cookie\(([^)]+)\)/, 'await page.cookies().then(jar => cookie($1, jar))'));
        }

        return puppeteerParams;
    } catch (e) {
        console.log(chalk.red.underline("browser.js: getPuppeteerConfigFromFile\n" + e.message));
        process.exit(0);
    }
    
}

// Used when helpers is enabled to get cookie value from Node scope
async function cookie(cookie_name, jar){
    if (!jar) return;
    for (let i = 0; i < jar.length; i++) {
        const cookie = jar[i];
        if (cookie.name == cookie_name) return cookie.value
    }
}

module.exports = { startPuppeteer, getPuppetteerConfigFromFile, puppeteerParamsProto }
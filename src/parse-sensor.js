const chalk = require('chalk');
const { default: Abck } = require("abck");

const config = require('../config.json');

const keys = {
    '-1,2,-94,-100,': 'key_ver',
    '-1,2,-94,-101,': 'Browser_Info',
    '-1,2,-94,-105,': 'events',
    '-1,2,-94,-102,': 'informinfo',
    '-1,2,-94,-108,': 'forminfo',
    '-1,2,-94,-110,': 'kact',
    '-1,2,-94,-117,': 'mact',
    '-1,2,-94,-111,': 'tact',
    '-1,2,-94,-109,': 'doact',
    '-1,2,-94,-114,': 'dmact',
    '-1,2,-94,-103,': 'pact',
    '-1,2,-94,-112,': 'vcact',
    '-1,2,-94,-115,': 'URL',
    '-1,2,-94,-106,': 'Coherence_Check',
    '-1,2,-94,-119,': 'aj',
    '-1,2,-94,-122,': 'mr',
    '-1,2,-94,-123,': 'sed',
    '-1,2,-94,-124,': 'challenge_1',
    '-1,2,-94,-126,': 'challenge_2',
    '-1,2,-94,-127,': 'challenge_3',
    '-1,2,-94,-70,' : 'nav_perm',
    '-1,2,-94,-80,' : 'fpVal',
    '-1,2,-94,-116,': 'fpVal_Hash',
    '-1,2,-94,-118,': 'o9',
    '-1,2,-94,-129,': 'sensor_hash',
    '-1,2,-94,-121,': 'more_fingerprinting'
};

const values_gd = ["xagg", "psub", "lang", "prod", "plen", "pen", "wen", "den", "z1", "d3", "availWidth", "availHeight", "width", "height", "innerWidth", "innerHeight", "outerWidth", "ua_hash", "random", "start_ts / 2", "brv", "loc"];
const values_115 = ["bmak.ke_vel + 1", "bmak.me_vel + 32", "bmak.te_vel + 32", "bmak.doe_vel", "bmak.dme_vel", "bmak.pe_vel", "k (vels sum)", "bmak.updatet()","bmak.init_time", "bmak.start_ts", "bmak.fpcf.td", "bmak.d2", "bmak.ke_cnt", "bmak.me_cnt", "bmak.pi(bmak.d2 / 6)", "bmak.pe_cnt", "bmak.te_cnt", "bmak.get_cf_date() - bmak.start_ts", "bmak.ta", "bmak.n_ck", "bmak.get_cookie()", "bmak.ab(bmak.get_cookie())", "bmak.fpcf.rVal", "bmak.fpcf.rCFP", "bmak.fas()", "bmak.ff(80) + bmak.ff(105) + bmak.ff(90) + bmak.ff(116) + bmak.ff(69)", "bmak.jrs(bmak.start_ts)[0]", "bmak.jrs(bmak.start_ts)[1]"];
const values_fpVal = ["canvas(\"<@nv45. F1n63r,Pr1n71n6!\")", "canvas(\"m,Ev!xV67BaU> eh2m<f3AG3@\")", "bmak.runFonts ? bmak.altFonts ? t.fonts_optm() : t.fonts() : \"dis\"", "pluginInfo()", "sessionStorageKey()", "localStorageKey()", "indexedDbKey()", "timezoneOffsetKey()", "webrtcKey()", "screen.colorDepth ? screen.colorDepth : -1", "screen.pixelDepth ? screen.pixelDepth : -1", "navigator.cookieEnabled ? navigator.cookieEnabled : -1", "navigator.javaEnabled ? navigator.javaEnabled() : -1", "navigator.doNotTrack ? navigator.doNotTrack : -1"];
const values_129 = [ "fmh", "fmz", "ssh", "wv", "wr", "weh", "wl"];

const mact  = { 1:"mouseMove", 2:"mouseClick", 3:"mouseDown", 4:"mouseUp" };
const tact  = { 1:"touchMove", 2:"touchStart", 3:"touchEnd" }
const pact  = { 3:"pointerDown", 4:"pointerUp" };
const kact  = { 1:"keyDown", 2:"keyUp", 3:"keyPress" };
const vcact = { 1:"visibilityChange",2:"onBlur",3:"onFocus" };

function parse_sensor(sensor_data) {

    let parsed_sensor = {};
    let actions = {};
    let ta = 0, ke_vel = 0, me_vel = 0, pe_vel = 0, te_vel = 0, doe_vel = 0, dme_vel = 0;
    
    let previous_key_index = 0;
    for (let key in keys) {

        let sensor_variable = sensor_data.substring(previous_key_index, sensor_data.indexOf(key, previous_key_index));
        previous_key_index = sensor_data.indexOf(key, previous_key_index) + key.length;

        parsed_sensor[keys[key]] = sensor_variable;
        if (sensor_variable == "") continue;

        switch (keys[key]) {
            case "Browser_Info":
                const bd = (sensor_variable.match(/cpen(.*?)x12\:(\d+)/g,""))[0];
                const bd_values = ["cpen", "i1", "dm", "cwen", "non", "opc", "fc", "sc", "wrc", "isc", "vib", "bat", "x11", "x12"];
                
                const bd_val = bd.split(",");
                for (let i = 0; i < bd_values.length; i++) {
                    parsed_sensor[bd_values[i]] = bd_val[i];
                }

                const tmp = sensor_variable.replace(`,${bd},`,"").split(",uaend,");
                parsed_sensor["user_agent"] = tmp[0];

                const gd_val = tmp[1].split(",");
                for (let i = 0; i < values_gd.length; i++) {
                    parsed_sensor[values_gd[i]] = gd_val[i];
                }
            break;

            case "Coherence_Check": 
                const h_value = sensor_variable.split(",");
                for (let i = 0; i < values_115.length; i++) {
                    parsed_sensor[values_115[i]] = h_value[i];
                }
            break;

            case "fpVal":
                const fp_value = sensor_variable.split(";");
                for (let i = 0; i < values_fpVal.length; i++) {
                    parsed_sensor[values_fpVal[i]] = fp_value[i];
                }
            break;

            case "more_fingerprinting":
                const more_fp = sensor_variable.split(",");
                for (let i = 0; i < values_129.length; i++) {
                    parsed_sensor[values_129[i]] = more_fp[i];
                }
            break;

            case "mact":
                var acts = sensor_variable.split(";");
                for (let a of acts) {
                    var act = a.split(",");
                    if (act.length == 1) break;

                    ta += parseInt(act[2]);
                    me_vel += parseInt(act[0]) + parseInt(act[1]) + parseInt(act[2]) + parseInt(act[3]) + parseInt(act[4]);

                    if (!actions[act[2]]) actions[act[2]] = "";
                    actions[act[2]] += `${mact[act[1]]} x:${act[3]} y:${act[4]};`;
                }
            break;

            case "pact":
                var acts = sensor_variable.split(";");
                for (let a of acts) {
                    var act = a.split(",");
                    if (act.length == 1) break;

                    ta += parseInt(act[2]);
                    pe_vel += parseInt(act[0]) + parseInt(act[1]) + parseInt(act[2]) + parseInt(act[3]) + parseInt(act[4]);
                    
                    if (!actions[act[2]]) actions[act[2]]="";
                    actions[act[2]] += `${pact[act[1]]} x:${act[3]} y:${act[4]};`;
                }
            break;

            case "tact":
                var acts = sensor_variable.split(";");
                for (let a of acts) {
                    var act = a.split(",");
                    if (act.length == 1) break;

                    ta += parseInt(act[2]);
                    te_vel += parseInt(act[0]) + parseInt(act[1]) + parseInt(act[2]) + parseInt(act[3]) + parseInt(act[4]);
                    
                    if (!actions[act[2]]) actions[act[2]] = "";
                    actions[act[2]] += `${tact[act[1]]} x:${act[3]} y:${act[4]};`;
                }
            break;

            case "doact":
                var acts = sensor_variable.split(";");
                for (let a of acts) {
                    var act = a.split(",");
                    if (act.length == 1) break;

                    ta += parseInt(act[1]);
                    doe_vel += parseInt(act[0]) + parseInt(act[1]);
                    
                    if (!actions[act[1]]) actions[act[1]] = "";
                    actions[act[1]] += 'deviceOrientation;';
                }
            break;

            case "dmact":
                var acts = sensor_variable.split(";");
                for (let a of acts) {
                    var act = a.split(",");
                    if (act.length == 1) break;

                    ta += parseInt(act[1]);
                    dme_vel += parseInt(act[0]) + parseInt(act[1]);
                    
                    if (!actions[act[1]]) actions[act[1]] = "";
                    actions[act[1]] += 'deviceMotion;';
                }
            break;

            case "vcact":
                var acts = sensor_variable.split(";");
                for (let a of acts) {
                    var act = a.split(",");
                    if (act.length == 1) break;

                    if (!actions[act[2]]) actions[act[2]] = "";
                    actions[act[2]] += `${vcact[act[1]]};`;
                }					
            break;

            case "kact":
                var acts = sensor_variable.split(";");
                for (let a of acts) {
                    var act = a.split(",");
                    if (act.length == 1) break;

                    ta += parseInt(act[2]);
                    ke_vel += parseInt(act[0]) + parseInt(act[1]) + parseInt(act[2]) + parseInt(act[3]) + parseInt(act[5]) + parseInt(act[6]);

                    if (!actions[act[2]]) actions[act[2]] = "";
                    actions[act[2]]+=`${kact[act[1]]} keyCode:${act[3]};`;
                }
            break;
        }
    }
    parsed_sensor["timings"] = sensor_data.substring(previous_key_index + 1, sensor_data.length);

    if (actions.length) console.log(chalk.magenta.bold("\nTimings:"))
    let time = 0;
    Object.keys(actions).sort((a, b) => a - b).forEach((a)=>{
        const ts = a - time;
        console.log(`[${ts} ms] - ${actions[a]}`);
    })

    console.log(chalk.magenta.bold("\nParsed sensor_data:"));
    prettyPrint(parsed_sensor, values_115, values_fpVal);

    console.log(chalk.magenta.bold("\nMiscellaneous checks:"));

    // vels checks
    console.log(chalk.whiteBright.bold("ke_vel check:            ") + ((parsed_sensor["ke_vel + 1"] - ke_vel - 1) ? chalk.red.bold("FAILED ") + chalk.magentaBright(ke_vel) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["ke_vel + 1"]) : chalk.green.bold("PASSED")));
    console.log(chalk.whiteBright.bold("me_vel check:            ") + ((parsed_sensor["me_vel + 32"] - me_vel - 32) ? chalk.red.bold("FAILED ") + chalk.magentaBright(me_vel) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["me_vel + 32"]) : chalk.green.bold("PASSED")));
    console.log(chalk.whiteBright.bold("te_vel check:            ") + ((parsed_sensor["te_vel + 32"] - te_vel - 32) ? chalk.red.bold("FAILED ") + chalk.magentaBright(te_vel) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["te_vel + 32"]) : chalk.green.bold("PASSED")));
    console.log(chalk.whiteBright.bold("pe_vel check:            ") + ((parsed_sensor["pe_vel"] - pe_vel) ? chalk.red.bold("FAILED ") + chalk.magentaBright(pe_vel) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["pe_vel"]) : chalk.green.bold("PASSED")));
    console.log(chalk.whiteBright.bold("doe_vel check:           ") + ((parsed_sensor["doe_vel"] - doe_vel) ? chalk.red.bold("FAILED ") + chalk.magentaBright(doe_vel) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["doe_vel"]) : chalk.green.bold("PASSED")));
    console.log(chalk.whiteBright.bold("dme_vel check:           ") + ((parsed_sensor["dme_vel"] - dme_vel) ? chalk.red.bold("FAILED ") + chalk.magentaBright(dme_vel) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["dme_vel"]) : chalk.green.bold("PASSED")));
    console.log(chalk.whiteBright.bold("vel_sum check:           ") + ((parsed_sensor["vel_sum"] - ke_vel - me_vel - te_vel - pe_vel - doe_vel - dme_vel) ? chalk.red.bold("FAILED ") + chalk.magentaBright(ke_vel + me_vel + te_veld + pe_vel + me_vel + doe_vel + dme_vel) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["vel_sum"]) : chalk.green.bold("PASSED")));
    
    console.log(chalk.whiteBright.bold("ta check:                ") + ((ta - parsed_sensor["ta"]) ? chalk.red.bold("FAILED ") + chalk.magentaBright(ta) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["ta"]) : chalk.green.bold("PASSED")));
    console.log(chalk.whiteBright.bold("d2/6 check:              ") + ((parsed_sensor["bmak.pi(bmak.d2 / 6)"] != Math.floor(parsed_sensor["bmak.d2"] / 6)) ? chalk.red.bold("FAILED ") + chalk.magentaBright(Math.floor(parsed_sensor["bmak.d2"] / 6)) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["bmak.pi(bmak.d2 / 6)"]) : chalk.green.bold("PASSED")));
    console.log(chalk.whiteBright.bold("d3 check:                ") + ((Math.abs(parsed_sensor["start_ts"] % 1e7 - parsed_sensor["d3"]) < 2) ? chalk.red.bold("FAILED Math.abs(") + chalk.magentaBright(parsed_sensor["start_ts"] % 1e7 - parsed_sensor["d3"]) + chalk.red.bold(") > 2") : chalk.green.bold("PASSED")));
    
    let o9 = calc_o9(parsed_sensor["d3"]);
    console.log(chalk.whiteBright.bold("o9 check:                ") + ((parsed_sensor["o9"] - o9) ? chalk.red.bold("FAILED ") + chalk.magentaBright(o9) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["o9"]) : chalk.green.bold("PASSED")));
    console.log(chalk.whiteBright.bold("z1 check:                ") + ((parsed_sensor["z1"] != parseInt(parsed_sensor["bmak.start_ts"] / (2016 * 2016))) ? chalk.red.bold("FAILED ") + chalk.magentaBright(parseInt(parsed_sensor["bmak.start_ts"] / (2016 * 2016))) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["z1"]) : chalk.green.bold("PASSED")));
    
    let aj_type = parsed_sensor["aj"].split(',')[0];
    let tst = parsed_sensor["timings"].split(';')[1];
    console.log(chalk.whiteBright.bold("tst check:               ") + ((aj_type && tst == -1) ? chalk.red.bold("FAILED ") + chalk.magentaBright("tst is -1 only for aj_type=0") : chalk.green.bold("PASSED")));
    
    console.log(chalk.whiteBright.bold("fpcf_td check:           ") + ((aj_type && parsed_sensor["fpcf_td"] == -999999 || !aj_type && parsed_sensor["fpcf_td"] != -999999) ? chalk.red.bold("FAILED ") + chalk.magentaBright("fpcf_td is -999999 only for aj_type=0") : chalk.green.bold("PASSED")));
    console.log(chalk.whiteBright.bold("start_ts/2 check:        ") + ((parsed_sensor["start_ts / 2"] != (parsed_sensor["bmak.start_ts"] / 2)) ? chalk.red.bold("FAILED ") + chalk.magentaBright(parsed_sensor["bmak.start_ts"] / 2) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["start_ts / 2"]) : chalk.green.bold("PASSED")));
    
    const ua_hash = Abck.ab(parsed_sensor["user_agent"]);
    console.log(chalk.whiteBright.bold("bmak.aur() hash check:   ") + ((parsed_sensor["ua_hash"] != ua_hash) ? chalk.red.bold("FAILED ") + chalk.magentaBright(ua_hash) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["ua_hash"]) : chalk.green.bold("PASSED")));
    
    const fpVal_Hash = Abck.ab(parsed_sensor["fpVal"]);
    console.log(chalk.whiteBright.bold("fpValStr hash check:     ") + ((parsed_sensor["fpVal_Hash"] != fpVal_Hash) ? chalk.red.bold("FAILED ") + chalk.magentaBright(fpVal_Hash) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["fpVal_Hash"]) : chalk.green.bold("PASSED")));
    
    const sensor_hash = 24 ^ Abck.ab(sensor_data.substring(sensor_data.indexOf("1."), sensor_data.indexOf("-1,2,-94,-70,")));
    console.log(chalk.whiteBright.bold("sensor hash (118) check: ") + ((parsed_sensor["sensor_hash"] != sensor_hash) ? chalk.red.bold("FAILED ") + chalk.magentaBright(sensor_hash) + chalk.red.bold(" != ") + chalk.magentaBright(parsed_sensor["sensor_hash"]) : chalk.green.bold("PASSED")));


    if (parsed_sensor["challenge_1"].length || parsed_sensor["challenge_2"].length || parsed_sensor["challenge_3"].length) {
        console.log(chalk.magenta.bold("\nChallenge checks:"));

        if (parsed_sensor["challenge_1"].length) {
            console.log(chalk.blueBright.underline("Challenge 1"));
            challengeCheckSolutions(parsed_sensor["challenge_1"]);
        }

        if (parsed_sensor["challenge_2"].length) {
            console.log(chalk.blueBright.underline("Challenge 2"));
            challengeCheckSolutions(parsed_sensor["challenge_2"]);
        }

        if (parsed_sensor["challenge_3"].length) {
            console.log(chalk.blueBright.underline("Challenge 3"));
            challengeCheckSolutions(parsed_sensor["challenge_3"]);
        }
    }

    process.exit(0);
}

function prettyPrint(parsed_sensor) {
    // Browser information
    console.log(chalk.blueBright.underline("Browser information"));
    const browser_info = { 
        "user_agent":"bmak.uar()",
        "ua_hash":"bmak.ab(bmak.uar())",
        "psub":"bmak.psub",
        "lang":"bmak.lang",
        "prod":"bmak.prod",
        "plen":"bmak.plen",
        "loc": "bmak.loc",
        "nav_perm":"bmak.nav_perm",
        "brv": "bmak.brv",
    };
    Object.keys(browser_info).forEach(value => {
        let val = parsed_sensor[value];
        if (value == "loc") val = val.replace("loc:", "");

        console.log(chalk.whiteBright(browser_info[value] + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // Automation detection
    console.log(chalk.blueBright.underline("\nAutomation detection"));
    const auto_detect = {
        "sed":"bmak.sed()",
        "xagg":"bmak.xagg",
        "pen":"bmak.pen",
        "wen":"bmak.wen",
        "den":"bmak.den"
    };
    Object.keys(auto_detect).forEach(value => {
        let val = parsed_sensor[value];
        if (value == "loc") val = val.replace("loc:", "");

        console.log(chalk.whiteBright(auto_detect[value] + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // bmak.bd() (Browser detection via feature detection)
    console.log(chalk.blueBright.underline("\nBrowser detection (bmak.bd())"));
    const bd_values = { 
        "cpen":"window.callPhantom",
        "i1":"window.ActiveXObject",
        "dm":"\"number\" == typeof document.documentMode",
        "cwen":"window.chrome && window.chrome.webstore",
        "non":"navigator.onLine",
        "opc":"window.opera",
        "fc": "\"undefined\" != typeof InstallTrigger",
        "sc":"Object.prototype.toString.call(window.HTMLElement).indexOf(\"Constructor\")",
        "wrc": "typeof window.RTCPeerConnection || \"function\" == typeof window.mozRTCPeerConnection || \"function\" == typeof window.webkitRTCPeerConnection",
        "isc":"window.mozInnerScreenY",
        "vib":"\"function\" == typeof navigator.vibrate",
        "bat":"\"function\" == typeof navigator.getBattery",
        "x11":"Array.prototype.forEach",
        "x12":"\"FileReader\" in window"
    };
    Object.keys(bd_values).forEach(value => {
        let val = parsed_sensor[value];
        console.log(chalk.whiteBright(bd_values[value] + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // Screen size
    console.log(chalk.blueBright.underline("\nScreen size"));
    const screen_size = {
        "width": "window.screen.width",
        "height": "window.screen.height",
        "availWidth": "window.screen.availWidth",
        "availHeight": "window.screen.availHeight",
        "innerWidth": "window.innerWidth",
        "innerHeight": "window.innerHeight",
        "outerWidth": "window.outerWidth"
    };
    Object.keys(screen_size).forEach(value => {
        let val = parsed_sensor[value];
        console.log(chalk.whiteBright(screen_size[value] + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // Events
    console.log(chalk.blueBright.underline("\nEvents"));
    const events = {
        "events": "Special events status",
        "kact": "bmak.kact (Keys events)",
        "mact": "bmak.mact (Mouse events)",
        "tact": "bmak.tact (Touch events)",
        "pact": "bmak.pact (Pointer events)",
        "doact": "bmak.doact (DeviceOrientation events)",
        "dmact": "bmak.dmact (DeviceMovement events)",
        "vcact": "bmak.vcact (VisibilityChange events)"
    }
    Object.keys(events).forEach(value => {
        let val = parsed_sensor[value];
        console.log(chalk.whiteBright(events[value] + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // Coherence check
    console.log(chalk.blueBright.underline("\nVariable 115 (Coherence check)"));
    values_115.forEach(value => {
        let val = parsed_sensor[value];
        console.log(chalk.whiteBright(value + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // Challenges
    console.log(chalk.blueBright.underline("\nChallenges"));
    const challenges = {
        "challenge_1": "S = bmak.mn_r[bmak.mn_get_current_challenges()[1]]",
        "challenge_2": "E = bmak.mn_r[bmak.mn_get_current_challenges()[2]]",
        "challenge_3": "M = bmak.mn_r[bmak.mn_get_current_challenges()[3]]"
    }
    Object.keys(challenges).forEach(value => {
        let val = parsed_sensor[value];
        console.log(chalk.whiteBright(challenges[value] + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // Fingerprinting
    console.log(chalk.blueBright.underline("\nFingerprinting"));
    const fingerprinting = {
        "mr": "bmak.mr",
        "fpVal": "bmak.fpcf.fpValstr",
        "fpVal_Hash": "bmak.ab(bmak.fpcf.fpValstr)"
    }
    Object.keys(fingerprinting).forEach(value => {
        let val = parsed_sensor[value];
        console.log(chalk.whiteBright(fingerprinting[value] + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // bmak.fpcf.fpValstr (70)
    console.log(chalk.blueBright.underline("\nbmak.fpcf.fpValstr (70)"));
    values_fpVal.forEach(value => {
        let val = parsed_sensor[value];
        console.log(chalk.whiteBright(value + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // w (129)
    console.log(chalk.blueBright.underline("\nw (129)"));
    const more_fingerprinting = {
        "fmh": "bmak.fmh (installed fonts hash)",
        "fmz": "bmak.fmz (window.devicePixelRatio)",
        "ssh": "bmak.ssh (speech synthesis hash)",
        "wv": "bmak.wv (always empty)",
        "wr": "bmak.wr (always empty)",
        "weh": "bmak.weh (always empty)",
        "wl": "bmak.wl (always 0)"
    }
    Object.keys(more_fingerprinting).forEach(value => {
        let val = parsed_sensor[value];
        console.log(chalk.whiteBright(more_fingerprinting[value] + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // Target info
    console.log(chalk.blueBright.underline("\nTarget info"));
    const website = {
        "URL": "bmak.getdurl()",
        "informinfo": "bmak.informinfo",
        "forminfo": "bmak.getforminfo()"
    }
    Object.keys(website).forEach(value => {
        let val = parsed_sensor[value];
        console.log(chalk.whiteBright(website[value] + ": " + chalk.cyanBright.bold(val)));
    });
    // -------

    // Sensor_data info
    console.log(chalk.blueBright.underline("\nSensor_data info"));
    const api_key = parsed_sensor["key_ver"].substring(0, parsed_sensor["key_ver"].length - 4);
    const version = parsed_sensor["key_ver"].substring(parsed_sensor["key_ver"].length - 4)
    console.log(chalk.whiteBright("API public key hash: " + chalk.cyanBright.bold(api_key)));
    console.log(chalk.whiteBright("Akamai version: " + chalk.cyanBright.bold(version)));

    const aj_split = parsed_sensor["aj"].split(',');
    const aj_type = aj_split[0];
    const aj_indx = aj_split[1];
    console.log(chalk.whiteBright("bmak.aj_type: ") + chalk.cyanBright.bold(aj_type) + chalk.whiteBright.bold(" -> ") + chalk.cyanBright.bold(getSensorType(aj_type)));
    console.log(chalk.whiteBright("bmak.aj_indx: " + chalk.cyanBright.bold(aj_indx)));

    const timings_split = parsed_sensor["timings"].split(';');
    const sensor_data_gen_time = timings_split[0];
    const startTracking_exec_time = timings_split[1];
    const api_hash_gen_time = timings_split[2];
    console.log(chalk.whiteBright("Sensor_data generation time (ms): " + chalk.cyanBright.bold(sensor_data_gen_time)));
    console.log(chalk.whiteBright("bmak.startTracking() execution time (ms): " + chalk.cyanBright.bold(startTracking_exec_time)));
    console.log(chalk.whiteBright("Public API key hash generation time (ms): " + chalk.cyanBright.bold(api_hash_gen_time)));
    // -------

    // Miscellaneous variables
    console.log(chalk.blueBright.underline("\nMiscellaneous variables"));
    const misc = {
        "z1": "bmak.z1 = bmak.pi(bmak.start_ts / (2016 * 2016))",
        "d3": "bmak.d3 = bmak.get_cf_date() % 1e7",
        "random": "randNum.toString().slice(0, 11) + bmak.pi(1e3 * randNum / 2)",
        "o9": "bmak.o9",
        "start_ts / 2": "bmak.start_ts() / 2"
    }
    Object.keys(misc).forEach(value => {
        let val = parsed_sensor[value];
        console.log(chalk.whiteBright(misc[value] + ": " + chalk.cyanBright.bold(val)));
    });
}

function calc_o9(d3) {
    let t = d3;
    for (let n = 0; n < 5; n++) {
        const o = parseInt(d3 / Math.pow(10, n)) % 10;
        const m = o + 1;
        const op = Abck.cc(o);
        t = op(t, m);
    }
    return t * 3;
}

function getSensorType(aj_type) {
    switch (parseInt(aj_type)) {
        case 0:
            return "bmak.startTracking(): Initialisation";
        case 1:
            return "bmak.cma(): MouseClick event";
        case 2:
            return "bmak.cpa(): PointerDown event";
        case 3:
            return "bmak.cka(): Keyboard event";
        case 5:
            return "bmak.cta(): TouchStart event";
        case 6:
            return "bmak.cdoa(): DeviceOrientation event";
        case 7:
            return "bmak.cdma(): DeviceMovement event";
        case 8:
            return "bmak.mn_w(): Challenge solving";
        case 9:
            return "bmak.calc_fp(): Fingerprinting computation";
        default:
            return "Unrecognized aj_type";
    }
}

function challengeCheckSolutions(challenge) {
    const challenge_split = challenge.split(';');
    const challenge_solutions = challenge_split[0].split(',');
    const challenge_parameters = challenge_split[3].split(',');

    const mn_abck = challenge_parameters[0];
    const mn_ts = challenge_parameters[1];
    const mn_psn = challenge_parameters[2];
    const mn_cc = challenge_parameters[3];

    console.log(chalk.whiteBright.bold("bmak.mn_abck: ") + chalk.cyanBright.bold(mn_abck));
    console.log(chalk.whiteBright.bold("bmak.mn_ts: ") + chalk.cyanBright.bold(mn_ts));
    console.log(chalk.whiteBright.bold("bmak.mn_psn: ") + chalk.cyanBright.bold(mn_psn));

    challenge_solutions.forEach((solution, index) => {
        const m = parseInt(challenge_parameters[5]) + index;
        const r = mn_cc + m + solution;
        const i = Abck.mn_s(r);

        console.log((Abck.bdm(i, m) == 0 ? chalk.greenBright.bold(solution) : chalk.redBright.bold(solution)));
    });
}

module.exports = { parse_sensor }
# akamai-toolkit
This script aims to provide various tools to work on Akamai anti-bot solution.

To install the dependencies and start using the script, just run:

```sh
> cd akamai-toolkit
> npm install
> node toolkit.js
```

The script uses [commander](https://www.npmjs.com/package/commander) to parse arguments, which does not behave correctly when using `npm start`. You can use `node` or just do `./toolkit.js` (you may have to update the shebang).

Please give a look at the `config.json` file. It contains the current Akamai script version that you must update if needed, the chrome binary to use with Puppeteer and the list of sites to check Akamai version on.

### Akamai deobfuscator
Source from [char](https://github.com/char/akamai-deobfuscator). Using an AST is a really good idea and I'm planning to use the same method to create deobfuscators for other anti-bot scripts. The deobfuscator from **char** required full Akamai script URL, so I added the possibility to simply type the target.

Usage: `node toolkit.js -d <target>`, where target can be of the form *fedex.com*, *www.nike.com* or *https://www.adidas.com*.

### Akamai version checker
Source from [zedd3v](https://github.com/zedd3v/akamai-versions-checker). Refactored the code and added possibility to check version on a single site.

The tool will print script version in different colors depending on the Akamai version number set in `config.json`.

Usage: 

- `node toolkit.js -v`  will check version for all the sites in __config.json__.
- `node toolkit.js -v <target>` will check version on target. Target can be of the form *fedex.com*, *www.nike.com* or *https://www.adidas.com*.

### Ternary to if 

Source from [RayBB](https://github.com/RayBB/ternary-converter). I just kept the conversion part. It needs update as malformed ternary sometimes cause infinite loops. 

Usage: `node toolkit.js -t`

### Akamai sensor_data parsing

The script includes a sensor_data parser and checker based on the checker of [gondone666](https://github.com/gondone666/parse-sensor), which I improved and updated.

Changes :
- Added 129 variable which was not parsed and causing issues
- Added pretty-print function that displays sensor_data info in categories
  - Browser information
  - Automation detection
  - Browser detection (bmak.gd())
  - Screen size
  - Events
  - Coherence check (115)
  - Challenges
  - Fingerprinting
  - bmak.fpcf.fpValstr (70)
  - w (129)
  - Target info
  - Sensor_data info
  - Miscellaneous variables
- Added some checks to test the quality of your sensors
- Added challenge solution checks, to see if you can create coherent challenge solutions

Usage: `node toolkit.js -p`

### Custom browser

The script uses Puppeteer to provide an easy way to experiment on scripts. You can replace a script by a custom one, allowing you to add additional logs for example. You can also execute Javascript in Node and in-browser. The tool uses YAML config files, allowing you to quickly change the behaviour of Puppeteer without having to manually edit the code.

Available options are:
- `headless` : to control headless property of the browser
- `devtools` : to open the devtools in the browser
- `windowSize` : to set a custom window size for the browser
- `dis_intercept` : to disable requests interception (if you just need to open a page)
- `target` : URL to browse
- `hijack_script_path` : path to the custom script, leave empty to disable script hijack
- `helpers` : enable helpers functions for simpler config file creation
	At the moment the script only has one helper: `cookie`, allowing user to access the value of a cookie without having to type the full Javascript code.
- `script_name_includes` : full URL or part of the URL of the script to replace
- `main` : code to run after the target page is loaded
  - `page` : code to run on page
  - `node` : code to run in Node.js using eval()
- `GET` : code to run when the target script is being downloaded
  - `page` : code to run on page
  - `node` : code to run in Node.js using eval() (you do not need to include script hijack code)
- `POST` : code to run when a POST is made to the target script
  - `page` : code to run on page
  - `node` : code to run in Node.js using eval()
- `DEFAULT` : code to run when any other HTTP method is used on target script
  - `page` : code to run on page
  - `node` : code to run in Node.js using eval()
- `response` : code to run when a request to target script receives a response
  - `page` : code to run on page
  - `node` : code to run in Node.js using eval()
- `requests` : code to run when a request in made to any other resource than the script
  - `page` : code to run on page
  - `node` : code to run in Node.js using eval()

You will find an example config file for Akamai script hijack on nike.com in **puppeteer_configs** directory.

Usage: `node toolkit.js -c <config_file>`
	Please note that config files can only be in **puppeteer_configs** directory and that you do not need to specify the .yaml extension. For example, to call Puppeteer with akamai.yaml config, you need to call `node toolkit.js -c akamai`.

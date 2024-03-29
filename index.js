const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
/////////////////////////////////////////////
//========= CHECK UPTIME =========//
/////////////////////////////////////////////
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk = require("chalk");
const {pingMyAss} = require('./utils/ping.js');

/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const express = require('express');
const app = express();

const port = process.env.PORT || 5000

app.listen(port, () =>
  logger(`Your app is listening a http://localhost:${port}`, "[ ONLINE ]")
     );      


logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", [ "jeka.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

  child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Starting up...");
            global.countRestart += 1;
            return;
        } else return;
    });

  child.on("error", function(error) {
    logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
  });
};
////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////

/*
axios.get("https://raw.githubusercontent.com/ppcat123/Package.json/main/package.json").then((res) => {
  logger(res['data']['name'], "[ NAME ]");
  logger("Version: " + res['data']['version'], "[ VERSION ]");
  logger(res['data']['description'], "[ DESCRIPTION ]");
  logger(res['data']['author'], "[ Author ]");
  logger(res['data']['info'], "[ creator info ]");
});*/
startBot();
// THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯
app.get('/', (req, res) => res.send('Hello World'))
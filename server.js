/*
  DON'T MESS WITH THIS UNLESS YOU KNOW WHAT YOU'RE DOING
*/


const express = require("express");
const discord = require("discord.js");
const bodyparser = require("body-parser");
const util = require("util");
const fs = require("fs");
const enmap = require("enmap");
const request = require("request");
const config = require("./config.js"); // Bot Config
const moment = require("moment");
require("moment-duration-format");

// File System
const promisify = util.promisify;
const readdir = promisify(fs.readdir);
const readfile = promisify(fs.readFile);
const writefile = promisify(fs.writeFile);

// Classes and Objects
const app = express();
const client = new discord.Client();

// Expand
client.commands = new enmap();
client.aliases = new enmap();
client.config = config;


// App
app.use(bodyparser.json());
app.set("env", "production");
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function(request, response) {
  response.sendStatus(200)
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Bot is listening on port " + listener.address().port);
});

// Bot Startup
const startup = async () => {
  
  // Command loading
  const cmdFiles = await readdir("./commands/");
  console.log(`Loading ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
    const response = client.loadCommand(f);
    if (response) console.log(response);
  });
}

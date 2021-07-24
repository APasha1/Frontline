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
const noblox = require("noblox.js")
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

// Modules
require("./modules/commandsHandler.js")(client); // Commands modules
require("./modules/functions.js")(client); // Useful functions


// App
app.use(bodyparser.json());
app.set("env", "production");
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/api/rankuser", function(req, res) {
  console.log("bopped")
  let body = req.body
  if (!body) {
    return res.status(400).send("Malformed request")
  }
  if (body.key !== config.httpAuth) {
    return res.status(403).send("FORBIDDEN")
  }
  
  let userId = body.userId
  let ranks = body.ranks
  if (!userId) {
    return res.status(400).send("Malformed request")
  }
  
  
});

// Set the auto-pinger
app.get("/", function(err, res) {
  res.sendStatus(200);
});

app.get("/ping", function(err, res) {
  res.sendStatus(200);
  // vibe check
});

setInterval(() => {
  request.get("https://roblox-rank-bot-template.glitch.me/");
}, 150000);

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
  
  client.login(process.env.BOT_TOKEN).then(async token => {
    console.log("Logged into Discord!");
  })
  
  
}


// Discord bot events
client.on("ready", async () => {
  /* await noblox.cookieLogin(process.env.COOKIE)
  let user = noblox.getCurrentUser()
  console.log("Successfully logged into roblox as " + JSON.stringify(user, null, 2))
  client.user.setActivity("ROBLOX! [" + config.prefix + "] - " + user.UserName); */
});

client.on("message", async message => {
  if (message.author.bot) return;
  client.messagesReceived++;
  // Basic command handling
  let guild = message.guild;
  let isMasterGuild = guild.id == config.masterServer;
  let channel = message.channel;
  let user = message.author;
  let member = message.member;
  let userId = user.id;
  let content = message.content;
  
  // User stuff
  let userRankData = config.getPermLevel(member);
  let permLevel = userRankData.roleRank;
  let rankName = userRankData.roleName;
  let isOwner = permLevel >= 999;

  let isCommand = content.indexOf(config.prefix) == 0;

  // Command detections
  if (isCommand) {
    let choppedMessage = content.slice(config.prefix.length);
    choppedMessage = choppedMessage.trim();
    let args = choppedMessage.split(" ");
    let commandName = args.shift();

    let isAlias = client.aliases.get(commandName);
    let cmd = client.commands.get(isAlias || commandName);
    if (!cmd) return;
    let cmdRank = cmd.conf.permLevel;
    let cmdPermLevel = config.getRole(cmdRank).rankLevel;
    let cmdEnabled = cmd.conf.enabled;
    let cmdGuildOnly = cmd.conf.guildOnly;

    if (permLevel < cmdPermLevel) {
      return message.reply(
        `you are not authorized to run this command, as it is for **${cmdRank}s** and above only.`
      );
    }
    if (cmdGuildOnly && channel.type == "dm") {
      return message.reply("sorry, this command can only be run in a server.");
    }
    if (!cmdEnabled) {
      return message.reply("this command has been globally disabled.");
    }

    if (cmd) {
      client.commandsRan++;
      try {
        cmd.run(client, message, args, permLevel);
      } catch (e) {
        message.reply(
          `command \`${commandName}\` could not be executed due to an error: \`${e}\``
        );
      }
    } else {
      message.reply("command not found");
    }
  } else {
    // Handle messages that aren't commands
  }
});

if (process.env.BOT_TOKEN != "") {
  startup()
}
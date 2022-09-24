/*
  DON'T MESS WITH THIS UNLESS YOU KNOW WHAT YOU'RE DOING
*/

// Data
const redis = require("redis");
const asyncredis = require("async-redis");

const express = require("express");
const discord = require("discord.js");
const bodyparser = require("body-parser");
const util = require("util");
const fs = require("fs");
const enmap = require("enmap");
const request = require("request-promise");
const config = require("./config.js"); // Bot Config
const moment = require("moment");
const noblox = require("noblox.js")
require("moment-duration-format");

// File System
const promisify = util.promisify;
const readdir = promisify(fs.readdir);
const readfile = promisify(fs.readFile);
const writefile = promisify(fs.writeFile);

//promisify(request.post)

// Classes and Objects
const app = express();
const client = new discord.Client();

// Expand
client.commands = new enmap();
client.aliases = new enmap();
client.config = config;

const rediscli = asyncredis.createClient({url: process.env.REDIS_URL, password: process.env.REDIS_PASS})
client.redisClient = rediscli

// Modules
require("./modules/commandsHandler.js")(client); // Commands modules
require("./modules/functions.js")(client); // Useful functions


// App
app.use(bodyparser.json());
app.set("env", "production");
app.use(bodyparser.urlencoded({ extended: true }));


// Set the auto-pinger
app.get("/", function(err, res) {
  res.sendStatus(200);
});

app.get("/ping", function(err, res) {
  console.log("vibe check");
  res.sendStatus(200);
  // vibe check
});

app.post("/Asilllian/SCPBundle", async function(res, req) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400);
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key) 
  if (keyData.product == "SCPBundle") {  
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
  
});





//here bruh many times bec we need many
 app.post("/Asilllian/PlayersListLeaderboard", async function(res, req) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400);
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key) 
  if (keyData.product == "PlayersListLeaderboard") {  
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
  
})


app.post("/Asilllian/RankTagV2", async function(res, req) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400);
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key) 
  if (keyData.product == "RankTagV2") {  
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
  
});

app.post("/Asilllian/SimpleMenuGUI", async function(res, req) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400);
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key) 
  if (keyData.product == "SimpleMenuGUI") {  
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
  
});

app.post("/Asilllian/ShopGUI", async function(res, req) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400);
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key) 
  if (keyData.product == "ShopGUI") {  
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
  
});

app.post("/Asilllian/AnnouncementsSystem", async function(res, req) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400);
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key) 
  if (keyData.product == "AnnouncementsSystem") {  
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
  
});


app.post("/Asilllian/RankTagV1", async function(res, req) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400);
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key) 
  if (keyData.product == "RankTagV1") {  
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
  
});

app.post("/verifyHostAssistant", async function(req, res) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400)
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key)
  if (!keyData) {return res.sendStatus(403)}
  if (keyData.product == "sidemenu") {
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
});



app.post("/verifyRankRequest", async function(req, res) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400);
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key)
  if (keyData.product == "autoranking") {
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
});

app.post("/verifyHosting", async function(req, res) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400)
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key)
  if (!keyData) {return res.sendStatus(403)}
  if (keyData.product == "hostingassistant"){
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
});



app.post("/verifyBusKey", async function(req, res) {
  let body = req.body
  console.log(body)
  if (!body) {
    console.log("no body invlid request")
    return res.sendStatus(400)
  }
  if (!body.key) {
    console.log("forbidden")
    return res.sendStatus(403)  
  }
  let keyData = await client.getData(body.key)
  if (!keyData) {return res.sendStatus(403)}
  if (keyData.product == "busstop") {
    let creatorId = String(body.creator)
    if (keyData.allowedIds[creatorId]) {
      res.sendStatus(200)
    } else {
      console.log("forbidden not allowed creatorid")
      res.sendStatus(403)
    }
  } else {
    console.log("forbidden (incorrect keytype)")
    res.sendStatus(403)
  }
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
  
  client.login(process.env.BOT_TOKEN).then(async token => {
    console.log("Logged into Discord!");
    client.user.setPresence({
        status: 'available',
        activity: {
            name: 'o!help',
            type: 'PLAYING',
            url: 'https://discord.com'
        }
    });
  })
  
  
}


// Discord bot events
client.on("ready", async () => {

});


client.on("error", async error => {
  return console.log(error)
});

client.on("message", async message => {
  if (message.author.bot) return;
  client.messagesReceived++;
  // Basic command handling
  let guild = message.guild;
  let channel = message.channel;
  let user = message.author;
  let member = message.member;
  let userId = user.id;
  let content = message.content;
  
  // User stuff
  
  let isCommand = content.indexOf(config.prefix) == 0;

  // Command detections
  if (isCommand) {
    if(message.guild){
      
    if(message.guild.id === "875553369266204702"){
      
      return message.channel.send("This servers subscription has expired - Join discord.gg/odera to renew")
      
    }
      }
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
    let OderaOnly = cmd.conf.oderaOnly;
    let permLevel = 1

    if (channel.type == "text") {
      let isMasterGuild = guild.id == config.masterServer;
      let userRankData = config.getPermLevel(member);
      
      
      
      
      permLevel = userRankData.roleRank;
      let rankName = userRankData.roleName;
      let isOwner = permLevel >= 999;
      if (permLevel < cmdPermLevel) {
        if(cmdRank === 'Megu'){
        return message.reply(
          `you are not authorized to run this command, as it is for **ODERA STAFFs** and above only.`
        );
        }
        return message.reply(
          `you are not authorized to run this command, as it is for **${cmdRank}s** and above only.`
        );
      }
      if (OderaOnly && !message.guild) {
        return message.reply("sorry, this command can only be run in a server.");
      }
      if (!cmdEnabled) {
        return message.reply("this command has been globally disabled.");
      }
    }
    if (cmd) {
      client.commandsRan++;
      try {
        if(OderaOnly == false && !message.guild ||OderaOnly == false && message.guild || OderaOnly == true && message.guild){
        cmd.run(client, message, args, permLevel);
        }else{
         return message.reply("sorry, this command can only be run in a server.");
        }
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
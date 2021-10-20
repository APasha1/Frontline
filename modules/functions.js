const discord = require('discord.js') //why are here u noob
const moment = require("moment");
require("moment-duration-format");

module.exports = (client) => {
  
  // Getters
  client.getChannel = (channelId) => {
    return client.channels.get(channelId)
  }
  
  client.getEmoji = (emojiId) => {
    return client.emojis.get(emojiId)
  }
  
  client.getUser = (userId) => {
    return client.users.get(userId)
  }
  
  client.getGuild = (guildId) => {
    return client.guilds.get(guildId)
  }
  
  client.getRole = (guildId, roleId) => {
    let guild = client.getGuild(guildId)
    if (guild) {
      if (guild.roles.get(roleId)) {
        return guild.roles.get(roleId)
      } else {
        return false
      }
    } else {
      return false
    }
  }
  
  client.getIdInMessage = (messageObj) => {
    return messageObj.content.match(/\d+/g) ? messageObj.content.match(/\d+/g).sort(function(a, b) { return b.length-a.length})[0] : null
  }
  // Date formatter
  client.formatDate = (dateObject) => {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return dateObject.toLocaleDateString("en-US", options)
  }
  
  // More specific functions
  client.hastebin = async function(input) {
    const {post} = require('snekfetch')
    const { body } = await post('https://hastebin.com/documents').send(input)
    let key = body.key
    return "https://hastebin.com/" + key
  }
  

  // Utilities
  client.clean = async (client, text) => {
    if (text && text.constructor.name == "Promise")
      text = await text;
    if (typeof evaled !== "string")
      text = require("util").inspect(text, {depth: 0});

    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203))
      .replace(client.token, "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");

    return text;
  };
  
  client.awaitReply = async (msg, question, options, limit = 60000) => {
    const filter = m => m.author.id === msg.author.id;
    await msg.channel.send(question, options);
    try {
      const collected = await msg.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
      return collected.first();
    } catch (e) {
      return false;
    }
  };
  
  client.getData = async (key) => {
    let data = await client.redisClient.get(key)
    return JSON.parse(data)
  }

  client.setData = async (key, val, toSet) => {
    let data = await client.redisClient.set(key, JSON.stringify(val, null, 2))
    return data 
  }
  
  client.wait = require("util").promisify(setTimeout);
  
  // These 2 process methods will catch exceptions and give more details about the error and stack trace.
  process.on("uncaughtException", (err) => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    console.log("Uncaught Exception: " + errorMsg)
    // p
    process.exit(143);
  });

  process.on("unhandledRejection", err => {
    const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
    console.log("Uncaught Exception: " + errorMsg)
  });
}
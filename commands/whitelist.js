const discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let productKey = args[0]
  let action = args[1]
  let targetId = args[2]
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "whitelist",
  category: "Main",
  description: "Add or remove an ID to your whitelist",
  usage: "whitelist [product key] [add/remove] [group/user id]"
};
const discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let data = await client.getData(args[0])
  message.channel.send(JSON.stringify(data, null, 2))
};

exports.conf = {
  enabled: true,
  oderaOnly: false,
  aliases: [],
  permLevel: "Megu"
};

exports.help = {
  name: "valueofkey",
  category: "Owner",
  description: "debug cmd",
  usage: "valueofkey"
};
const discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Pinging...");
  const embed = new discord.MessageEmbed()
  embed.setColor(client.config.embedColors.default)
  let latency = ((msg.createdTimestamp - message.createdTimestamp) / 1000).toFixed(2)
  embed.setDescription(`**Response speed: ${latency} seconds**`)
  msg.edit({embed})
};

exports.conf = {
  enabled: true,
  oderaOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Utility",
  description: "Check the latency of the bot! Measured in seconds.",
  usage: "ping"
};
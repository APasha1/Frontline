const discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars


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
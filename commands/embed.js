const discord = require("discord.js");



exports.run = async (client, message, args, level) => { 
const channel = message.mentions.channels.first()
if(channel){
  
}
}


exports.conf = {
  enabled: true,
  oderaOnly: false,
  aliases: [],
  permLevel: "Staff"
};

exports.help = {
  name: "embed",
  category: "Staff",
  description: "Embed cmd",
  usage: "embed <#channel> <msg>"
};
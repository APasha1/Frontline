const discord = require("discord.js");



exports.run = async (client, message, args, level) => { 
    const MyMessage = message.content.slice(30).trim();
    
    let announceChannel = message.mentions.channels.first();
    if(announceChannel){
    const embed = new discord.MessageEmbed()
    .setDescription(MyMessage)
    .setColor("BLUE")
    announceChannel.send({embed})
      message.channel.send("Message sent!")
    }else{
      message.channel.send("Please enter the command with the right format. It would be: o!embed <#channel> <msg>")
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
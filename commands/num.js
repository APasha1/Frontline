const discord = require("discord.js");
const roblox = require("noblox");



exports.run = async (client, message, args, level) => { 
if(args[0] === "asilllian"){
const data = await client.getData("asillliancount");
  console.log(data)
message.channel.send("I have been generated " + data.count + " keys for **Asillian**")
}

}


exports.conf = {
  enabled: true,
  oderaOnly: false,
  aliases: [],
  permLevel: "Megu"
};

exports.help = {
  name: "num",
  category: "Owner",
  description: "cmd",
  usage: "num"
};
const discord = require("discord.js");
const roblox = require("noblox");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let productKey = args[0]
  let action = args[1]
  let targetId = Number(args[2])
  
  client.getData(productKey).then(keyData => {
    if (keyData.user == message.author.id) {
      if (action == "add") {
        roblox.getGroup({userId: targetId}).then(result => {
          
        }).catch(err => {
          roblox.getPlayerInfo({userId: targetId}).then(result => {
            message.channel.send(client.config.emotes.accept + "")
          }).catch(err => {
            message.channel.send(client.config.emotes.deny + " The ID provided was invalid. Please provide a valid **User ID or Group ID.**")
          })
        })
      } else if (action == "remove") {
        
      }
    } else {
      message.channel.send(client.config.emotes.deny + " You do not have permission to edit the whitelisting for this key.")
    }
  }).catch(err => {
    message.channel.send(client.config.emotes.deny + " This key does not exist in the database. Please make sure you've spelt it correctly.")
  })
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
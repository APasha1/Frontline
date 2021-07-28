const discord = require("discord.js");
const roblox = require("noblox");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let member = message.mentions.members.first()
  let didMention = message.mentions.members.first()
  if (member) {
    if (level < 10) return message.channel.send(`${client.config.emotes.deny} Only staff members can check the key info of other users.`)
  } else {
    member = message.member
  }
  
  let keyInfo = {}
  let allKeys = await client.redisClient.keys("*") // retrieves all keys from db in an array
  // this is an O(N) operation. will be somewhat expensive as db grows
  for (let index in allKeys) {
    let key = allKeys[index]
    let keyData = await client.getData(key)
    if (keyData.user && keyData.user == member.id) {
      let whitelisted = Object.keys(keyData.allowedIds)
      let names = []
      for (let id in whitelisted) {
        try {
          
        } catch {
          names.push("INVALID_ID")
        }
      }
      keyInfo[key] = whitelisted.length > 0 ? `Whitelisted for ID **${whitelisted}**` : "Nobody has been whitelisted yet for this key."
    }
  }
  
  const embed = new discord.MessageEmbed()
  embed.setColor(client.config.embedColors.default)
  embed.setTitle(`Key information for ${member.user.tag}`)
  for (let key in keyInfo) {
    embed.addField(key, keyInfo[key])
  }
  if (Object.keys(keyInfo).length == 0) embed.setDescription("This user doesn't have any keys!")
  embed.setTimestamp()
  embed.setFooter("Made by megu#6644")
  
  if (!didMention) {
    message.channel.send(`${client.config.emotes.accept} Check your DMs!`)
    message.author.send({embed})
  } else {
    message.channel.send({embed})
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "keyinfo",
  category: "Main",
  description: "Check the key information of a user, or yourself.",
  usage: "keyinfo [user]"
};
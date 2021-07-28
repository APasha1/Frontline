const discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let member = message.mentions.members.first()
  if (!member) return message.channel.send("Please provide a user to view keys for.")
  
  let keyInfo = {}
  let allKeys = await client.redisClient.keys("*") // retrieves all keys from db in an array
  // this is an O(N) operation. will be somewhat expensive as db grows
  for (let index in allKeys) {
    let key = allKeys[index]
    let keyData = await client.getData(key)
    if (keyData.user && keyData.user == member.id) {
      let whitelisted = Object.keys(keyData.allowedIds)
      keyInfo[key] = whitelisted.length > 0 ? `Whitelisted for **${whitelisted}**` : "Nobody has been whitelisted yet for this key."
    }
  }
  
  const embed = new discord.MessageEmbed()
  embed.setColor(client.config.embedColors.default)
  embed.setTitle(`Key information for ${member.user.tag}`)
  for (let key in keyInfo) {
    embed.addField(key, keyInfo[key])
  }
  embed.setTimestamp()
  embed.setFooter("Made by megu#6644")
  
  message.channel.send({embed})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Staff"
};

exports.help = {
  name: "keyinfo",
  category: "Staff",
  description: "Check the key information of a user.",
  usage: "keyinfo [user]"
};
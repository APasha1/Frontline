const discord = require("discord.js");
const roblox = require("noblox");



exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let member
  if (message.mentions.members || args[0]) {
    member = message.mentions.members.first()
    let didMention = message.mentions.members.first()
    if (member) {
      if (level < 10) return message.channel.send(`${client.config.emotes.deny} Only staff members can check the key info of other users.`)
    } else {
      member = message.member || message.author
    }
  } else {
    member = {user: message.author}
  }
  
  
  let keyInfo = {}
  let keyProducts = {}
  let allKeys = await client.redisClient.keys("*") // retrieves all keys from db in an array
  // this is an O(N) operation. will be somewhat expensive as db grows
  for (let index in allKeys) {
    let key = allKeys[index]
    let keyData = await client.getData(key)
    console.log(key + " " + keyData)
    if (keyData.user && keyData.user == member.id) {
      let whitelisted = Object.keys(keyData.allowedIds)
      let names = []
      for (let ind in whitelisted) {
        let id = whitelisted[ind]
        try {
          let groupInfo = await roblox.getGroup(Number(id))
          names.push(`\`Group - ${groupInfo.name} (ID ${id})\``)
        } catch {
          try {
            let userInfo = await roblox.getPlayerInfo(Number(id))
            names.push(`\`User - @${userInfo.username} (ID ${id})\``)
          } catch {
            names.push(`**INVALID_ID - (ID ${id})**`)
          }
        }
      }
      keyInfo[key] = whitelisted.length > 0 ? `Whitelisted for **${names.join(", ")}**` : "Nobody has been whitelisted yet for this key."
      let keylool = client.config.products[keyData.product] || client.config.products_Asilllian[keyData.product]
      console.log(keylool)
      console.log(keylool.name)
      keyProducts[key] = keylool.name
      
    }
  }
  
  const embed = new discord.MessageEmbed()
  embed.setColor(client.config.embedColors.default)
  embed.setTitle(`Key information for ${member.user.tag}`)
  for (let key in keyInfo) {
    embed.addField(key + " - " + keyProducts[key], keyInfo[key])
  }
  if (Object.keys(keyInfo).length == 0) embed.setDescription("This user doesn't have any keys!")
  embed.setTimestamp()
  embed.setFooter("Made by megu#6644")
  console.log(embed)
  
  if (message.channel.type != "dm") message.channel.send(`${client.config.emotes.accept} Check your DMs!`)
  message.author.send({embed})
  
  
};

exports.conf = {
  enabled: true,
  oderaOnly: true,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "keyinfo",
  category: "Main",
  description: "Check the key information of a user, or yourself.",
  usage: "keyinfo [user]"
};
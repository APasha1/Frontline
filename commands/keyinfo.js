const discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let member = message.mentions.members.first()
  if (!member) return message.channel.send("Please provide a user to view keys for.")
  
  let keyInfo = []
  let allKeys = client.redisClient.keys("*") // retrieves all keys from db in an array
  // this is an O(N) operation. will be somewhat expensive as db grows
  for (let index in allKeys) {
    let key = allKeys[index]
    let keyData = client.getData(key)
    if (keyData.user && keyData.user == member.id) {
      keyInfo.push()
    }
  }
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
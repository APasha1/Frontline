const discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let key = args[0]
  try {
    let keyExists = await client.getData(key)
    client.redisClient.del(key).then(a => {
      message.channel.send(`${client.config.emotes.accept} The key was deleted.`)
    })
  } catch {
    message.channel.send(`${client.config.emotes.accept} The key does not exist in the database.`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Staff"
};

exports.help = {
  name: "delkey",
  category: "Staff",
  description: "Delete a key from the database.",
  usage: "delkey [key]"
};
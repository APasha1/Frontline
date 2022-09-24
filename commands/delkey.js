const discord = require("discord.js");
// Modded was here

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  let key = args[0];
  client.redisClient.del(key).then((result) => {
    if (result > 0) {
      message.channel.send(
        `${client.config.emotes.accept} The key was deleted.`
      );
    } else {
      message.channel.send(
        `${client.config.emotes.deny} The key does not exist in the database.`
      );
    }
  });
};

exports.conf = {
  enabled: true,
  oderaOnly: true,
  aliases: [],
  permLevel: "Staff",
};

exports.help = {
  name: "delkey",
  category: "Staff",
  description: "Delete a key from the database.",
  usage: "delkey [key]",
};

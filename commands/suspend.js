const discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars

  const member = message.mentions.users.first();

  member
    .send(
      "**License Suspended**\n\n" +
        "Your whitelist has been suspended due to violating TOS. Any questions or concerns contact abs#2013"
    )
    .catch((err) => {
      message.channel.send("The user DMs closed");
    })
    .then((send) => {
      message.channel.send("Message sent!");
    });
};

exports.conf = {
  enabled: true,

  oderaOnly: true,

  aliases: [],

  permLevel: "Staff",
};

exports.help = {
  name: "suspend",

  category: "Staff",

  description: "Suspend someones licenses.",

  usage: "suspend <@user>",
};

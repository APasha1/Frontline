const discord = require("discord.js");

function genID() {
  var d = new Date().getTime();
  var d2 = d
  if (typeof d2 !== 'undefined' && typeof d2.now === 'function'){
    d += performance.now();
  }
  return 'ODERA-xyxyx-yyxxx-yyxyy-xyyyx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let memberToBindTo = message.mentions.members.first()
  if (!memberToBindTo) return message.channel.send("Please provide a user to generate a key for.")
  message.channel.send("Alright, generated a key for " + memberToBindTo.user.discriminator + ".\nThis will allow them to use Autoranking for **one** group.")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Staff"
};

exports.help = {
  name: "genkey",
  category: "Staff",
  description: "Generates a standard key for a user.",
  usage: "genkey"
};
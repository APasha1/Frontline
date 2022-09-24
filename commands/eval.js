// The EVAL command will execute **ANY** arbitrary javascript code given to it.
// THIS IS PERMISSION LEVEL 10 FOR A REASON! It's perm level 10 because eval
// can be used to do **anything** on your machine, from stealing information to
// purging the hard drive. DO NOT LET ANYONE ELSE USE THIS
// However it's, like, super ultra useful for troubleshooting and doing stuff
// you don't want to put in a command.
const { inspect } = require("util");
const { post } = require("snekfetch");
const discord = require('discord.js')

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  var code = args.join(" ");
  const token = client.token.split("").join("[^]{0,2}");
  const rev = client.token.split("").reverse().join("[^]{0,2}");
  const filter = new RegExp(`${token}|${rev}`, "g");
  while (code.match("`")) {
    code = code.replace("`", "")
  }
  try {
    let output = eval(code);
    if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
    output = inspect(output, { depth: 0, maxArrayLength: null });
    output = output.replace(filter, "[TOKEN]");
    output = clean(output);
    if (output.length < 1750) {
      var embed = new discord.MessageEmbed()
      embed.setTitle("Code evaluated!")
      embed.setDescription(`\`\`\`js\n${output}\n\`\`\``);
      embed.setColor('GREEN')
      embed.setFooter("Good job!", message.author.avatarURL)
      embed.setTimestamp()
      message.channel.send({embed})
    } else {
      try {
        const { body } = await post("https://www.hastebin.com/documents").send(output);
        var embed = new discord.MessageEmbed()
        embed.setTitle("That's a large evaluation..")
        embed.setDescription(`The output was so long, it was uploaded to hastebin! https://www.hastebin.com/${body.key}.js`);
        embed.setColor(client.config.embedColors.good)
        embed.setFooter("Beep boop, that's cool!", message.author.avatarURL)
        embed.setTimestamp()
        message.channel.send({embed})
      } catch (error) {
        message.channel.send(`I tried to upload the output to hastebin, but encountered an error! ${error.name}: ${error.message}`);
      }
    }
  } catch (error) {
    if (error.stack.toString().length < 1750) {
      var embed = new discord.MessageEmbed()
      embed.setTitle("Fat error!")
      embed.setDescription(`The following error occured \`\`\`js\n${error.stack}\`\`\``);
      embed.setColor('RED')
      embed.setFooter("CRASH!", message.author.avatarURL)
      embed.setTimestamp()
      message.channel.send({embed})
    } else {
      const { body } = await post("https://www.hastebin.com/documents").send(error.stack.toString());
      var embed = new discord.MessageEmbed()
      embed.setTitle("Big error energy!")
      embed.setDescription(`The output was so long, it was uploaded to hastebin! https://www.hastebin.com/${body.key}.js`);
      embed.setColor('RED')
      embed.setFooter("CRASH!", message.author.avatarURL)
      embed.setTimestamp()
      message.channel.send({embed})
    }
  }
  function clean(text)  {
    return text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  }
};
exports.conf = {
  enabled: true,
  oderaOnly: true,
  aliases: ["run", "exec"],
  permLevel: "Megu"
};
exports.help = {
  name: "eval",
  category: "Owner",
  description: "Evaluates javascript code.",
  usage: "eval [...code]"
};

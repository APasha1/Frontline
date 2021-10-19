const discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  let commands = client.commands.array()
  let guild = message.guild
  let specifiedName = args[0]
  
  
  if (!specifiedName) {
    let names = {}

    function addCommandToList(command) {
      if (!command.conf.enabled) return;
      if (!names[command.help.category]) {
        names[command.help.category] = [
          command.help.name
        ]
      } else {
        names[command.help.category].push(command.help.name)
      }
    }

    for (let x in commands) {
      let cmd = commands[x]
      addCommandToList(cmd)
    }

    const embed = new discord.MessageEmbed()
    embed.setTitle("Command List")
    embed.setColor(client.config.embedColors.default)

    for (let y in names) {
      embed.addField(y, names[y].join(", "))
    }

    embed.setDescription(`Need more help on a specific command? Say **${client.config.prefix}help** for more information!`)
    message.channel.send({embed})
  } else {
    specifiedName = specifiedName.toLowerCase()
    let cmd = commands.find(a => a.help.name == specifiedName)
    if (cmd) {
      let cmdHelp = cmd.help
      let aliases = cmd.conf.aliases.join(", ")
      
      const embed = new discord.MessageEmbed()
      embed.setTitle(`Command - ${cmdHelp.name}`)
      embed.setDescription(`\`${cmdHelp.name}\` - ${cmdHelp.description}`)
      embed.setColor(client.config.embedColors.default)
      embed.addField("Category", cmdHelp.category)
      embed.addField("Usage", cmdHelp.usage)
      embed.addField("Aliases", aliases.length > 0 ? aliases : "None")
      
      message.channel.send({embed})
    } else {
      message.reply("sorry, I couldn't find that command!")
    }
  }
};

exports.conf = {
  enabled: true,
  oderaOnly: false,
  aliases: ["halp", "cmds", "commands"],
  permLevel: "User"
};

exports.help = {
  name: "help",
  category: "Info",
  description: "Get help on commands!",
  usage: "help <optional command name>"
};
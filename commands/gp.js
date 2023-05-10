const discord = require('discord.js')

exports.run = async (client, message, args, level) => { 

    let user = message.mentions.members.first() || await message.guild.members.fetch(args[0])
    let product = args[1];

    if(!args[0]){
      return message.channel.send("You know what you forgot.... The format is: giveproduct <user> <product> <key>")
    }
    if(!args[1]){
      return message.channel.send("You know what you forgot.... The format is: giveproduct <user> <product> <key>" + "\n\n" + "`Valid products:`" + "\n\n" + "`admin`" + "\n" + "`busstop`" + "\n" + "`autoranking`")
    }

    const arrylol = ["autoranking", "busstop", "admin", "sidemenu"]

      let lols = arrylol.includes(args[1])
      
    if(lols === false){
      return message.channel.send("Yo man? Please put a valid product.... The format is: giveproduct <user> <product> <key>" + "\n\n" + "`Valid products:`" + "\n\n" + "`admin`" + "\n" + "`busstop`" + "\n" + "`autoranking`")
        
      }

    
    if(!args[2]){
      return message.channel.send("Yo man? You know what you forgot.... The format is: giveproduct <user> <product> <key>");
    };
    if(product === "admin"){
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Odera Studios!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please dont redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed).catch(async err =>  {
          message.channel.send("Error: " + err)
        })
         user.send(client.config.products[product].link).catch(async err =>  {
          message.channel.send("Error: " + err)
        })

      message.channel.send("We dmed the user with all the information. :)")
    }

    if(product === "busstop"){

      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Odera Studios!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please dont redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed).catch(async err =>  {
          message.channel.send("Error: " + err)
        })
         user.send(client.config.products[product].link).catch(async err =>  {
          message.channel.send("Error: " + err)
        })
        message.channel.send("We dmed the user with all the information. :)")
    }

    if(product === "autoranking"){
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Odera Studios!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please dont redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed).catch(async err =>  {
          message.channel.send("Error: " + err)
        })
         user.send(client.config.products[product].link).catch(async err =>  {
          message.channel.send("Error: " + err)
        })
      message.channel.send("We dmed the user with all the information. :)")
    }
    if(product === "sidemenu"){
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Odera Studios!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please dont redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed).catch(async err =>  {
          message.channel.send("Error: " + err)
        })
         user.send(client.config.products[product].link).catch(async err =>  {
          message.channel.send("Error: " + err)
        })
      message.channel.send("We dmed the user with all the information. :)")
      
    }
  
}

exports.conf = {
  enabled: true,
  oderaOnly: false,
  aliases: ["giveproduct"],
  permLevel: "User"
};

exports.help = {
  name: "gp",
  category: "Staff",
  description: "Give the product files to an user..!",
  usage: "gp <user> <product name> <key>"
};

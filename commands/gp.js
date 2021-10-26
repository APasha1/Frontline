const discord = require('discord.js')

exports.run = async (client, message, args, level) => { 

  if(message.guild.id === "858428376233541633"){

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
      const lol = user.send(embed)
      const files = user.send({ files: ["./COPYRIGHT.txt"] })

      message.channel.send("We dmed the user with all the information. :)")
    }

    if(product === "busstop"){

      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Odera Studios!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please dont redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      const files = user.send({ files: ["./COPYRIGHT.txt", "./odera_bus_stop.rbxm"] })
      message.channel.send("We dmed the user with all the information. :)")
    }

    if(product === "autoranking"){
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Odera Studios!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please dont redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      const files = user.send({ files: ["./Autoranking.rbxl", "./COPYRIGHT.txt"] })

      message.channel.send("We dmed the user with all the information. :)")
    }
    if(product === "sidemenu"){
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Odera Studios!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please dont redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      const files = user.send({ files: ["./SideMenu.rbxl", "./COPYRIGHT.txt"] })

      message.channel.send("We dmed the user with all the information. :)")
      
    }
  
  } else if(message.guild.id === "896793514287972404"){
    
    
    
    console.log("GP command used in Asillian")
    
    
    let user = message.mentions.members.first() || await message.guild.members.fetch(args[0])
    let product = args[1];

    if(!args[0]){
      return message.channel.send("You know what you forgot.... The format is: giveproduct <user> <product> <key>")
}    
    
    const productList = [];
  for (let productName in client.config.products_Asilllian) {
    productList.push("`" + productName + "`")
  };
  let productListName = productList.join("\n")
    
      
      if (!client.config.products_Asilllian[product]) return message.channel.send(`${client.config.emotes.deny} Please provide a valid **product** to bind this key to. You can provide these:\n\n` + productListName);
  
    
    if(product === "scpbundle"){
  
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Asilllian!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please don't redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      user.send("https://cdn.discordapp.com/attachments/901649740163350528/901650420752068608/SCPBundle.rbxm")
      message.channel.send("We sent the information to the user...")
      
    }else if(product === "ranktagv2"){
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Asilllian!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please don't redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      user.send("https://cdn.discordapp.com/attachments/901649740163350528/901649884095082596/RankTagsV2.rbxm") 
      message.channel.send("We sent the information to the user...")
      
    }else if(product === "playerslistleaderboard"){
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Asilllian!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please don't redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      user.send("https://cdn.discordapp.com/attachments/901649740163350528/901650040056062042/Playerslist_Leaderboard.rbxm")
      message.channel.send("We sent the information to the user...")
      
    }else if(product === "simplemenugui"){
      
      
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Asilllian!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please don't redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      user.send("https://cdn.discordapp.com/attachments/901649740163350528/901650585751785502/Simple_Menu_Gui.rbxm") //https://cdn.glitch.me/54cf5c37-5d60-47a3-8ef6-af120b8b8c84%2FRankTagsV2.rbxm?v=1635040867979
      message.channel.send("We sent the information to the user...")
      
    }else if(product === "shopgui"){
      
      
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Asilllian!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please don't redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      user.send("https://cdn.discordapp.com/attachments/901649740163350528/901650312757137430/ShopGui.rbxm") //https://cdn.glitch.me/54cf5c37-5d60-47a3-8ef6-af120b8b8c84%2FRankTagsV2.rbxm?v=1635040867979
      message.channel.send("We sent the information to the user...")
    }else if(product === "announcementssystem"){
      
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Asilllian!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please don't redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      user.send("https://cdn.discordapp.com/attachments/901649740163350528/901649773348659220/Announcement_GUI.rbxm") //https://cdn.glitch.me/54cf5c37-5d60-47a3-8ef6-af120b8b8c84%2FRankTagsV2.rbxm?v=1635040867979
      message.channel.send("We sent the information to the user...")
    }else if(product === "ranktagv1"){

      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from Asilllian!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please don't redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      user.send("https://cdn.discordapp.com/attachments/901649740163350528/901650193395642419/RanktagV1.rbxm") //https://cdn.glitch.me/54cf5c37-5d60-47a3-8ef6-af120b8b8c84%2FRankTagsV2.rbxm?v=1635040867979
      message.channel.send("We sent the information to the user...")
      
    }
    
    
    
  } else if(message.guild.id === "NO"){
    console.log("GP command used in STUDIOS NAME")
    let user = message.mentions.members.first() || await message.guild.members.fetch(args[0])
    let product = args[1];

    if(!args[0]){
      return message.channel.send("You know what you forgot.... The format is: giveproduct <user> <product> <key>")
    }
    if(!args[1]){
      return message.channel.send("You know what you forgot.... The format is: giveproduct <user> <product> <key>" + "\n\n" + "`Valid products:`" + "\n\n" + "`admin`" + "\n" + "`busstop`" + "\n" + "`autoranking`")
    }

    const arrylol = ["productname"]
    const productList = [];
  for (let productName in client.config.products_studios) {
    productList.push("`" + productName + "`")
  };
    
      let lols = arrylol.includes(args[1])
      
      if (!client.config.products_studios[product]) return message.channel.send(`${client.config.emotes.deny} Please provide a valid **product** to bind this key to. You can provide these:\n\n` + productList);
  
    
    if(product === "productname"){
  
      const embed = new discord.MessageEmbed()
      .setTitle("Thanks for purchasing from {studiosnmae}!")
      .setDescription("> Here is your whitelist key:" + args[2] + "\n\n **Please don't redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
      .setColor("GREEN")
      const lol = user.send(embed)
      user.send("Files: N/A")
      message.channel.send("We sent the information to the user...")
    }
    
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
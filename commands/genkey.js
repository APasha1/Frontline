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

exports.run = async (client, message, args, level) => {// eslint-disable-line no-unused-vars
  let memberToBindTo = message.mentions.members.first()
  let product = args[1]
  let productsToList = []
  
    
  for (let productName in client.config.products) {
    productsToList.push("`" + productName + "`")
  }
  
  let productList = productsToList.join("\n")
  if (!memberToBindTo) return message.channel.send(`${client.config.emotes.deny} Please provide a user to generate a key for.`)
  if (!client.config.products[product]) return message.channel.send(`${client.config.emotes.deny} Please provide a valid **product** to bind this key to. You can provide these:\n\n` + productList)
  
  let properName = client.config.products[product].name
  let newKey = genID() 
  let keyToUserFormat = {
    user: memberToBindTo.id,
    allowedIds: {},
    product: product
  }
  client.setData(newKey, keyToUserFormat)
    
  const embed = new discord.MessageEmbed()
  .setTitle("Thanks for purchasing from Odera Studios!")
  .setDescription("> Here is your whitelist key: " + newKey + "\n\n **Please dont redistribute/resell/leak this product as it will result in a DMCA/amongst a removal of your key leaving your product useless.** \n\n > To whitelist your group run o!whitelist (Your key) add (group/userID) or run o!help [category] to understand how to perform a bot action \n\n > You are able to run these commands on bot or on server (Except o!keyinfo (server only)) \n\n > You can find the file of the product on the channels, you've been given access on server \n\n *DM Support with any issues or on the bug/support channel you've been given with your product* \n\n**Have a great day!**")
  .setColor("GREEN")
  
    
  memberToBindTo.send({ embed }).catch(async err =>  {
    message.channel.send("Error: " + err)
  })
  memberToBindTo.send(client.config.products[product].link).catch(async err =>  {
    message.channel.send("Error: " + err)
  })
  message.channel.send(client.config.emotes.accept + " Alright, generated a key for **" + memberToBindTo.user.tag + `**.\nThis will allow them to use ${properName} for **one** group.\nPlease give them this key: **${newKey}**`)
  
// fedee, I am your father
  
  
  
};

exports.conf = {
  enabled: true,
  oderaOnly: true,
  aliases: [],
  permLevel: "Staff"
};

exports.help = {
  name: "genkey",
  category: "Staff",
  description: "Generates a standard key for a user.",
  usage: "genkey [user] [product]"
};

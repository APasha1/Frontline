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
  
  
  if(message.guild.id === "858428376233541633"){
  
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
  message.channel.send(client.config.emotes.accept + " Alright, generated a key for **" + memberToBindTo.user.tag + `**.\nThis will allow them to use ${properName} for **one** group.\nPlease give them this key: **${newKey}**`)
  
  
  } else if(message.guild.id === "875553369266204702"){

  for (let productName in client.config.products_ghostly) {
    productsToList.push("`" + productName + "`")
  }
  
  let productList = productsToList.join("\n");
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
  message.channel.send(client.config.emotes.accept + " Alright, generated a key for **" + memberToBindTo.user.tag + `**.\nThis will allow them to use ${properName} for **one** group.\nPlease give them this key: **${newKey}**`)

  } else if(message.guild.id === "no"){
    
  }
  
  
  
};

exports.conf = {
  enabled: true,
  oderaOnly: false,
  aliases: [],
  permLevel: "Staff"
};

exports.help = {
  name: "genkey",
  category: "Staff",
  description: "Generates a standard key for a user.",
  usage: "genkey [user] [product]"
};
const discord = require("discord.js");
const roblox = require("noblox");
const fetch = require("node-fetch");

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars 
      const check = fetch('https://v3.blox.link/developer/discord/' + message.author.id + (message.guild ? "?guildId=" + message.guild.id : ''), {
      headers: { "api-key": "903afa40-f829-4c71-babd-c32d32151aef" } })
        .then(res => res.json())
        .then(json => {
          const userid = json.user.primaryAccount;

          console.log(userid); //UserId do be undefined

          const rank = roblox.getRankInGroup("11492884", userid).then(rank => {
            if (!json.error) {
              console.log(rank);

              if (rank === 0) {
                const embed = new discord.MessageEmbed()
                  .setTitle("Error")
                  .setDescription("Permission error: USER_NOT_IN_GROUP")
                  .setColor("RED");
                return message.channel.send(embed);
                return false;
              }
            } else {
              return message.channel.send(                          
      
                "You are not verified with BloxLink, please run `!verify`"
              );
            };
          
        

  
  
  let productKey = args[0];
  let action = args[1];
  let targetId = Number(args[2]);

  let maxSlotCount = 1;


  client.getData(productKey).then(keyData => {

      if (keyData.user == message.author.id) {
        if (action == "add") {
          let count = Object.keys(keyData.allowedIds).length;
          if (count > 0)
            return message.channel.send(
              client.config.emotes.deny +
                " Sorry, you have already hit the maximum amount of whitelisted IDs for this key."
            );
          if (isNaN(targetId))
            message.channel.send(
              client.config.emotes.deny + " This ID is invalid."
            );
          roblox
            .getGroup(targetId)
            .then(result => {
              message.channel.send(
                `${client.config.emotes.accept} Alright, I've added **${result.name}** to your whitelist. Any game under this group will be whitelisted.`
              );
              keyData.allowedIds[args[2]] = true;
              client.setData(productKey, keyData);
            })
            .catch(err => {
              roblox
                .getPlayerInfo(targetId)
                .then(result => {
                  message.channel.send(
                    `${client.config.emotes.accept} Alright, I've added **$@${result.username}** to your whitelist. Any game under this user's profile will be whitelisted.`
                  );
                  keyData.allowedIds[args[2]] = true;
                  client.setData(productKey, keyData);
                })
                .catch(err => {
                  message.channel.send(
                    client.config.emotes.deny +
                      " The ID provided was invalid. Please provide a valid **User ID or Group ID.**"
                  );
                });
            });
        } else if (action == "remove") {
          if (keyData.allowedIds[args[2]]) {
            delete keyData.allowedIds[args[2]];
            client.setData(productKey, keyData);
            message.channel.send(
              `${client.config.emotes.accept} That ID was removed from your whitelist.`
            );
          } else {
            message.channel.send(
              client.config.emotes.deny +
                "This ID was not found in your whitelist."
            );
          }
        } else {
          message.channel.send(
            client.config.emotes.deny +
              " Invalid action. Please provide **add** or **remove** to add or remove an ID to your whitelist."
          );
        }
      } else {
        message.channel.send(
          client.config.emotes.deny +
            " You do not have permission to edit the whitelisting for this key."
        );
      }
    })
    .catch(err => {
      message.channel.send(
        client.config.emotes.deny +
          " This key does not exist in the database. Please make sure you've spelt it correctly."
      );
    });
            
          });
        });
    

};

exports.conf = {
  enabled: true,
  oderaOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "whitelist",
  category: "Main",
  description: "Add or remove an ID to your whitelist",
  usage: "whitelist [product key] [add/remove] [group/user id]"
};

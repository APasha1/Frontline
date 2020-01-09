var botConfig = {
  /*
    If you don't know how to grab an ID, please google it.
    
    logRanks: "true" means the bot will attempt to log its rankups, "false" means it won't.
    logChannel: the channel ID of the channel the bot will log to if logRanks is "true"
    groupRankBinds: a list of group binds. the format is:
    
    [GAMEPASS_ID, DISCORD ROLE ID, ROBLOX GROUP ROLE NAME]
  */
  
  logRanks: false,
  logChannel: "",
  groupRankBinds: {
    // [1111, <some_role_id>, Trainee]
    []
  }
}



/*
  DON'T MESS WITH THIS UNLESS YOU KNOW WHAT YOU'RE DOING
*/

var perms = {
  // Return pass, permLevel, role
  User: () => {
    return [true, 1, "User"]
  },
  Staff: (user) => {
    return [user.roles.find(x => x.name.toLowerCase() == 'staff'), 10, "Staff"]
  },
  Owner: (user) => {
    return (user.guild.owner.id == user.id, 20, "Owner")
  },
  Megu: (user) => {
    return [user.id == "240639333567168512", 999, "Megu"]
  }
}

var ranks = {
  User: {
    rankLevel: 1
  },
  Staff: {
    rankLevel: 10
  },
  Megu: {
    rankLevel: 999
  }
}

var config = {
  prefix: "r!",
  ownerId: "240639333567168512",
  masterServer: "501860458626547721",
  
  embedColors: {
    default: "#f97575",
    good: "GREEN",
    moderate: "ORANGE",
    notice: [255, 255, 0],
    bad: "RED"
  },
  
  
  getPermLevel: (user) => {
    let highest = 0
    let roleRank = 1
    let roleName = "User"
    for (let x in perms) {
      let func = perms[x]
      let info = func(user)
      if (info[0] && info[1] > highest) {
        highest = info[1]
        roleRank = info[1]
        roleName = info[2]
      }
    }
    return {roleRank, roleName}
  },
  getRole: (role) => {
    return ranks[role]
  },
  ranks: ranks
}


module.exports = config;
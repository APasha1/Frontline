var botConfig = {
  /*
    If you don't know how to grab an ID, please google it.
    
    logRanks: "true" means the bot will attempt to log its rankups, "false" means it won't.
    logChannel: the channel ID of the channel the bot will log to if logRanks is "true"
    httpAuth: **IMPORTANT** please set this to some key nobody else can find
    groupRankBinds: a list of group binds. the format is:
    
    [GAMEPASS_ID, ROBLOX GROUP ROLE NAME]
  */
  
  logRanks: false,
  logChannel: "",
  httpAuth: "2iC9mVseo@N%@J1iq#FGG3",
  groupRankBinds: [
    // [1111, Trainee]
    [7964756, "[A] Agent"],
    [7964757, "[IO] Intelligence Agent"],
    [7964759, "[BSA] Base Security Agent"],
    [7964788, "[TO] Tactical Operations"],
    [7964769, "[AO] Analytics Operative"],
    [7964771, "[I] Instructors"],
    [7964775, "[OS] Operations Supervisors"],
    [7964776, "[OC] Operations Chiefs"],
    [7964780, "[COS] Chief Of Staff"],
    [7964782, "[BRD] Board"],
    [7964783, "[CRP] Chairperson"],
  ]
}



/*
  DON'T MESS WITH BELOW UNLESS YOU KNOW WHAT YOU'RE DOING
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
  prefix: "megu!",
  ownerId: "240639333567168512", // feel free to replace with your own id
  masterServer: "",
  
  embedColors: {
    default: "#00ccff",
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
  ranks: ranks,
  groupBindConfig: botConfig
}


module.exports = config;
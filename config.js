var botConfig = { 
  
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
    return [user.roles.cache.find(x => x.name.toLowerCase() == 'bot access'), 10, "Staff"]
  },
  Megu: (user) => {
    return [user.id == "240639333567168512" || "510156827917287484" || "852974577877123092", 999, "Megu"]
  }
}

var ranks = {
  User: {
    rankLevel: 1
  },
  Staff: {
    rankLevel: 10
  },
  Owner: {
    rankLvel: 20
  },
  Megu: {
    rankLevel: 999
  }
}

var config = {
  prefix: "o!",
  ownerId: "240639333567168512",
  
  // productName: id
  products_Asilllian: {
  scpbundle: {name: "Asilllian - SCP Bundle"}, 
  playerslistleaderboard: {name: "Asilllian - Players List Leaderboard"},
  ranktagv2: {name: "Asilllian - Rank Tag V2"},
  simplemenugui: {name: "Asilllian - Simple Menu GUI"},
  shopgui: {name: "Asilllian - Shop GUI"},
  announcementssystem: {name: "Asilllian - Announcements System"},
  ranktagv1: {name: "Asilllian - Rank Tag V1"}
  },
  
  products_ghostly: {
    productnamehere: { name: "producthere" },
  },
  
  products: {
    autoranking: {name: "Odera - Autoranking"},
    admin: {name: "Odera - Admin Basics"},
    busstop: {name: "Odera - Bus Stop System"},
    sidemenu: {name: "Odera - Side Menu"} 
  },
  
  
  
  embedColors: {
    default: "#00ccff",
    good: "GREEN",
    moderate: "ORANGE",
    notice: [255, 255, 0],
    bad: "RED"
  },
  
  emotes: {
    accept: "<a:accepted:900147426470539295>", //what are u doing noob shush
    deny: "<a:denied:900148639639408700>",
    maybe: "<a:maybe:868335596567928842>",
    loading: "<a:loading:868335596362399784>",
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
  botInfo: botConfig
}


module.exports = config;
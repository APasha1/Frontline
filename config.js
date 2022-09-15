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
    return [user.id == "269256731672969216", 999, "Skyptx"]
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
  ownerId: "269256731672969216",
  
  // productName: id
  products_Asilllian: { // -- Cancel this when possible
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
    autoranking: {name: "Odera - Autoranking", link: "https://odera.fede.center/Autoranking.rbxl" },
    admin: {name: "Odera - Admin Basics", link: ""},
    busstop: {name: "Odera - Bus Stop System", link: "https://odera.fede.center/OD_Busstop.rbxm"},
    sidemenu: {name: "Odera - Side Menu", link: "https://odera.fede.center/SideGUI.rbxl"},
    hostingassistant: {name: "Odera - Hosting Assistant", link: ""}
  },
  
  
  
  embedColors: {
    default: "#00ccff",
    good: "GREEN",
    moderate: "ORANGE",
    notice: [255, 255, 0],
    bad: "RED"
  },
  
  emotes: {
    accept: "<a:accepted:943283233687224421>", //what are u doing noob shush
    deny: "<a:denied:943283233985032275>",
    maybe: "<a:maybe:943283234001809448>",
    loading: "<a:loading:943283233234255992>",
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
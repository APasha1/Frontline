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


  products: {
    easierNameHere: {name: "Full Name", link: "https://download.com/link" },
    admin: {name: "Odera - Admin Basics", link: "https://odera.fede.center/Admin.rbxl"},

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

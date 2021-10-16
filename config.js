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
    return [user.roles.cache.find(x => x.name.toLowerCase() == 'support department'), 10, "Staff"]
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
  prefix: "o!",
  ownerId: "240639333567168512",
  
  // productName: id
  products: {
    autoranking: {name: "Odera Autoranking"},
    admin: {name: "Odera Admin Basics"},
    busstop: {name: "Odera Bus Stop System"},
    sidemenu: {name: "Side-Menu"} 
  },
  
  
  
  embedColors: {
    default: "#00ccff",
    good: "GREEN",
    moderate: "ORANGE",
    notice: [255, 255, 0],
    bad: "RED"
  },
  
  emotes: {
    accept: "<a:accepted:868335596165271603>",
    deny: "<a:denied:868335596299497483>",
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
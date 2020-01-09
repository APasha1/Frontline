



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
}


module.exports = config;
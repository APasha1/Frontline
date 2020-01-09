module.exports = (client) => {
  client.loadCommand = (name) => {
    try {
      const props = require(`../commands/${name}`);
      if (props.init) {
        props.init(client);
      }
      
      if (client.commands) {
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
          client.aliases.set(alias, props.help.name);
        });
        console.log(`Command ${name} was loaded!`)
      }
      return false;
    } catch(e) {
      if (e) {
        return `Couldn't load command ${name} due to: ${e}`
      }    
    }
  }
}
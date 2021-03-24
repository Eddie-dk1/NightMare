const Discord = require('discord.js');
const  superagent= require ('superagent');

module.exports.run = async (bot, message) => {
    
  const {body} = await superagent
    .get ('https://random.dog/woof.json');

  const dogembed = new Discord.RichEmbed()
    .setColor('#f48c42')
    .setTitle(':dog: Woof!')
    .setImage(body.url);

  message.channel.send(dogembed);
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'Standard User'
};
  
module.exports.help = {
  name: 'dog',
};
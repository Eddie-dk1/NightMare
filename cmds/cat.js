const Discord = require('discord.js');
const  superagent= require ('superagent');
module.exports.run = async (bot, message) => {
  const msg = await message.channel.send('Loading...');
    
  const {body} = await superagent
    .get('http://aws.random.cat/meow');
  const catembed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(':cat: Meow')
    .setImage(body.file);
  msg.edit(catembed);
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'Standard User'
};
  
module.exports.help = {
  name: 'cat',
};
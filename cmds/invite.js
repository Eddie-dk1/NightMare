const Discord = require('discord.js');
exports.run = (bot, message) => {
  
  const embed = new Discord.RichEmbed();
  embed.setTitle('Приглашение бота на сервер');
  embed.addField('Ссылка на приглашение', 'https://discord.com/api/oauth2/authorize?client_id=754435861881290794&permissions=8&scope=bot', true);
  embed.setTimestamp();
  embed.setFooter(bot.user.username, bot.user.avatarURL);
  message.member.user.createDM().then(channel => channel.send(embed));
  
  const em1 = new Discord.RichEmbed()
    .setColor(message.member.displayColor)
    .setDescription('Ссылка на приглашение бота был отправлен вам в ЛС!')
    .setTimestamp()
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(em1);
};




  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['get', 'join'],
  permLevel: 'Standard User'
};
  
exports.help = {
  name: 'invite',
};
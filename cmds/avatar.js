const discord = require('discord.js');
const fs = require('fs')
const { bot, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var user = message.mentions.users.first();
if (!message.mentions.users.size) {
    let avatarembed = new discord.RichEmbed()
        .setAuthor(`Аватар`, message.author.avatarURL)
        .setImage(message.author.avatarURL, true)
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setTimestamp()
        .setColor("RANDOM");
    message.delete();
    message.channel.send(avatarembed);
    } else {
        let avatarembed2 = new discord.RichEmbed()
        .setAuthor(`Аватар` , user.avatarURL)
        .setImage(user.avatarURL, true)
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setTimestamp()
        .setColor("RANDOM");
    message.delete();
    message.channel.send(avatarembed2);
    }
}

module.exports.help = {
  name: 'avatar',
};
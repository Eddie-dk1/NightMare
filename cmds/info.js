const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация об боте")
    .setColor('#e800d5')
    .addField("Код бота создан при помощи", "Discord.js")
    .addField("Узнать команды NightMare", "..help")
    .addField("Версия NightMare", "3.1.1")
    .addField("Создатель бота","Guka#7138")
    .addField(" ОС:", "Windows")
    .setFooter("By Guka | NightMare", bot.user.avatarURL)
    bot.send(embed);

};
module.exports.help = {
    name: "info"
};
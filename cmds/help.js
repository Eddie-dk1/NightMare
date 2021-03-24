const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(`NightMare`, bot.user.avatar.URL)
    .setDescription("Помощь")
    .setColor('#e800d5')
    .addField("..help","Помощь по командам")
    .addField("..ban","Бан пользователя ")
    .addField("..clear","Очистка чата")
    .addField("..8ball","Ванга гадает")
    .addField("..cat","Котики")
    .addField("..dog","Собачки")
    .addField("..joke","Шутка")
    .addField("..avatar","Аватар")
    .addField("..botversion","Версия бота")
    .addField("..userinfo","Информация об пользователе")
    .addField("..roleinfo","Информация о роли")
    .addField("..serverinfo","Информация об сервере")
    .addField("..invite","Приглашение бота на сервер")
    .addField("..kick","Кик пользователя")
    .addField("..mute","Мут пользователя")
    .addField("..ping", "Проверка бота")
    .addField("..say", "Бот скажет то что введёте")
    .addField("..unmute","Размут пользователя" )
    .addField("..unwarn", "Снять варн")
    .addField("..warn", "Выдать варн")
    .addField("..info", "Информация")
    .addField("..vmhelp","Информация по модулю VimeApi(В Разработке)")
    .setFooter("By Guka | NightMare" ,"bot.user.avatar.URL")
    bot.send(embed);

};
module.exports.help = {
    name: "help"
};
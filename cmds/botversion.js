const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('**Версия бота NightMare - 3.1.1**');
};
module.exports.help = {
    name: "botversion"
};
const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

          try {
        let embed = new Discord.RichEmbed()
            .setDescription(`Информация сервера`)
            .setColor('#10c7e2')
            .addField(`Онлайн`,message.guild.members.filter(x=>x.user.presence.status === 'online').size,true)
            .addField(`Афк`, message.guild.members.filter(x=>x.user.presence.status === 'idle').size, true)
            .addField(`Не беспокоить`, message.guild.members.filter(x=>x.user.presence.status === 'dnd').size, true )
            .addField(`Не в сети`, message.guild.members.filter(x=>x.user.presence.status === 'offline').size, true )
            .addField('Владелец сервера', message.guild.owner, true)
            .addField('Эмодзи сервера',message.guild.emojis.map((e) => e.toString()).slice(0, 30).join(' ') || 'Нет')
            .addField('Роли сервера',message.guild.roles.map((r) => r.toString().trim()).slice(0, 30).join(' ') || 'Нет' )
            .setThumbnail(message.guild.iconURL)
            .setFooter("By Guka | NightMare", bot.user.avatarURL)

        bot.send(embed);
    } catch (err) {
        let bk = require('../botconfig.json');
        let a = bot.users.get(bk.admin)
        let errEmb = new Discord.RichEmbed()
            .setTitle(`${err[0]}`)
            .setColor('#ff2400')
            .addField(`**${err.name}**`, `**${err.message}**`)
            .setFooter(`${err[1]} ${a.tag}`, bot.user.avatarURL)
            .setTimestamp();
        bot.send(errEmb);
        console.log(err.stack);
    }

};
module.exports.help = {
    name: "serverinfo",
    aliases: ["sinfo", 'серверинфо', 'синфо']
};
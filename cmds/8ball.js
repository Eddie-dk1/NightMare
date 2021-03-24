const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if (!args[0]) return message.reply(" а где вопрос?");
    let replies = ["Да", "Нет", "Ну, не знаю", "Сейчас не могу дать точного ответа", "Что за тупые вопросы?"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
    if(!question.includes('?')) return message.reply(' а где вопросительный знак?')
  
    if(question === "У меня есть смысл жить?") replies[result] = 'Нет, умри нахуй'
    if(question === "Где смотреть аниме?") replies[result] = 'Только на pornhub.com!' 
    if(question === "8ball") replies[result] = '???????'
    if(question === "Когда будет война?") replies[result] = 'В 2023 году'
    if(question === "Из-за чего пиздец?") replies[result] = 'Из-за Зефирки'


    let e = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Вопрос:", question)
        .addField("Ответ:", replies[result]);

    message.channel.send(e);
}
module.exports.help = {
  name: "8ball",
      aliases: ["ванга"]

}
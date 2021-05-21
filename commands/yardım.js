const Discord = require('discord.js')
const db = require('quick.db')
const dens = require('../densconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(dens.prefix))return;   


    let embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic: true}))
    .setTitle(`Para Adam Yardım Listesi [Prefix ${dens.prefix}`)
    .addField("Ekonomi Komutları", "`çalış` `dilen` `transfer` `bakiye` `hesap` `çekme` `yatırma` `günlük` `haftalık` `market` `satınal` `sat`")
    .addField("Kumar Komutları", "`rulet` `slot`")
    .setFooter(dens.altYazi)
    .setColor("#FFFFFF")
    message.channel.send(embed)




}

module.exports.help = {
  name:"yardım",
  aliases: ["y"]
}
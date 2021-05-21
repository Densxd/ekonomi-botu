const Discord = require('discord.js')
const db = require('quick.db')
const dens = require('../densconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(dens.prefix))return;  


    let embed = new Discord.MessageEmbed()
    .setDescription(`
    **Richer Rolu: \`${dens.satınalFiyat.vip}\` ${dens.paraBirimi} [${dens.prefix}satınal richer]**
    **Hayat Stili**
    **Tertemiz Nike: \`${dens.satınalFiyat.nike}\` ${dens.paraBirimi} [${dens.prefix}satınal nike]
    Araba: \`${dens.satınalFiyat.araba}\` ${dens.paraBirimi} [${dens.prefix}satınal araba]
    Ev: \`${dens.satınalFiyat.ev}\` ${dens.paraBirimi} [${dens.prefix}satınal ev]**`)
    .setColor("#FFFFFF")
    .setTitle(message.author.tag)
    .setFooter(dens.altYazi)
    message.channel.send(embed)




}


module.exports.help = {
  name:"market",
  aliases: ["Market"]
}
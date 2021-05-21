const Discord = require('discord.js')
const db = require('quick.db')
const denzia = require('../denziroller.json')
const dens = require('../densconfig.json')
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(dens.prefix))return;   

    let user = message.author;

    let author = db.fetch(`para_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setTitle(message.author.tag)
    .setFooter(dens.altyazi)
    .setDescription(`**VIP Rolünü almak için \`${dens.satınalFiyat.vip}\` ${dens.paraBirimi} gerekiyor.**`);
    if (args[0] == 'vip') {
        if (author < dens.satınalFiyat.vip) return message.channel.send(Embed)
        
        db.fetch(`vip_${message.guild.id}_${user.id}`);
        db.set(`vip_${message.guild.id}_${user.id}`, true)

        let Embed2 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(dens.altyazi)
        .setDescription(`**Başarılı bir şekilde \`${dens.satınalFiyat.vip}\` ${dens.paraBirimi}'ye Richer Rolünü satın aldın!**`);

        db.subtract(`para_${message.guild.id}_${user.id}`, dens.satınalFiyat.vip)
        message.channel.send(Embed2)
        message.member.roles.add(denzia.richer)
        
    } else if(args[0] == 'nike') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(dens.altyazi)
        .setDescription(`**Nike ayakkabısını almak için \`${dens.satınalFiyat.nike}\` ${dens.paraBirimi}'ye Ihtiyacın var.**`);

        if (author < dens.satınalFiyat.nike) return message.channel.send(Embed2)
       
        db.fetch(`nike_${message.guild.id}_${user.id}`)
        db.add(`nike_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(dens.altyazi)
        .setDescription(`**Terrr Temiz Nike ayakkabısı satın aldın hayırlı olsun brom**`);

        db.subtract(`para_${message.guild.id}_${user.id}`, dens.satınalFiyat.nike)
        message.channel.send(Embed3)
    } else if(args[0] == 'araba') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(dens.altyazi)
        .setDescription(`**Araba almak için \`${dens.satınalFiyat.araba}\` ${dens.paraBirimi}'ye ihtiyacın var.**`);

        if (author < dens.satınalFiyat.araba) return message.channel.send(Embed2)
       
        db.fetch(`araba_${message.guild.id}_${user.id}`)
        db.add(`araba_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(dens.altyazi)
        .setDescription(`**Başarıyla bir araba sahibi oldun hayırlı olsun!**`);

        db.subtract(`para_${message.guild.id}_${user.id}`, dens.satınalFiyat.araba)
        message.channel.send(Embed3)
    } else if(args[0] == 'ev') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(dens.altyazi)
        .setDescription(`**Ev almak için \`${dens.satınalFiyat.ev}\` ${dens.paraBirimi}'ye ihtiyacın var.**`);

        if (author < dens.satınalFiyat.ev) return message.channel.send(Embed2)
       
        db.fetch(`ev_${message.guild.id}_${user.id}`)
        db.add(`ev_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setTitle(message.author.tag)
        .setColor("#0x7289UA")
        .setFooter(dens.altyazi)
        .setDescription(`**Başarlı bir şekilde kulübe satın aldın hayırlı olsun it.**`);
        db.subtract(`para_${message.guild.id}_${user.id}`, dens.satınalFiyat.ev)
        message.channel.send(Embed3)
    } else {
        let embed3 = new Discord.MessageEmbed()
        .setColor("#0x7289UA")
        .setTitle(message.author.tag)
        .setFooter(dens.altyazi)
        .setDescription(`**Herhangi bir item'in adını yaz Almak istediğinin Örnek: \`${dens.prefix}satınal ev\`**`)
        message.channel.send(embed3)
    }

}
  
  module.exports.help = {
    name:"satinal",
    aliases: ["satınal"]
  }
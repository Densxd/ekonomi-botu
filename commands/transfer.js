const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms");
const dens = require('../densconfig.json')
module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith(dens.prefix))return;   

  let user = message.mentions.members.first() 

  let member = db.fetch(`para_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setFooter(dens.altyazi)
  .setDescription(`**Birini etiketlemelisin ki para yollayabilesin.**`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setFooter(dens.altyazi)
  .setDescription(`**Belirli bir miktar girmen gerek. Örnek: \`${dens.prefix}transfer @dens 1000\`**`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setFooter(dens.altyazi)
  .setDescription(`**Eksi para yollayamazsın botumu bozucan ibne.**`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setFooter(dens.altyazi)
  .setDescription(`**Yeterli bakiyen bulunmuyor.**`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setFooter(dens.altyazi)
  .setDescription(`**Başarlı bir şekilde bu Kullanıcıya ${user.user.username} \`${args[1]}\` ${dens.paraBirimi} yolladın**`);

  message.channel.send(embed5)
  db.add(`para_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`para_${message.guild.id}_${message.author.id}`, args[1])

}

module.exports.help = {
  name:"transfer",
  aliases: ["parayolla"]
}
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Neyi Duyuruya koyayım.');
  message.delete();
  const ozelmesajkontrol = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(mesaj);
  message.channel.sendEmbed(ozelmesajkontrol) };


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru'],
  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Duyuru yapar',
  usage: 'duyuru [yazdırmak istediğiniz şey]'
};

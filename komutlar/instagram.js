const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
 const instagram = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('instagram hesabımız https://www.instagram.com/gamerozzicom/ ');
    return message.author.sendEmbed(instagram)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s'],
  permLevel: 0
};

exports.help = {
  name: 'instagram',
  description: 'instagram hesabımız',
  usage: 'instagram'
};

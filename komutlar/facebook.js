const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
 const facebook = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('yakunda cnm :smile:');
    return message.author.sendEmbed(facebook)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s'],
  permLevel: 0
};

exports.help = {
  name: 'facebook',
  description: 'facebook hesabımız',
  usage: 'facebook'
};

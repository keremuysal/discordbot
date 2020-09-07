const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
 const davet = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('şu anlık davet almıyorum ama istersen bize bildir :D https://discord.gg/UHbw7Wf');
    return message.author.sendEmbed(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'davet kodu',
  usage: 'davet'
};

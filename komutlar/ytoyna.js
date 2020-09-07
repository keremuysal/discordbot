const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['Yazı','Tura'];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yt','yazitura'],
  permLevel: 0
};

exports.help = {
  name: 'ytoyna',
  description: 'Yazı Tura Oyna!!',
  usage: 'ytoyna'
};

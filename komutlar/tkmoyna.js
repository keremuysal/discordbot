const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['Taş','Kağıt','Makas'];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tkm','taşkağıtmakas'],
  permLevel: 0
};

exports.help = {
  name: 'tkmoyna',
  description: 'Taş Kağıt Makas Oyna!!',
  usage: 'tkmoyna'
};

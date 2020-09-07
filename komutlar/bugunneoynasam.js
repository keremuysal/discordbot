const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['CS:GO oynayabilirsin','PUBG oynayabilirsin','LOL oynayabilirsin','MİNECRAFT oynayabilirsin','DIŞARI ÇIK BENCE','GTA V oynayabilirsin','DOTA 2 oynayabilirsin','Tom Clancys Rainbow Six: Siege oynayabilirsin','They-Are-Billions oynayabilirsin','FORNİTE oynayabilirsin','OVERWATCH oynayabilirsin','Euro Truck Simulator 2 oynayabilirsin','Hearthstone oynayabilirsin','THE LONG DARK oynayabilirsin','Rocket League oynayabilirsin','ZULA OLABİLİR HEMDE TÜRK YAPIMI','Biraz eskiden ama WOLFTEAM oynayabilirsin'];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bgno','bugunneoynasam'],
  permLevel: 0
};

exports.help = {
  name: 'bugunneoynasam',
  description: 'Acaba bu gün ne oyun oynamalısınız',
  usage: 'bugunneoynasam'
};

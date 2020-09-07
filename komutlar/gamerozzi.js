const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("**Gamerozzi**")
        .setImage("https://www.gamerozzi.com/wp-content/uploads/2020/01/logo.jpg")
        .setThumbnail("https://www.gamerozzi.com/wp-content/uploads/2020/01/logo.jpg")
        .setColor(0x00AE86)
        .addField("Lakabı", "Gamerozzi", true)
        .addField("Hakkımızda", `
        Gamerozzi, Türkiye’de ve dünyada oynanan espor maçlarını,sonuçlarını, haberlerini takip edebileceğiniz, favori takım ve oyuncularınızın detaylı maç istatistiklerine ulaşıp, maçlarının özetlerini izleyebileceğiniz ve sevdiğiniz oyunlarda daha iyi olmanıza yardımcı olacak araçları içerisinde barındıran bir espor platformudur.
   `, true)
   .addField("İletişim", `info@gamerozzi.com`, true)


   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'gamerozzi',
  description: 'Gamerozzi hakkında bilgi verir',
  usage: 'gamerozzi'
};

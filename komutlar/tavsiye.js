const Discord = require('discord.js');

exports.run = (client, message, args) => {

   let type = args.slice(0).join(' ');
       if (type.length < 1) return message.reply('<:pencil:365528941194248193> Tavsiye İçin Birşey Girmelisin.');

   message.delete();

   message.reply(" Tavsiye Başarılı Bir şekilde Gönderildi");

   client.channels.get("722015000205459560").sendMessage(type);

};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['tavsiye'],
 permLevel: 0
};

exports.help = {
 name: 'tavsiye',
 description: 'Tavsiye verir',
 usage: 'tavsiye'
};

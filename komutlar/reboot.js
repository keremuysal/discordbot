const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if(message.author.id !== '388935786298474497') if(message.author.id !== '294488150305275904') return;
    message.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};

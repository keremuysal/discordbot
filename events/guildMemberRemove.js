module.exports = member => {
  let guild = member.guild;
  member.send('Keşke gitmeseydin :(');
  guild.defaultChannel.sendMessage(`${member.user.username} gitti.`);
};

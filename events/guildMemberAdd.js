module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Hoş geldin **' + username + '**!');
};

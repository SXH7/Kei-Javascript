module.exports = {
    name: 'kick',
    description: 'kick a member',
    execute(message, args){
        if(message.member.roles.cache.has('750985067748392981')){
            const member = message.mentions.users.first()
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send('User has been kicked');
            }else{
                message.reply('No');
            }
        }
    }
}

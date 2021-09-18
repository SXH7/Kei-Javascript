module.exports = {
    name: 'ban',
    description: 'ban a member',
    execute(message, args){
        if(message.member.roles.cache.has('750985067748392981')){
            const member = message.mentions.users.first()
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send('User has been banned');
            }else{
                message.reply('No');
            }
        }
    }
}

module.exports = {
    name: 'unmute',
    description: 'unmutes a member',
    execute(message, args){
        if(message.member.roles.cache.has('750985067748392981')){
            const target = message.mentions.users.first();
            if(target){
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                let member = message.guild.members.cache.get(target.id);
                if(member.roles.cache.has('733929370179207169')){
                    member.roles.remove(muteRole);
                    message.channel.send(`<@${member.user.id}> has been unmuted.`);
                }
                else{
                    message.channel.send('Member is not muted.');
                }
                
            } else{
                message.channel.send("Can't find that member");
            }
        }
    }

}
module.exports = {
    name: 'mute',
    description: 'Mutes a member',
    execute(message, args){
        if(message.member.roles.cache.has('750985067748392981')){
            const target = message.mentions.users.first();
            if(target){
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted')
                let member = message.guild.members.cache.get(target.id);
                member.roles.add(muteRole)
                message.channel.send(`<@${member.user.id}> has been muted.`)
            } else{
                message.channel.send("Can't find that member");
            }
        }
    }
}

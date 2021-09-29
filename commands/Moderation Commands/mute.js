const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'Mutes a member',
    execute(message, args){
        if(message.member.roles.cache.has('750985067748392981')){
            const target = message.mentions.users.first();
            if(target){
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                let member = message.guild.members.cache.get(target.id);
                if(member.roles.cache.has('733929370179207169')){
                    message.channel.send('Member is already muted.');
                }
                else{
                    if(!args[1]){                
                        message.channel.send('Please specify the amount of time.')
                        return
                    }

                    member.roles.add(muteRole);
                    message.channel.send(`<@${member.user.id}> has been muted for ${ms(ms(args[1]))}.`);

                    setTimeout(function(){
                        member.roles.remove(muteRole);
                    }, ms(args[1]));

                }

            } else{
                message.channel.send("Can't find that member");
            }
        }
    }
}

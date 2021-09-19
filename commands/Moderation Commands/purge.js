const { MessageSelectMenu } = require("discord.js")

module.exports = {
    name: 'purge', 
    description: 'Purges specified number of messages',
    async execute(message, args){
        if(message.member.roles.cache.has('750985067748392981')){
            if(!args[0]){
                return message.reply('Specify a number of messages to purge.')
            }
            if(isNaN(args[0])){
                return message.reply('Please send a number.')
            }
            if(args[0] > 100){
                return message.reply('You cannot delete more then 100 messages.')
            }
            if(args[0] < 1){
                return message.reply('You must delete at least one message.')
            }

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
        }
        else{
            return message.reply("You don't have the correct roles to use that command!")
        }
    }
}

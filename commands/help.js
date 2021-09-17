const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'help command',
    execute(message, args){
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#ffd700')
            .setTitle('All Kei Commands')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription('All kei javascript commands')
            .addFields(
                {name: 'Ping', value: 'Returns bot latency'},
            )
            .setImage('https://cdn.discordapp.com/attachments/681786753547632790/888455760567226408/widewalk.png')
            .setFooter('i have no idea what to write here');

        message.channel.send({embeds: [helpEmbed]});
    }

}
const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = 'k.'

const fs = require('fs')

client.command = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/');

for(const folder of commandFiles){
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for(const file of commandFiles){
        const command = require(`./commands/${folder}/${file}`);

        client.command.set(command.name, command);
    }
}

client.once("ready", ()=>{ 
    console.log("Bot is online!")
});

client.on('message', message=>{
    if(!message.content.startsWith(prefix) || message.author.bot){
        return;
    };

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.command.get('ping').execute(message, args)
    } else if(command === 'help'){
        client.command.get('help').execute(message, args)
    } else if(command === 'purge'){
        client.command.get('purge').execute(message, args)
    } else if(command === 'kick'){
        client.command.get('kick').execute(message, args)
    } else if(command === 'ban'){
        client.command.get('ban').execute(message, args)
    } else if(command === 'mute'){
        client.command.get('mute').execute(message, args)
    }
});

client.login('TOKEN');

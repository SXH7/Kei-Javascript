const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const prefix = 'k.'

const fs = require('fs')

client.command = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.command.set(command.name, command);
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
    };
    if(command === 'help'){
        client.command.get('help').execute(message, args)
    };
});

client.login('TOKEN');

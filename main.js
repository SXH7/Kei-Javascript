const Discord = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.once("ready", ()=>{
    console.log("Bot is online!")
});

client.login('TOKEN');

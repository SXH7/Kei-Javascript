module.exports = {
    name: 'ping',
    description: 'ping command',
    execute(message, args){
        message.channel.send(`🏓Latency is ${Date.now()-message.createdTimestamp}ms.`);
    }
}

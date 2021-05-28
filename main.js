const Discord = require('discord.js')
const bot = new Discord.Client

bot.once('ready', () => {
    console.log('Sup')
});

bot.on('messageDelete', async (message) => {
    msg = message.content;
    peep = message.author;
    console.log('"' + msg + '"', 'by' ,peep.tag, 'was deleted')
})

bot.on('message', message => {
    if(message.content === '!snipe'){
        const embed = new Discord.MessageEmbed()
        .setAuthor(peep.tag, peep.avatarURL())
        .setDescription(msg)
        .setFooter("🤭 get sniped lol")
        .setTimestamp();
        message.channel.send(embed);
        console.log('"'+ msg +'"', 'was sniped')
   
    }
})
bot.login('token')

//bot will only snipe message that is deleted after the bot is online 
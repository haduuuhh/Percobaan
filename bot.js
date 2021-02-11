const Discord = require('discord.js');

const client = new Discord.Client();
 


client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});



client.on('message', message => {

    if (message.content === 'hai guys') {

       message.channel.send('lu yang gay dyno');

       }
 
});



client.on('message', message => {

    if (message.content === 'hi') {

       message.reply('Halo gan');

       }
 
});
 


client.on('message', message => {

    if (message.content === 'P') {

       message.reply('Salam yang bener ngab! :v');

       }
 
});



client.on('message', message => {

    if (message.content === 'Hi') {

       message.channel.send('Halo gan');

       }
 
});



client.on('message', message => {

    if (message.content === 'Dyno bau') {

       message.channel.send('Emang');

       }
 
});



client.on('message', message => {

    if (message.content === 'tes') {

       message.channel.send('APA TES TES');

       }
 
});



client.on('message', message => {

    if (message.content === 'Tes') {

       message.channel.send('APA TES TES');

       }
 
});



client.on('message', message => {

    if (message.content === 'p') {

       message.channel.send('Salam yang bener ngab! :v');

       }
 
});



client.on('message', message => {

    if (message.content === 'IKAN HIU MAKAN TOMAT') {

       message.channel.send('GOBLOG!!!! :v');

       }
 
});



client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "Do Not Disturb",  //You can show online, idle....
        game: {
            name: "Hacked Client",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });



module.exports = {
    name: 'loop',
    description: 'To loop song',
    async execute(message, args, distube, wh, Prefix, MessageEmbed) {
        message.delete()
        let queue = await distube.getQueue(message)
        if (queue) {
            let mode = distube.setRepeatMode(message, parseInt(args[0]));
            mode = mode ? mode == 2 ? "Repeat Semua Lagu" : "Repeat Lagu Ini" : "Mati";
            wh.send({
                username: 'haduuuressss Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png',
                embeds: [new MessageEmbed()
                    .setTitle('**Prefix:** `' + Prefix + '`')
                    .setColor('#02C2FF')
                    .setAuthor('haduuuressss', 'https://cdn.discordapp.com/app-icons/792994169659981846/eccf642340521c532b0ade8f00591114.png?size=64', 'https://minecraft-mp.com/server-s272254')
                    .setDescription(':clipboard: **Diminta Oleh** <@' + message.author + '>\n\u200B\n\u200B')
                    .addField(":repeat: **Mode Repeat Saat Ini** `" + mode + "`", '\u200B')
                    .setFooter('haduuuhh', 'https://cdn.discordapp.com/avatars/700166055326384179/3ec8287199dc402fe6a587902e300749.png?size=64')]
            })
        } else if (!queue) {
            wh.send(':x: **Bot tidak sedang memutar lagu!**', {
                username: 'UniversNetwork Song Player',
                avatarURL: 'https://i.imgur.com/pBmA5S6.png'
            })
        }
    }
}



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

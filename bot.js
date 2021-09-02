const Discord = require('discord.js');

const client = new Discord.Client();
 
const PREFIX = '!'

client.on('ready', () => {

    console.log('Ready Eak! :v');
    console.log(`${client.user.username} is available now!`)
    var activities = [ `${client.guilds.cache.size} servers`, `${client.users.cache.size} users!` ], i = 0;
    setInterval(() => bot.user.setActivity(`${PREFIX}help | ${activities[i++ % activities.length]}`, { type: "WATCHING" }),5000)

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('tralala');

       }

});



client.on('message', message => {

    if (message.content === 'pengen di sapa') {

       message.reply('hi :D');

       }
 
});



client.on('message', message => {

    if (message.content === 'P') {

       message.reply('males ah kamu ga sopan  :v');

       }
 
});



client.on('message', message => {

    if (message.content === '/rp') {

       message.reply('set to mode roleplay');

       }
 
});



client.on('message', message => {

    if (message.content === '/ooc') {

       message.reply('set to mode out of character');

       }
 
});



client.on('message', message => {

    if (message.content === 'tes') {

       message.channel.send('APA TES TES :v');

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



client.on('message', message => {

    if (message.content === 'IKAN HIU MAKAN TOMAT') {

       message.reply('CAKEEPPP, eh salah :v');

       }
 
});
  
    



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

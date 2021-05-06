const Discord = require('discord.js');

const client = new Discord.Client();
 


client.on('ready', () => {

    console.log('Ready Eak! :v');
    client.user.setActivity('Kontol');

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

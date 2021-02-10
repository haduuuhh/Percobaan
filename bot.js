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
        status: "idle",  //You can show online, idle....
        game: {
            name: "Hacked Client",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

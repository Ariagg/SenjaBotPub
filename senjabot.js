const Discord = require('discord.js');

const senja = new Discord.Client();

const config = require('./config.json');

const PREFIX = config.prefix;

var version = '1.2';

var dev = '7k - Rainfluenza';


senja.on('ready', () => {
    console.log('senjabot is online!');
    senja.user.setPresence({
        status: 'online',
        activity: {
            name: 'Youtube Senja日没',
            type: 'LISTENING',
        }
    })
});

senja.on('message', message=>{
    
    if(message.channel.name === '【🧡】new-upload'){
        message.react("🧡")
    }
    if(message.channel.name === '【📁】art-channel'){
        message.react("🔥")
    }
    
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){
        case 'suggest':
            message.reply('Suggestion recorded !, suggestion has been sent to a <@&736114093441810492> :)');
            break;
        case 'asiap':
            message.reply('santuy')
            break;
        case 'hi':
            message.reply('hello there :D')
            break;
        case 'about':
            message.reply('senja is a music curator, our main purposes is to promote upcoming artist 🧡')
            break;
        case 'ig':
            message.reply(config.instagram)
            break;
        case 'yt':
            message.reply(config.youtube)
            break;
        case 'submission':
            message.reply(config.submit)
            break;

        case 'info':
            if(args[1] === 'ver'){
                message.reply('this bot running at ver ' + version)
            }else 
            if(args[1] === 'dev'){
                message.reply('senja is developed by ' + dev)
            }else{
                message.reply('Sorry, i cant understand that')
            }
        break;
        
        case 'clear':
            if(!args[1]) return message.reply('error please input number')
            message.channel.bulkDelete(args[1]);
            break;
    }
})


senja.login(config.token);
const Discord = require('discord.js')
const client  = new Discord.Client();
const auth = require('./auth.json')

client.on('ready', (event) => {
    console.log(event)
})

client.on('message', (message) => {
    if (message.content == 'ping')
        message.reply('pong')
})

client.login(auth.token);
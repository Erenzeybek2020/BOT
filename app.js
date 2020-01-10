const discord = require('discord.js')
const client = new discord.Client()

client.on('ready',()=>{
    console.log(`Bot is ready`)
})

client.on('message',msg=>{
    if(msg.content = 'ping'){
        msg.channel.send(`hack!!!!!!`)
    }
})

client.login('NjY1MTU4MDUxNTE0NDE3MTUy.Xhhiug.huFKgW1BftOOoKOoUAwbPbhWuGk')
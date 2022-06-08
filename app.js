const discord = require('discord.js')
const client = new discord.Client()

client.on('ready',()=>{
    console.log(`Bot is ready`)
})

client.on('message',msg=>{
    if(msg.content = 'selam'){
        msg.channel.send(`as`)
    }
})

client.login('NjY1MTU4MDUxNTE0NDE3MTUy.Xhhiug.huFKgW1BftOOoKOoUAwbPbhWuGk')

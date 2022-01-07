const Discord = require("discord.js-selfbot"); //npm install discord.js-selfbot
const client = new Discord.Client();
const settings = require('./settings.json')

console.log("Loading...");

client.on("ready", () => {
    console.clear();
    client.login(settings.token)
    console.log("                   Macht Message Logger");
    console.log('----------------------------------------------------------')
    console.log('[MML] Connected to Discord via token successfully.')
    console.log('[MML] Username: ' + client.user.username +" | "+client.user.tag)
    console.log('[MML] Running on Discord API version ' + Discord.version)
    console.log("[MML] Original by kazion1337 - edited by Founder#8300");
    console.log('----------------------------------------------------------');
});

client.on("messageUpdate", (message, oldContent, newContent) => {
    if(message.author.bot) return;
    console.log("--> Message by " + message.author.tag + " edited in " + message.guild.name + " | " + oldContent + "-> " + newContent);
    console.log("---------------");
});

client.on("messageDelete", async(message) => {
if(message.author.bot) return;
console.log("--> Message by " + message.author.tag+ " in " + message.guild.name + " deleted: " + message.content);
console.log("---------------");
});

client.login(settings.token);
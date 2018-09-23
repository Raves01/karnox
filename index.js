const Discord = require('discord.js')
const Prefix = require('./Data/prefix.json')
const fs = require('fs')
const bot = new Discord.Client()
const config = require('./config.json')
const commands = new Discord.Collection()
bot.on('ready',()=>console.log("Je suis en ligne !"))
bot.on('error',(err)=>console.log("Une erreur c'est produite ! "+err))

bot.on('ready', () => {
     bot.user.setGame(config.prefix + "h | " + config.BotVersion , "https://www.twitch.tv/mignon_raves");
    console.log("\n[ready]I'm on " + bot.guilds.size + "servers & " + bot.users.size);
    console.log("\n[ready]logs :\n\n");
});

bot.on('message',async message=>{
	if(message.author.bot) return
	if(!message.guild)return
	if(!Prefix[message.guild.id]) Prefix[message.guild.id]=config.prefix
	if(!message.content.startsWith(Prefix[message.guild.id]))return
		var args = message.content.split(' ').slice(1)
	 var commandfile = commands.get(message.content.split(" ")[0].slice(Prefix[message.guild.id].length))
	if(commandfile){
		commandfile.run(bot,message,args)
	}
})

let number = 0 

fs.readdir("./commands/",   (err, files) => {   ;if(err) console.log(err) ; const jsfile = files.filter(f => f.split(".").pop() == "js"||"") ; jsfile.forEach((f, i,p) =>{ ; const props = require(`./commands/${f}`);   console.log(`[${++number}] ${f} a bien été chargée !`) ;commands.set(props.help.name.toLowerCase() , props);commands.set(props.help.alias, props)})})

bot.login(config.token)

module.exports.run = async(bot,message,args)=>{
	const Discord = require('discord.js')

	var getuser = message.mentions.users.first() || message.author
	var embed = new Discord.RichEmbed()
    .setColor('000000')
    .setDescription('l\'avatar rechercher s\'affiche ici')
    .setImage(getuser.avatarURL)
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(embed)
}
module.exports.help = {
	name:"avatar"
}
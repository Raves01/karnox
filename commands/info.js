module.exports.run = async(bot,message,args)=>{
		var testEmbed = new Discord.RichEmbed()
		.setThumbnail(bot.user.displayAvatarURL)
		.setDescription('```Info sur le bot```')
		.setColor('000000')
		.addField('Createur', 'ℜανεs Rainbow#3564')
		.addField('Serveur Officiel', 'Azur')
		.setFooter(message.author.username, message.author.avatarURL);
		message.channel.send(testEmbed)
}
module.exports.help = {
	name:"info"
}
module.exports.run = async(bot,message,args)=>{
		var testEmbed = new Discord.RichEmbed()
		.setThumbnail(bot.user.displayAvatarURL)
		.setColor('000000')
		.addField("Raves", 'Discord Euro beat Brony\nBigflo & Oli Petit Biscuit\nBigflo & Oli le freestyle du dico (ft Squeezie)')
		.addField("AqualiEau", 'Discord Euro beat Brony\nHarcelement NightCore')
		.addField("Soraru",'Ce contenu a été suprimé du bot')
		.setFooter(message.author.username, message.author.avatarURL);
		message.channel.send(testEmbed)
	}
	module.exports.help = {
	name:"music"
}
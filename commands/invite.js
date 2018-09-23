module.exports.run = async(bot,message,args)=>{
	const Discord = require('discord.js')

	var embed = new Discord.RichEmbed()
      .setDescription('[Invite Me](https://discordapp.com/oauth2/authorize?client_id=475346923797217290&scope=bot&permissions=-1)')
      .setColor('000000')
      .setFooter(message.author.username, message.author.avatarURL);
      message.channel.send(embed)
}

module.exports.help = {
	name:"invite"
}
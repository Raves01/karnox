module.exports.run = async(bot,message,args)=>{      var testEmbed = new Discord.RichEmbed()
      .addField(" Nom du serveur :", message.guild.name)
      .addField("Membres :", message.guild.memberCount)
      .setFooter(message.author.username, message.author.avatarURL);
      message.channel.send(testEmbed)
    }
    module.exports.help = {
	name:"server"
}
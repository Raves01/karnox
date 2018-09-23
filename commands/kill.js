module.exports.run = async(bot,message,args)=>{
	var member = message.mentions.members.first();
	if(!member)return message.channel.send("Mentionnez quelqu'un !")

		var testEmbed = new Discord.RichEmbed()
	        .addField(`${message.author.username}`, `a tué ${member.user.username}`)           
            .setImage('https://vignette.wikia.nocookie.net/mlp/images/a/a2/FANMADE_Team_fortress_2_twilight_sniper_by_digitalzebra.gif/revision/latest?cb=20140405013554')
            message.channel.sendEmbed(testEmbed)
}

module.exports.help ={
	name:"kill"
}
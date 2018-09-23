module.exports.run = async(bot,message,args)=>{
	if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('nah ta pas la perm')
		if (!args.join(' ')) return message.channel.send(`Veuillez entrez un message`)
			message.channel.send(args.join(' '))
		message.delete(4)
}
module.exports.help = {
	name:"say"
}
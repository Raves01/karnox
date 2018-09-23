module.exports.run = async(bot,message,args)=>{
	if (!args.join(' ')) return message.channel.send('un chiffre est requis')
		if (args.join(' ')>=1000) return message.channel.send(`Votre demande est trop longue(1000 max)`)
      
      message.channel.bulkDelete(args.join(' ')).then(deleted => {
      	message.channel.send(`Cleared ${deleted.size} messages .`).then(msg => msg.delete(2000));
      }).catch(error => message.channel.send('je ne peux pas supprimer ce message'))
}

module.exports.help ={
	name:"clear"
}
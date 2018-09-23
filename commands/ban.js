module.exports.run = async(bot,message,args) => {
        if(!message.member.hasPermission('BAN_MEMBERS'))
        return message.channel.send(":x: Tu n'as pas la permission `BAN_MEMBERS` ! :angreydoggo:");
  
      
      let member = message.mentions.members.first();
      if(!member)
      return message.channel.send(":x: C'est un humain lui ?");
      if(!member.bannable) 
      return message.channel.send(":x: Je ne peux pas bannir cette personne");
  
      let reason = args.slice(1).join(' ');
      if(!reason)
      return message.channel.send(":x: Une raison ? :aaaa:");
      
      member.ban(reason)
      .catch(error => message.channel.send(`:x: erreur : ${error}`));
      var help_embed = new Discord.RichEmbed()
      .setColor('000000')
      .setTitle("__Bannissement__")
      .addField(`Utilisateur banni :`, `${member.user.tag}`)
      .addField(`Banni Par :`, `${message.author.tag}`)
      .addField(`Raison :`, `${reason}`)
      .setThumbnail(member.user.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL);
      message.channel.send(help_embed)
    //  message.channel.send(`? Bannissement de **${member.user.tag}** par **${message.author.tag}** pour raison :\n **${reason}**`)
}

module.exports.help = {
	name:"ban"
}
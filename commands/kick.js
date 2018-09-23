module.exports.run = async(bot,message,args)=>{

        if(!message.member.hasPermission('KICK_MEMBERS'))
        return message.channel.send(":x: Tu n'as pas la permission `KICK_MEMBERS` ! ");

      

      let member = message.mentions.members.first();
      if(!member)
        return message.channel.send(":x: C'est un humain lui ?");
      if(!member.kickable) 
        return message.channel.send(":x: Je ne peux pas bannir cette personne");
      

      let reason = args.slice(1).join(' ');
      if(!reason)
        return message.channel.send(":x: Une raison ? ");
      

         member.kick(reason)
        .catch(error => message.channel.send(`:x: erreur : ${error}`));

       var help_embed = new Discord.RichEmbed()
      .setColor('000000')
      .setTitle("__Kick__")
      .addField(`Utilisateur kick :`, `${member.user.tag}`)
      .addField(`Kick par :`, `${message.author.tag}`)
      .addField(`Raison :`, `${reason}`)
      .setThumbnail(member.user.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL);
      message.channel.send(help_embed)

}

module.exports.help =   {
	name:"kick"
}
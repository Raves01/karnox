module.exports.run = async(bot,message,args)=>{
      var testEmbed = new Discord.RichEmbed()
    .setThumbnail(bot.user.displayAvatarURL)
    .setDescription('```Resumer de la team Plasma```')
    .setColor('000000')
    .addField('La Team', 'Muzik\nPicraft')
    .setFooter(message.author.username, message.author.avatarURL);
    message.channel.send(testEmbed)
      }
      module.exports.help = {
	name:"plasma"
}
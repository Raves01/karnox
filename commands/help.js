module.exports.run = async(bot,message,args)=>{
	const Discord = require('discord.js')
 var testEmbed = new Discord.RichEmbed()
        .setThumbnail(bot.user.displayAvatarURL)
        .setColor('000000')
        .addField("⚜️Administration⚜", 'kick\nban\nclear\nsetprefix')
        .addField("🎮Autre Amusement🎮", 'say\nping\navatar')
        .addField("🌈Info🌈", 'invite\ninfo\nhelp\nserver\nping')
        .addField("<:rdwut:479252858693222407>Dev<:rdwut:479252858693222407>", 'ℜανεs')
        .addField("<:applederp:479253169856184321>Meilleur Ami Du Dev<:applederp:479253169856184321>", 'AqualiEau')
        .addField("<:spitfire:479253452166529031>Createur<:spitfire:479253452166529031>", 'ℜανεs\nAlexou')
        .addField("🎇Bot Tester🎇", 'AqualiEau\nSoraru\nIb4ck\nMoustafa')
        .setFooter(message.author.username, message.author.avatarURL);
        message.channel.send(testEmbed)
}//etteint le
module.exports.help = {
	name:"help",
	alias:"h"
}
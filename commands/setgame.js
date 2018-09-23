module.exports.run = async(bot,message,args) => {
	        if (message.author.id !== '401060509060825088') return message.channel.send(`**:x: Tu n'est pas mon créateur !**`)
	var config = require('./../config.json')
            var argresult = args.join(' ');
bot.user.setGame(config.prefix + "h | " + argresult , "https://www.twitch.tv/mignon_raves");
message.delete(4)
message.channel.send(`Jeu : ${args.join(' ')}`)
}
module.exports.help = {
	name:"setgame",
	alias:"sg"
}
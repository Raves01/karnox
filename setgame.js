module.exports.run = async(bot,message,args)=>{
            let args = message.content.split(' ').slice(1);
            var argresult = args.join(' ');
bot.user.setGame(config.prefix + "h | " + argresult , "https://www.twitch.tv/mignon_raves");
message.delete(4)
}
module.exports.help ={
	name:"setgame"
  alias:"sg"
}

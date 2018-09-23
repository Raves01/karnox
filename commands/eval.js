module.exports.run = async(bot,message,args)=>{
        if (message.author.id !== '401060509060825088')  if (message.author.id !== '270212361678356480') if (message.author.id !== '475346923797217290')  return message.channel.send(`**:x: Tu n'est pas mon créateur !**`)
        var args = message.content.split(' ').slice(1)
        let code = args.join(' ');
        
        try {
          
          let evaled = eval(code);
          let str = require("util").inspect(evaled, {
            depth: 1
          })
          message.channel.send(str.substr(0, 1800), {code:"js"});
        } catch (err) {
          message.channel.send(err, {code:"js"})
        }


}
module.exports.help ={
	name:"eval",
  alias:"e"
}
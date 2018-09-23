module.exports.run = async(bot,message,args)=>{
    const Prefix = require('./../Data/prefix.json')
    const fs = require('fs')
    if (!message.member.hasPermission("MANAGE_GUILD")) return  message.channel.send(`**${message.author.username} ,** Vous n'avez pas la permission d'utilisé cette commande !`);

    if(!args.join(' ')) return message.channel.send(`**${message.author.username} ,** Veuillez entrez un prefix.`)
    if(args[0].length>=4) return  message.channel.send(`**${message.author.username} ,** Veuillez entrez maximum 5 caractère.`)
   
    Prefix[message.guild.id]=args[0]
   message.channel.send(`**${message.author.username} ,** Le nouveau prefix est : \`${args[0]}\``)
    fs.writeFile("./data/prefix.json", JSON.stringify(Prefix), (err) => {
        if (err) console.log(err)
    });
}
module.exports.help = {
    name:"setprefix",
    alias:"sp"
}
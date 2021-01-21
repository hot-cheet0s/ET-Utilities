module.exports = {
    name: 'help',
    description: "Commands",
    execute(msg, args){
              
        const embed = new Discord.msgEmbed()
        .setTitle('Help')
        .addField('Commands', msgEmbed('aaaaaaaaaa'))
        .addField('ID', msg.author.id)
        .addField('Current Server', msg.guild.name)
        .setColor(0xF91111)
        .setThumbnail(msg.author.AvatarURL)
    msg.channel.send(embed);

    }



    }

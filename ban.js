module.exports = {
    name: 'ban',
    description: "ban user out of the guild",
    execute(message, args) {

        if(message.member.roles.cache.has('798764147340869643')) {



            const member = message.mentions.users.first();
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send(" User has been banned")

            } else {
                message.channel.send('Tag the user you want to ban dumbo!')
            }
            if (member) {



            }
        }

    }
}


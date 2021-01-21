module.exports = {
    name: 'kick',
    description: "kick user out of the guild",
    execute(message, args) {

        
        if(message.member.roles.cache.has('798764147340869643')) {

            const member = message.mentions.users.first();
            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send(" User has been kicked")

            } else {
                message.channel.send('Tag the user you want to kick dumbo!')
            }
            if (member) {



            }
        }

    }
}

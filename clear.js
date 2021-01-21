module.exports = {
    name: 'clear',
    description: "deltes messages",
    execute(message, args) {

        
        if(message.member.roles.cache.has('798764147340869643')) {

            if (!args[1]) return message.reply('Pls input the number of messages you want to delete!')
            message.channel.bulkDelete(args[1]);

        }

    }
}


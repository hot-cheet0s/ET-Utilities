module.exports = {
    name: 'mute',
    description: "It mutes people!",
    execute(message, args) {


        if (message.member.roles.cache.has('798764147340869643')) {

            var person = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[1]));
            if (!person) return message.reply("I CANT FIND THE USER " + person)

            let mainRole = message.guild.roles.cache.find(role => role.name === 'Marine');
                let mainRole2 = message.guild.roles.cache.find(role => role.name === 'Rookie - level 1');
                let mainRole3 = message.guild.roles.cache.find(role => role.name === 'Crewmate');
                let mainRole4 = message.guild.roles.cache.find(role => role.name === 'Pirates');
                let mainRole5 = message.guild.roles.cache.find(role => role.name === 'Art access');
                let mainRole6 = message.guild.roles.cache.find(role => role.name === 'media access');
                let mainRole7 = message.guild.roles.cache.find(role => role.name === 'memes access');
                let mainRole8 = message.guild.roles.cache.find(role => role.name === 'Officer - level 10');
                let mainRole9 = message.guild.roles.cache.find(role => role.name === 'Lieutenant - lvl 15');
                let mainRole10 = message.guild.roles.cache.find(role => role.name === 'Commander - level 25');
                let mainRole11 = message.guild.roles.cache.find(role => role.name === 'Vice Captain - level 50');
                let mainRole12 = message.guild.roles.cache.find(role => role.name === 'Captain - level 100');
                let mainRole13 = message.guild.roles.cache.find(role => role.name === 'Veteran');
                let mainRole14 = message.guild.roles.cache.find(role => role.name === 'Event Spectator');

                let mainRole15 = message.guild.roles.cache.find(role => role.name === 'Event Participants');
                let mainRole16 = message.guild.roles.cache.find(role => role.name === 'Event Winner');
                let mainRole17 = message.guild.roles.cache.find(role => role.name === 'Rear Admiral');
                let mainRole18 = message.guild.roles.cache.find(role => role.name === 'Admirals');
let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');



            let time = args[2];
            if (!time) {
                return message.reply("You didnt specify a time!");
            }
            person.removeRole(mainRole.id);
            person.removeRole(mainRole2.id);
            person.removeRole(mainRole3.id);
            person.removeRole(mainRole4.id);
            person.removeRole(mainRole5.id);
            person.removeRole(mainRole6.id);
            person.removeRole(mainRole7.id);
            person.removeRole(mainRole8.id);
            person.removeRole(mainRole9.id);
            person.removeRole(mainRole10.id);
            person.removeRole(mainRole11.id);
            person.removeRole(mainRole12.id);
            person.removeRole(mainRole13.id);
            person.removeRole(mainRole14.id);
            person.removeRole(mainRole15.id);
            person.removeRole(mainRole16.id);
            person.removeRole(mainRole17.id);
            person.removeRole(mainRole18.id);


            person.addRole(muteRole.id);

            message.channel.send(`@${person.user.tag} has now been muted for ${ms(ms(time))}`)

            setTimeout(function () {

                person.add(mainrole.id)
                person.add(mainRole2.id);
                person.add(mainRole3.id);
                person.add(mainRole4.id);
                person.add(mainRole5.id);
                person.add(mainRole6.id);
                person.add(mainRole7.id);
                person.roles.add(mainRole8.id);
                person.roles.add(mainRole9.id);
                person.roles.add(mainRole10.id);
                person.roles.add(mainRole11.id);
                person.roles.add(mainRole12.id);
                person.roles.add(mainRole13.id);
                person.roles.add(mainRole14.id);
                person.roles.add(mainRole15.id);
                person.roles.add(mainRole16.id);
                person.roles.add(mainRole17.id);
                person.roles.add(mainRole18.id);
                mperson.remove(muterRole.id);
                console.log(role.id)
                message.channel.send(`@${person.user.tag} has been unmuted.`)
            }, ms(time));






        }
    }
}
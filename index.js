const Discord = require('discord.js');
const bot = new Discord.Client();

const ytdl = require("ytdl-core");

const token = 'BOT TOKEN';

const prefix = '+';

var servers = {};

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}


bot.on('ready', () => {
    console.log('Eternal Treasure Utilities is online');
    bot.user.setActivity('Moderating');
});

bot.on('message', msg => {

    let args = msg.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'Hi':
            msg.reply('Was gud man!');
            break;
        case 'clear':
            bot.commands.get('clear').execute(msg, args);
            break;
        case 'user':
            const embed = new Discord.MessageEmbed()
                .setTitle('User Profile')
                .addField('Username', msg.author.username)
                .addField('ID', msg.author.id)
                .addField('Current Server', msg.guild.name)
                .setColor(0xF91111)
                .setThumbnail(msg.author.AvatarURL)
            msg.channel.send(embed);
            break;
        case 'kick':
            bot.commands.get('kick').execute(msg, args);
            break;
        case 'ban':
            bot.commands.get('ban').execute(msg, args);
            break;
        case 'mute':
            bot.commands.get('mute').execute(msg, args);
            break;
        case 'play':
            bot.commands.get('play').execute(msg, args);
            break;
        case 'help':
            const eMbed = new Discord.MessageEmbed()
            .setTitle("Helper Embed")
            .setColor(0xFF0000)
            .setDescription("Make sure to use the !help to get access to the commands");

            msg.author.send(eMbed);
            break;
            case 'help-2':
            const emBed = new Discord.MessageEmbed()
            .setTitle("Helper Embed")
            .setColor(0xFF0000)
            .setDescription('Type +help-1 to go back!')
            .setDescription('            ')
            .setDescription('Help page 2')
            .setDescription("No commands yet!");

            msg.author.send(emBed);
            break;
            case 'help-1':

            msg.author.send(eMbed);
            break;
        case 'cmd':
            const Embed = new Discord.MessageEmbed()
                .setTitle('Commands')
                .addField('Username', msg.author.username)
                .addField('ID', msg.author.id)
                .addField('CCMD')
                .addField('Current Server', msg.guild.name)
                .setColor(0xF91111)
                .setThumbnail(msg.author.AvatarURL)
            msg.channel.send(Embed);















    }






})

bot.login(token);

const Discord = require("discord.js");

module.exports.run = async (client, message) => {
    message.channel.send(
        new Discord.MessageEmbed()
        .setTitle('Help System')
        .setColor('#ff0000')
        .setDescription('`start,`delete`, `drop`, `edit`, `end`, `help`, `info`, `reroll`')
    )
}

module.exports.help = {
    name: "help"
}

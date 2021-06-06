module.exports = {
    name: 'placz',
    description: "Placz",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#222F5B')
        .addFields(
        {name:'Nie płacz', value: '/me podaje chusteczke'},
       )
       .setImage('https://www.betterland.pl/17012-thickbox_default/chusteczki-do-twarzy-uniwersalne-w-pudelku-80-szt-the-cheeky-panda.jpg')

       message.channel.send(newEmbed);
    }
}
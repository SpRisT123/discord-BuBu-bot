module.exports = {
    name: 'zasady',
    description: "zasady",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#56338C')
        .setTitle('Zasady')
        .setURL('https://steamcommunity.com/id/Charonq/')
        .setDescription('Siema Oblodzisz?')
        .addFields(
        {name:'Zasada nr 1', value: 'Oblodzisz?'},
        {name:'Zasada nr 2', value: 'Siema Ruchasz Sie?'},
        {name:'Zasada nr 3', value: 'Masz fajne cyce'},
       )
       .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvB4DtF9Kw2m_L1Rb75GyRtVmV2x5bohssbg&usqp=CAU')
       .setFooter('Dobra dzięki');

       message.channel.send(newEmbed);
    }
}
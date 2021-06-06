module.exports = {
    name: 'anime',
    description: "Anime",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#cf3476')
        .setTitle('Anime')
        .setDescription('Siema Oblodzisz?')
        .addFields(
        {name:'Nr 1', value: 'Akame ga kill'},
        {name:'Nr 2', value: 'Naruto'},
        {name:'Nr 3', value: 'Dragon Ball'},
        {name:'Nr 4', value: 'Darling in the franxx'},
       )
       .setImage('https://www.desktopbackground.org/download/1280x1024/2015/08/14/994987_cute-anime-girls-backgrounds-new-hd-wallpapers_2560x1440_h.jpg')
       .setFooter('Lista by Jezus');

       message.channel.send(newEmbed);
    }
}
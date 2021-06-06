const {Client, Message, MessageEmbed } = require("discord.js");
const figlet = require('figlet');

module.exports = {
    name: "ascii",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        figlet.text(
            args.join(" "),
            {
                font: "Caligraphy",
            },
            async (err, data) => {
                message.channel.send(`\`\`\`${data}\`\`\``);
            }
        );
    },
};
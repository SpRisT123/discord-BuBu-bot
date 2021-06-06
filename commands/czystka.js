module.exports = {
    name: 'czystka',
    description: "czyszcze",
    async execute(message, args) {
        if(!args[0]) return message.reply("Podaj ile tego syfu chcesz wyczyścić.");
        if(isNaN(args[0])) return message.reply("Podaj prawdziwą liczbę.")

        if(args[0] > 30) return message.reply("Byczku nie możesz usunąć więcej wiadomości niż 30.");
        if(args[0] <1) return message.reply("Ty jesteś kurwa jakiś specjalny? Musisz usunąć co najmniej jedną wiadomość.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        });

    }
}
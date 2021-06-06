const Discord = require('discord.js');

const client = new Discord.Client();


const math = require('mathjs');
 

const prefix = '+';

const fs = require ('fs');
const { arg } = require('mathjs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Siema ja online!');
});



client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Klapek');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('784410266481721354').send(`Siema <@${guildMember.user.id}> Oblodzisz?`)
});

client.on("ready", () => {
    client.user.setActivity("Anime 💜", {
        type: "STREAMING",
        url: "https://www.twitch.tv/fistachyt"
});

});

client.on('message', message =>{ 
        
    if(!message.content.startsWith(prefix) || message.author.bot) return;

     const args = message.content.slice(prefix.length).split(/ +/);
     const command = args.shift().toLowerCase();
     
     if(command === 'ola'){
        message.channel.send('https://imgur.com/FKOwWMl');
     }else if(command === 'mama'){
         message.channel.send('https://imgur.com/63kH8P0');    
     }else if(command === 'tata'){
         message.channel.send('https://imgur.com/OdFFMg0');
     }else if(command === 'jd'){
        message.channel.send('https://imgur.com/7oaxXVA');
     }else if(command === 'jp2'){
         message.channel.send('https://imgur.com/DKyE5Lr');
     }else if(command === 'starebaby'){
         message.channel.send('https://imgur.com/sIKSv5c');
     }else if(command === 'wojownicy'){
         message.channel.send('https://imgur.com/Aoo1Jxt');
     }else if(command === 'bukhonor'){
         message.channel.send('https://imgur.com/jhmE88J');
     }else if(command === 'vape'){
         message.channel.send('https://imgur.com/5hQ24QM');
     }else if(command === 'guccigang'){
         message.channel.send('https://imgur.com/QbiKphW');
     }else if(command === 'ijust'){
         message.channel.send('https://imgur.com/ci9bTJr');
     }else if(command === 'przebisnieg'){
         message.channel.send('https://imgur.com/JDtMAwb');
     }else if(command === 'banan'){
         message.channel.send('https://imgur.com/pBXBBXI');
     }else if(command === 'jp'){
         message.channel.send('https://imgur.com/2arVOXV');
     }else if(command === 'HWDP'){
         message.channel.send('https://imgur.com/nIOAsU1');
     }else if(command === '420'){
         message.channel.send('https://imgur.com/f8DWdoL');
     }else if(command === 'jd2'){
         message.channel.send('https://imgur.com/ALrsmfm');
     }else if(command === 'speeder'){
         message.channel.send('https://imgur.com/fwXtU7G');
     }else if(command === 'storm'){
         message.channel.send('https://imgur.com/4O6J7B5');
     }else if(command ==='najman'){
         message.channel.send('https://imgur.com/a/9iMZyYH');
     }else if(command === 'wonski'){
         message.channel.send('https://imgur.com/HJTE4cw');
     }else if(command === 'rychlewicz'){
         message.channel.send('https://imgur.com/xD7PKL2');
     }else if(command === 'papaj'){
         message.channel.send('https://imgur.com/9mWhwsx');
     }else if(command === 'steam'){
         message.channel.send('https://steamcommunity.com/id/Charonq/');
     }else if(command === 'wiesniak'){
         message.channel.send('https://imgur.com/mSvjfwj');
     }else if(command === 'jebac'){
         client.commands.get('jebac').execute(message, args);
     }else if(command === 'hej'){
         client.commands.get('hej').execute(message, args);
     }else if(command === 'zasady'){
         client.commands.get('zasady').execute(message, args, Discord);
     }else if(command === 'czystka'){
         client.commands.get('czystka').execute(message, args);
     }else if(command === 'rng'){
         if(!args[0]) return message.reply("Nie podałeś pierwszej liczby");
         if(!args[1]) return message.reply("Nie podałeś drugiej liczby");
         message.channel.send("Twoja liczba to: " + Math.floor(Math.random() * args[1] + args[0])); 
     }else if(command === 'kremowa'){
         message.channel.send('https://imgur.com/RZWuVWx');
     }else if(command === 'anime'){
         client.commands.get('anime').execute(message, args, Discord);
     }else if(command === 'bartek'){
         message.channel.send('https://imgur.com/YKGQyP1');
     }else if(command === 'kot'){
         message.channel.send('https://cdn.discordapp.com/attachments/781436191727681566/783684033996783616/unknown.png');
     }else if(command === 'macjejko'){
         message.channel.send('https://cdn.discordapp.com/attachments/773554506209820703/783795572943487027/Nagranie-1_1.mp4');
     }else if(command === 'rybacy'){
         message.channel.send('https://cdn.discordapp.com/attachments/781436191727681566/783985821366878239/image0.png');
     }else if(command === 'kick'){
        if(!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Nie masz uprawnień żęby wyrzucić tą osobe.");
        let toKick = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return message.channel.send('Podaj kogo chcesz wyrzucić.');
        if(!toKick) return message.channel.send(`${args[0]} nie jest użytkownikiem.`);
        if(!reason) return message.channel.send('Podaj przyczyne wyrzucenia');
 
        if(!toKick.kickable){
            return message.channel.send('Nie moge wyrzucić tej osoby BibleThump');
            }
            
            if(toKick.kickable){
                let x = new Discord.MessageEmbed()
                .setTitle('Kick')
                .setDescription('https://steamcommunity.com/id/Charonq/')
                .addField('Wyrzucony:', toKick)
                .addField('Wyrzucony przez', message.author)
                .addField('Przyczyna', reason)
                .setColor('#8B1A1A');
     
                message.channel.send(x);
                toKick.kick();
        }
    }
    else if(command === 'ban'){
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nie masz uprawnień żeby zbanować tą osobe.");
        let toBan = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return message.channel.send('Podaj kogo chcesz zbanować.');
        if(!toBan) return message.channel.send(`${args[0]} nie jest użytkownikiem.`);
        if(!reason) return message.channel.send('Podaj powód zbanowania');
 
        if(!toBan.bannable){
            return message.channel.send('Nie moge zbanować tej osoby.');
        }
        if(toBan.bannable){
            let x = new Discord.MessageEmbed()
            .setTitle('Ban')
            .setDescription('https://steamcommunity.com/id/Charonq/')
            .addField('Użytkownik zbanowany', toBan)
            .addField('Zbanowany przez', message.author)
            .addField('Przyczyna', reason)
            .setColor('#4B0082');
        
 
            message.channel.send(x);
            toBan.ban();
        }
    }else if(command === 'sexoholik'){
        message.channel.send('https://imgur.com/h8vysoI');
    }else if(command === 'goha'){
        message.channel.send('https://imgur.com/sy5JOPT');
    }else if(command === 'snajper'){
        message.channel.send('https://imgur.com/qNVMTZw');
    }else if(command === 'gazowanie'){
        message.channel.send('https://imgur.com/RvJuGLf');
    }else if(command === 'komandofoki'){
        message.channel.send('https://imgur.com/amlf4K2');
    }else if(command === 'agent07'){
        message.channel.send('https://imgur.com/rBF8xig');
    }else if(command === 'utknolem'){
        message.channel.send('https://imgur.com/KGkfyda');
    }else if(command === 'slomka'){
        message.channel.send('https://imgur.com/J4uWbhk');
    }else if(command === 'bigfoki'){
        message.channel.send('https://imgur.com/amlf4K2');
        message.channel.send('https://imgur.com/amlf4K2');
        message.channel.send('https://imgur.com/amlf4K2');
        message.channel.send('https://imgur.com/amlf4K2');
        message.channel.send('https://imgur.com/amlf4K2');
    }else if(command === 'placz'){
        client.commands.get('placz').execute(message, args, Discord);
    }else if(command === 'piroman'){
        message.channel.send('https://imgur.com/hLuIeQo');
    }else if(command === 'zamyslony'){
        message.channel.send('https://imgur.com/PdG59OM');
    }else if(command === 'rajdowiec'){
        message.channel.send('https://imgur.com/htbgTUZ');
    }else if(command === 'ascii'){
        client.commands.get('ascii').run(client, message, args);
    }
});

client.login('NzQ4NTI5MTQyNDkxOTA2MTcy.X0ewFg.W8VB_Wo-ans0Fo0dHrplxblDBe8');    
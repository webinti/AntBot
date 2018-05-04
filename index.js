const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  bot.user.setActivity('chercher des gynes')
});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send("Bienvenue sur notre serveur " + member.displayName + "N'hésites pas à te présenter dans le channel 'Présentation' pour obtenir le statut de Minor");
  }).catch(console.error)
});


bot.login(process.env.TOKEN);

const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});


bot.on("ready", async () => {
  bot.user.setActivity('chercher des gynes')
});

bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send("Bienvenue sur notre serveur " + member.displayName + ". N'hésites pas à te présenter dans le channel 'Présentation' pour obtenir le statut de Minor et accéder à tous les salons");
  }).catch(console.error)
});

bot.on('message', function (message) {
  if (message.content === '!crematogaster') {
    member.createDM().then(function(channel) {
      channel.send('https://formicants.com/fr/17-crematogaster')
    })
  }
})

/*bot.on('message', function (message) {
  if (message.content === '!crematogaster') {
    message.reply('https://formicants.com/fr/17-crematogaster')
  }
})*/

bot.on('message', function (message) {
  if (message.content === '!messor') {
    message.reply('https://formicants.com/fr/16-messor')
  }
})

bot.on('message', function (message) {
  if (message.content === '!camponotus') {
    message.reply('https://formicants.com/fr/18-camponotus')
  }
})

bot.on('message', function (message) {
  if (message.content === '!solenopsis') {
    message.reply('https://formicants.com/fr/19-solenopsis')
  }
})

bot.on('message', function (message) {
  if (message.content === '!lasius') {
    message.reply('https://formicants.com/fr/20-lasius')
  }
})

bot.on('message', function (message) {
  if (message.content === '!pheidole') {
    message.reply('https://formicants.com/fr/21-pheidole')
  }
})


bot.login(process.env.TOKEN);

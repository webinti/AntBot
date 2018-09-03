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
  if (message.content === '!bonjour') {
    message.reply("Salut, tes fourmis vont bien ?")
  }
})

bot.on('message', function (message) {
  if (message.content === '!promo') {
    message.reply("Tiens, 10% de réduction sur le site Formicants avec le code : 1stOrder")
  }
})

bot.on('message', function (message) {
  if (message.content === '!popo') {
    message.reply("Les popos c'est rigolo! J'aime les po...... ?")
  }
})

bot.on('message', function (message) {
  if (message.content === '!pates') {
    message.reply("Ici, il y a que bil_biloup qui aime les pâtes! OK ?")
  }
})

bot.on('message', function (message) {
  if (message.content === '!formicants') {
    message.reply("https://formicants.com")
  }
})

bot.on('message', function (message) {
  if (message.content === '!crematogaster') {
    message.reply('https://formicants.com/17-crematogaster')
  }
})

bot.on('message', function (message) {
  if (message.content === '!messor') {
    message.reply('https://formicants.com/16-messor')
  }
})

bot.on('message', function (message) {
  if (message.content === '!camponotus') {
    message.reply('https://formicants.com/18-camponotus')
  }
})

bot.on('message', function (message) {
  if (message.content === '!solenopsis') {
    message.reply('https://formicants.com/19-solenopsis')
  }
})

bot.on('message', function (message) {
  if (message.content === '!lasius') {
    message.reply('https://formicants.com/20-lasius')
  }
})

bot.on('message', function (message) {
  if (message.content === '!pheidole') {
    message.reply('https://formicants.com/21-pheidole')
  }
})

bot.on('message', function (message) {
  if (message.content === '!help') {
    var help_embed = new Discord.RichEmbed()
    .setColor("F05A66")
    .setTitle("Voici les commandes possibles !")
    .setDescription("Je suis un Bot conçu uniquement pour la Myrmécologie.")
    .addField("!formicants", "Affiche la boutique en ligne")
    .addField("!lasius", "Affiche les Lasius en vente")
    .addField("!crematogaster", "Affiche les Crematogaster en vente")
    .addField("!camponotus", "Affiche les Camponotus en vente")
    .addField("!messor", "Affiche les Messor en vente")
    .addField("!solenopsis", "Affiche les Solenopsis en vente")
    .addField("!pheidole", "Affiche les Pheidole en vente")
    .addField("!bonjour", "Pour saluer AntBot")
    .setFooter("www.formicants.com")
    message.channel.sendMessage(help_embed);
  }
});


bot.login(process.env.TOKEN);

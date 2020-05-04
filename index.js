const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
  bot.user.setActivity("chercher des gynes");
});

bot.on("guildMemberAdd", (member) => {
  member
    .createDM()
    .then((channel) => {
      return channel.send(
        "Bienvenue sur notre serveur " +
          member.displayName +
          ". N'hésites pas à te présenter dans le channel 'Présentation' pour obtenir le statut de Minor et accéder à tous les salons." +
          +"Pour plus d'informations, n'hésite pas à visiter ces liens https://www.myrmecofourmis.com/guide-du-debutant-en-elevage-de-fourmis et ensuite ça https://www.myrmecofourmis.com/documentation"
      );
    })
    .catch(console.error);
});

bot.on("message", function (message) {
  if (message.content === "!bonjour") {
    message.reply("Salut, tes fourmis vont bien ?");
  }
});

bot.on("message", function (message) {
  if (message.content === "!myrmeco") {
    message.reply(
      "Pour plus d'informations, n'hésite pas à visiter ces liens https://www.myrmecofourmis.com/guide-du-debutant-en-elevage-de-fourmis et ensuite ça https://www.myrmecofourmis.com/documentation"
    );
  }
});

bot.on("message", function (message) {
  if (message.content === "!promo") {
    message.reply(
      "Tiens, 10% de réduction sur le site Formicants.com avec le code : 1stOrder"
    );
  }
});

bot.on("message", function (message) {
  if (message.content === "!formicants") {
    message.reply("https://grainesdegaia.fr/");
  }
});

bot.on("message", function (message) {
  if (message.content === "!crematogaster") {
    message.reply(
      "https://grainesdegaia.fr/categorie-produit/fourmis/fondation-et-colonies/"
    );
  }
});

bot.on("message", function (message) {
  if (message.content === "!messor") {
    message.reply(
      "https://grainesdegaia.fr/categorie-produit/fourmis/fondation-et-colonies/"
    );
  }
});

bot.on("message", function (message) {
  if (message.content === "!camponotus") {
    message.reply(
      "https://grainesdegaia.fr/categorie-produit/fourmis/fondation-et-colonies/"
    );
  }
});

bot.on("message", function (message) {
  if (message.content === "!solenopsis") {
    message.reply(
      "https://grainesdegaia.fr/categorie-produit/fourmis/fondation-et-colonies/"
    );
  }
});

bot.on("message", function (message) {
  if (message.content === "!lasius") {
    message.reply(
      "https://grainesdegaia.fr/categorie-produit/fourmis/fondation-et-colonies/"
    );
  }
});

bot.on("message", function (message) {
  if (message.content === "!pheidole") {
    message.reply(
      "https://grainesdegaia.fr/categorie-produit/fourmis/fondation-et-colonies/"
    );
  }
});

bot.on("message", function (message) {
  if (message.content === "!help") {
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
      .addField(
        "!promo",
        "Une petite réduction sur ton prochain achat sur Formicants.com"
      )
      .setFooter("www.formicants.com");
    message.channel.sendMessage(help_embed);
  }
});

bot.login(process.env.TOKEN);

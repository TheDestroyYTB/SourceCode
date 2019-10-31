const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()
client.login(config.token)

client.on('ready', () => {
    console.log(`${client.user.username} est connecté !`)
    client.user.setStatus("online")
    client.user.setActivity("Créé par lolgame854#3470")
})

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    if(command === "bonjour"){
        message.channel.send(`Salut ${message.author.username} !`)
    }
    if(command === "salut"){
        message.reply('Bonjour.')
    }
    if(command === "say"){
        const agrs1 = message.content.trim().split(/ +/g)
        const repons = agrs1.slice(1).join(" ")

        if(!args[0]){
            return message.channel.send("Veuillez mettre un message a la suite.")
        }

        message.channel.send(`Votre message : ${repons}`)
    }
    if(command === "help"){
        const embed = new Discord.RichEmbed()
        .setAuthor("Voici toute mes commande :")
        .setColor("BLACK")
        .addField("🔨 Commande basic :", "say, bonjour, salut")
        .addField("📌 Commandes info :", "credit")
        .setTimestamp()
        .setFooter("Bot créé par lolgame854#3470")
        message.channel.send(embed)
    }
    if(command === "credit"){
        const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setAuthor(client.user.username)
        .setDescription("J'ai été créé par lolgame854 ! Et vous pouvez avoir mon code source sur le bot Eternity !")
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(client.user.username, client.user.displayAvatarURL)
        message.channel.send(embed)
    }
})
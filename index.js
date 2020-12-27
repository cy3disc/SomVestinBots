const { Client, Util, MessageEmbed } = require("discord.js");

const bot = new Client();
const PREFIX = "b!";

bot.on("ready", () => bot.user.setActivity("ldndl"));
bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", () => console.log(`[READY] ${bot.user.tag} has been successfully booted up!`));
bot.on("shardDisconnect", (event, id) => console.log(`[SHARD] Shard ${id} disconnected (${event.code}) ${event}, trying to reconnect...`));
bot.on("shardReconnecting", (id) => console.log(`[SHARD] Shard ${id} reconnecting...`));
bot.on("ready", () => bot.user.setActivity(" When the sun shines, we’ll shine together, told you i’d be here for ever!"));

bot.on("message", message => {
    if(message.author.bot || !message.content.startsWith(PREFIX)) return;
    const args = message.content.split(" ");

    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(PREFIX.length);

    if(command === "help") {
        const helpembed = new MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription(`
:white_check_mark: __**General Commandy**__
> \`help\`, \`ping\`, \`dizajn\`, \`info\` 
`)
        .setFooter("By mstudio45 for cy3", message.author.displayAvatarURL);
		message.channel.send(helpembed);

    } if(command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! Latency: ${timeTaken}ms.`);
    } if(command === "dizajn") {
        const helpembed = new MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription(`
        :gift: Práve je špeciálny Vianočný dizajn! Tento dizajn sme zvolili preto lebo idú Vianoce. Nejaké nápady napíš Majitelovy do Pm! Pre Info dizajn končí 5.1.2021!`
        )
        .setFooter("By mstudio45 for cy3", message.author.displayAvatarURL);
		message.channel.send(helpembed);
    } if(command === "info") {
        const helpembed = new MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.displayAvatarURL)
        .setColor("RANDOM")
        .setDescription(`
        **__Info:__**
        Som 24/7
        Pôjdem do angličtiny
        Budem Pubic!!!
        Majiteľ Bota je 🍭 ZeroDeads | 𝕯𝖒 𝖋𝖔𝖗 𝖇𝖊𝖘𝖙 𝖘𝖊𝖗𝖛𝖊𝖗#6086`
        )
        .setFooter("Tu máš to info pre viacej kontaktuj Majitela!", message.author.displayAvatarURL)
        message.channel.send(helpembed);
    }
});

bot.login("NzQ2MjkzOTYzNDM4MTYxOTMy.Xz-Oag.2A5Knj7ZS6mZfYxKjkYeQBx3NaY")
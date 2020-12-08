const { Client, Util, MessageEmbed } = require("discord.js");

const bot = new Client();
const PREFIX = "b!";

bot.on("ready", () => bot.user.setActivity("ldndl"));
bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", () => console.log(`[READY] ${bot.user.tag} has been successfully booted up!`));
bot.on("shardDisconnect", (event, id) => console.log(`[SHARD] Shard ${id} disconnected (${event.code}) ${event}, trying to reconnect...`));
bot.on("shardReconnecting", (id) => console.log(`[SHARD] Shard ${id} reconnecting...`));
bot.on("ready", () => bot.user.setActivity("b!help"));

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
> \`help\`, \`ping\`, \`dizajn\`
`)
        .setFooter("By mstudio45 for cy3", message.author.displayAvatarURL());
		message.channel.send(helpembed);

    } if(command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! Latency: ${timeTaken}ms.`);
    } if(command === "dizajn") {
        const helpembed = new MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription(`
        :gift: Práve je špeciálny Vianočný dizajn! Tento dizajn sme zvolili preto lebo idú Vianoce. Nejaké nápady napíš Majitelovy do Pm!`
        )
        .setFooter("By mstudio45 for cy3", message.author.displayAvatarURL());
		message.channel.send(helpembed);
    } if(command === "warn") {
var Discord = require('discorde.js')

exports.run = async(client, msg, args)
    }
});

bot.login("NzQ2MjkzOTYzNDM4MTYxOTMy.Xz-Oag.2A5Knj7ZS6mZfYxKjkYeQBx3NaY")
const { Client, Util, MessageEmbed } = require("discord.js");

const bot = new Client();
const PREFIX = "b!";

bot.on("ready", () => bot.user.setActivity("lol"));
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
:white_check_mark: __**General Commands**__
> \`help\`, \`ping\`, \`info\`,\`invite\`  
`)
        .setFooter("By mstudio45 for cy3", message.author.displayAvatarURL);
		message.channel.send(helpembed);

    } if(command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! Latency: ${timeTaken}ms.`);
    
    } if(command === "info") {
        const helpembed = new MessageEmbed()
        .setAuthor(bot.user.tag, bot.user.displayAvatarURL)
        .setColor("RANDOM")
        .setDescription(`
        **__Info:__**
        I am 24/7
        I will be Pubic!!!
        Owner is GroovyLoveR#0983`
        )
        .setFooter("For more info contact Owner!", message.author.displayAvatarURL)
        message.channel.send(helpembed);
    } if(command === "invite") {
        message.reply(`Here you can invite this bot: https://discord.com/api/oauth2/authorize?client_id=746293963438161932&permissions=8&scope=bot`);
    }
});

bot.login("NzQ2MjkzOTYzNDM4MTYxOTMy.Xz-Oag.2A5Knj7ZS6mZfYxKjkYeQBx3NaY")
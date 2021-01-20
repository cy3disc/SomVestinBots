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
> \`help\`, \`ping\`, \`info\`, \`invite\`
:confetti_ball: __**Fun commands**__
> \`meme\`, \`tictactoe\`, \`cov\`  
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
    
    } if(command === "meme") {
        const embed = new MessageEmbed()
        const got = require('got');
      got('https://www.reddit.com/r/memes/random/.json').then(response => {
          let content = JSON.parse(response.body);
          let permalink = content[0].data.children[0].data.permalink;
          let memeUrl = 'https://reddit.com'+permalink;
          let memeImage = content[0].data.children[0].data.url;
          let memeTitle = content[0].data.children[0].data.title;
          let memeUpvotes = content[0].data.children[0].data.ups;
          let memeDownvotes = content[0].data.children[0].data.downs;
          let memeNumComments = content[0].data.children[0].data.num_comments;
          embed.addField(memeTitle, '[View thread]('+memeUrl+')');
          embed.setImage(memeImage);
          embed.setFooter(':thumbsup: '+memeUpvotes+' :thumbsdown: '+memeDownvotes+' :speech_balloon: '+memeNumComments);
          message.channel.send(embed)
      }).catch(console.error);
    
    } if(command === "tictactoe") {
        const { tictactoe } = require('reconlx')
const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please mark the one you want to play with.')
        new tictactoe({
            player_two: member, 
            message: message
       });
    } if(command === "cov") {
        const baseUrl = "https://corona.lmao.ninja/v2";
        let url, response, corona;
        try {
            url = args[1] ? `${baseUrl}/countries/${args[1]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.channel.send(`***${args[1]}*** doesn't exist, or data isn't being collected`)
        }
        const embedcovid19 = new MessageEmbed()
            .setTitle(args[1] ? `${args[1].toUpperCase()} Covid-19 Stats` : 'Total Corona Cases Worldwide')
            .setColor('#fb644c')
            .setThumbnail(args[1] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            .addFields(
                {
                    name: 'Total Cases:',
                    value: corona.cases.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total Deaths:',
                    value: corona.deaths.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Total Recovered:',
                    value: corona.recovered.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Active Cases:',
                    value: corona.active.toLocaleString(),
                    inline: true
                },
                {
                    name: '\u200b',
                    value: '\u200b',
                    inline: true
                },
                {
                    name: 'Critical Cases:',
                    value: corona.critical.toLocaleString(),
                    inline: true
                },
                {
                    name: 'Today Cases:',
                    value: corona.todayCases.toLocaleString().replace("-", ""),
                    inline: true
                },
                {
                    name: 'Today Recoveries:',
                    value: corona.todayRecovered.toLocaleString().replace("-", ""),
                    inline: true
                },
                {
                    name: 'Todays Deaths:',
                    value: corona.todayDeaths.toLocaleString(),
                    inline: true
                })
        await message.channel.send(embedcovid19)
    }
    
});

bot.login("NzQ2MjkzOTYzNDM4MTYxOTMy.Xz-Oag.2A5Knj7ZS6mZfYxKjkYeQBx3NaY")
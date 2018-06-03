const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content.startsWith(`${prefix}nogueira`)) {
			message.channel.send("It works!", {
		 		tts: true
		})
	}
	else if (message.content === `${prefix}server`) {
    	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
	else if (message.content === `${prefix}user-info`) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
	else if (message.content == "!delete"){
		message.channel.bulkDelete(10, true);
	}
});

client.login(token);

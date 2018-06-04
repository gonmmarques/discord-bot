module.exports = {
	name: 'clear',
	description: 'Clear up to 20 messages.',
	usage: ' [number of messages]',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		}
		else if (amount <= 1 || amount > 20) {
			return message.reply('you need to input a number between 1 and 20.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	},
};
module.exports = {
    name: 'nogueira',
    description: 'nogueira!',
    execute(message, args) {
        message.channel.send("It works!", {
		 		tts: true
		});
    },
};
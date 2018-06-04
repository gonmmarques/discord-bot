module.exports = {
    name: 'nogueira',
    description: 'Just a stupid command really that triggers a /tts saying "It works!"',
    usage: '',
    execute(message, args) {
        message.channel.send("It works!", {
		 		tts: true
		});
    },
};
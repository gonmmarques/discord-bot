const ytdl = require('ytdl-core');
module.exports = {
	name: 'play',
	description: 'Play music.',
	usage: ' ',
	execute(message, args) {
		if (message.channel.type !== 'text') return;
	
		const { voiceChannel } = message.member;
	
		if (!voiceChannel) {
			return message.reply('Join a voice channel first!');
		}
	
		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', { filter: 'audioonly' });
			const dispatcher = connection.playStream(stream);
	
			dispatcher.on('end', () => voiceChannel.leave());
		});
	},
};
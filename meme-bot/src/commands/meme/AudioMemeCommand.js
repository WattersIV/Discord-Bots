const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AudioMemeCommand extends BaseCommand {
  constructor() {
    super('audioMeme', 'meme', []);
  }

  run(client, message, args) {
    message.channel.send('audioMeme command works');
    //Look at youtube api. Store urls of audio memes here and randomly select a meme to play
  }
}
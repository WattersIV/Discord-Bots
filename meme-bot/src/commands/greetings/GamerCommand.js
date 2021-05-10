const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DaveCommand extends BaseCommand {
  constructor() {
    super('dave', 'moody', 'gamer', []);
  }

  run(client, message, args) {
    message.channel.send('Ready to game brother?');
  }
}
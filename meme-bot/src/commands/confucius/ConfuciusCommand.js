const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ConfuciusCommand extends BaseCommand {
  constructor() {
    super('confucius', 'confucius', []);
  }

  run(client, message, args) {
    message.channel.send('Confucius say, man under wheelbarrow playing with tool, not necessarily mechanic');
  }
}
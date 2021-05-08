const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class WeiCommand extends BaseCommand {
  constructor() {
    super('wei', 'greetings', []);
  }

  run(client, message, args) {
    message.channel.send('Wei is the discord god. All hail Mr. Weiiew');
  }
}
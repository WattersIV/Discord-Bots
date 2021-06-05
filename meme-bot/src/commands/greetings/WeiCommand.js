const BaseCommand = require("../../utils/structures/BaseCommand");
const joinUserChannel = require("../../helpers/helpers");

module.exports = class ChrisCommand extends BaseCommand {
  constructor() {
    super("wei", "greetings", []);
  }

  run(client, message, args) {
    message.channel.send(
      "All hail the discord G0D WEIIEW. He will judge right from wrong on the premises"
    );
    joinUserChannel(message);
  }
};

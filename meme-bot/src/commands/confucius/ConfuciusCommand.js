const axios = require('axios');
const { parse } =  require('node-html-parser');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ConfuciusCommand extends BaseCommand {
  constructor() {
    super('confucius', 'confucius', []);
  }

  run(client, message, args) {
    axios.get('http://www.trees-and-lambdas.info/matushansky/confucius.html')
      .then((res) => {
        const root = parse(`${res.data}`)
        //Selecting all of the li elements which are all of the quotes on this site
        const quotes = root.querySelectorAll('li')
        const quoteNumber = this.randomInt(quotes.length - 1)
        message.channel.send(`${quotes[quoteNumber].rawText}`);
      })
  }

  randomInt(max) {
    //Gen random number between 0 and the max number given
    return Math.floor(Math.random() * (max + 1));
  }
}
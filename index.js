const TelegramBot = require('node-telegram-bot-api');
const token = '7279163483:AAH13MoAjiCH1WFeaAX-by5uUT0qLIpD24k';
const bot = new TelegramBot(token);
const dev = process.env.NODE_ENV !== 'production';
const actor = dev ? 'Local bot' : 'Bot on render';

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, actor + ' received your message: ' + msg.text);
});


main(); 

async function main() {
  if (dev) {
    bot.startPolling();

  } else {

    const express = require('express');
    const bodyParser = require('body-parser');
    const app = express();
    const url = 'https://telegram-bot-polling-webhook.onrender.com';

    await bot.setWebHook(`${url}/bot${token}`);

    app.use(bodyParser.json());

    app.post(`/bot${token}`, (req, res) => {                      console.log(req.body);
      bot.processUpdate(req.body);
      res.sendStatus(200);
    });

    app.listen(process.env.PORT || 3000);

  }
}

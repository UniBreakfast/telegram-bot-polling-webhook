const TelegramBot = require('node-telegram-bot-api');
const token = '7279163483:AAH13MoAjiCH1WFeaAX-by5uUT0qLIpD24k';
const bot = new TelegramBot(token);

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'I received your message: ' + msg.text);
});


if (process.env.NODE_ENV !== 'production') {
  bot.startPolling();

} else {

  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  const url = 'https://telegram-bot-polling-webhook.onrender.com';

  bot.setWebHook(`${url}/bot${token}`);

  app.post(`/bot${token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });

  app.use(bodyParser.json()).listen(process.env.PORT || 3000);

} 

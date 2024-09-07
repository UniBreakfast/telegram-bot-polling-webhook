// const TelegramBot = require('node-telegram-bot-api');
// const token = '7279163483:AAH13MoAjiCH1WFeaAX-by5uUT0qLIpD24k';
// const bot = new TelegramBot(token, { polling: true });

// bot.onText(/\/echo (.+)/, (msg, match) => {
//     const chatId = msg.chat.id;
//     const resp = match[1];
//     bot.sendMessage(chatId, resp);
// });

// bot.startPolling();





const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const token = '7279163483:AAH13MoAjiCH1WFeaAX-by5uUT0qLIpD24k';
const bot = new TelegramBot(token);
const app = express();

const PORT = process.env.PORT || 3000;
const WEBHOOK_URL = `https://yourdomain.com:PORT/${token}`;

if (deploy === true) bot.setWebHook(WEBHOOK_URL);

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

app.listen(PORT);

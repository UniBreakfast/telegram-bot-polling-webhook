// const TelegramBot = require('node-telegram-bot-api');
// const token = '7279163483:AAH13MoAjiCH1WFeaAX-by5uUT0qLIpD24k';
// const bot = new TelegramBot(token, { polling: true });

// bot.onText(/\/echo (.+)/, (msg, match) => {
//     const chatId = msg.chat.id;
//     const resp = match[1];
//     bot.sendMessage(chatId, resp);
// });

// bot.startPolling();





// const TelegramBot = require('node-telegram-bot-api');
// const express = require('express');

// const token = '7279163483:AAH13MoAjiCH1WFeaAX-by5uUT0qLIpD24k';
// const bot = new TelegramBot(token);
// const app = express();

// const PORT = process.env.PORT || 3000;
// const WEBHOOK_URL = `https://telegram-bot-polling-webhook.onrender.com/${token}`;

// // if (deploy === true) 
//   bot.setWebHook(WEBHOOK_URL);

// bot.onText(/\/echo (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const resp = match[1];
//   bot.sendMessage(chatId, resp);
// });

// app.listen(PORT);




// const TelegramBot = require('node-telegram-bot-api');
// const express = require('express');
// const bodyParser = require('body-parser');

// const token = '7279163483:AAH13MoAjiCH1WFeaAX-by5uUT0qLIpD24k';
// const bot = new TelegramBot(token);
// const app = express();

// // Replace with your own URL and port
// const PORT = process.env.PORT || 3000;
// const WEBHOOK_URL = `https://telegram-bot-polling-webhook.onrender.com/${token}`;

// // Middleware to parse incoming requests
// app.use(bodyParser.json());

// // Set the webhook
// if (deploy === true) {
//     bot.setWebHook(WEBHOOK_URL);
// }

// // Handle incoming messages
// app.post(`/${token}`, (req, res) => {
//     const msg = req.body;

//     // Check if the message contains the command
//     if (msg && msg.message && msg.message.text) {
//         const chatId = msg.message.chat.id;
//         const text = msg.message.text;

//         // Check for the /echo command
//         if (text.startsWith('/echo')) {
//             const resp = text.split(' ').slice(1).join(' '); // Extract the response text
//             bot.sendMessage(chatId, resp);
//         }
//     }

//     // Respond with 200 OK to acknowledge receipt of the update
//     res.sendStatus(200);
// });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });




const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const token = '7279163483:AAH13MoAjiCH1WFeaAX-by5uUT0qLIpD24k';
const bot = new TelegramBot(token);
const url = 'https://telegram-bot-polling-webhook.onrender.com';

bot.setWebHook(`${url}/bot${token}`);

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'I received your message: ' + msg.text);
});

app.use(bodyParser.json());

app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000);

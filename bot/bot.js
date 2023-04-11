const { Client, Intents } = require('discord.js');

const client = new Client({ 
  intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES], 
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const channelId = '1074616257627824148'; // Replace with your channel ID
const intervalMs = 10000; // Change the interval time as desired
let counter = 0;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  setInterval(() => {
    const message = `This is message number ${counter}`;
    client.channels.cache.get(channelId).send(message);
    counter++;
  }, intervalMs);
});

client.login('MTA3NTg1MDMxNzU4MjgzMTc2Ng.G2WxyU.mE6fckshwvxy97KL0tlOZ_3ASmuhi8F1pmshe4');
const { Client, Intents } = require("discord.js");
const { getDiscordToken } = require("./config");
const { registerCommands } = require("./commands/commands.js");
const discordToken = getDiscordToken();

const client = new Client({intents: Intents.FLAGS.GUILDS});

registerCommands();

client.login(discordToken);

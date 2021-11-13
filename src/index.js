const { getDiscordToken, getDiscordClientId, getDiscordGuildId } = require("./config");
const { REST } = require("@discordjs/rest");

const { generateCommandData } = require("./commands/commands.js");
const { Routes } = require("discord-api-types/v9");
const { setupClient } = require("./client");
const { sendResourceAdd } = require("./utils/embed");
const discordToken = getDiscordToken();

const commandsToRegister = generateCommandData();

const restClient = new REST({version: '9'}).setToken(discordToken);

restClient.put(Routes.applicationGuildCommands(getDiscordClientId(), getDiscordGuildId()), {
    body: [commandsToRegister]
}).then((data)=>{
    setupClient(discordToken);
    console.log("[wee-sauce-bot] loaded.");
}).catch((err) => console.error(err));



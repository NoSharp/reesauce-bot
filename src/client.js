const { Client, Intents } = require("discord.js");
const { getInteractionResponse } = require("./commands/commands.js");
const { getDiscordGuildId, getDiscordChannelId } = require("./config.js");

const client = new Client({intents: Intents.FLAGS.GUILDS});

client.on("interactionCreate", async (interaction)=>{
    if(!interaction.isCommand()) return;
    const targetResponse = getInteractionResponse(interaction.options.getSubcommand());
    if(targetResponse === undefined) return;
    await targetResponse(interaction);
});

let mainChannel = null;
client.on('ready', async ()=>{
    
    const guild = await client.guilds.fetch(getDiscordGuildId());
    mainChannel = await guild.channels.fetch(getDiscordChannelId());
})

function setupClient(token){
    client.login(token);
}

/**
 * get the main text channel where these resources should go.
 * @returns {import("discord.js").TextChannel}
 */
function getMainChannel(){
    return mainChannel;
}
module.exports = {setupClient, getMainChannel}
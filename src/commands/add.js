const { SlashCommandBuilder } = require("@discordjs/builders");
const {Interaction} = require("discord.js");
const { sendResourceAdd } = require("../utils/embed");
/**
 * Register the command
 * @param {SlashCommandBuilder} command
 */
function registerCommand(command){
    command
        .addSubcommand( (subCmd) =>
            subCmd
                .setName("add")
                .setDescription("Add a resource")
                .addStringOption(opt =>
                    opt
                        .setName("name")
                        .setDescription("the name of the resource")
                        .setRequired(true))
                .addStringOption(opt =>
                    opt
                        .setName("link")
                        .setDescription("the link of the resource")
                        .setRequired(true))
                .addStringOption(opt =>
                    opt
                        .setName("description")
                        .setDescription("the description of the resource")
                        .setRequired(true))
        );
    
}

/**
 * Called to get an interaction response for this command.
 * @param {Interaction} interaction 
 */
async function interactionResponse(interaction){
    
    const name = interaction.options.getString("name") ?? "N/A";
    const link = interaction.options.getString("link") ?? "https://google.com";
    const desc = interaction.options.getString("description") ?? "Cool Qwerky Description";
    if( ! link.startsWith("http")){
        await interaction.reply("Cannot make this resource, the resource must have a valid URL!");
        return;
    }
    await sendResourceAdd(name, link, desc);
    await interaction.reply("Added Resource!");
}

module.exports = {
    registerCommand,
    interactionResponse
};
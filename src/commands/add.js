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
                        .setDescription("the name of the resource"))
                .addStringOption(opt =>
                    opt
                        .setName("link")
                        .setDescription("the link of the resource"))
                .addStringOption(opt =>
                    opt
                        .setName("description")
                        .setDescription("the description of the resource"))
        );
    
}

/**
 * Called to get an interaction response for this command.
 * @param {Interaction} interaction 
 */
async function interactionResponse(interaction){
    
    const name = interaction.options.getString("name");
    const link = interaction.options.getString("link");
    const desc = interaction.options.getString("description");
    if( ! link.startsWith("http")){
        await interaction.reply("Cannot make this resource, the resource must have a valid URL!");
        return;
    }
    await sendResourceAdd(interaction.options.getString("name"), interaction.options.getString("link"), interaction.options.getString("description"));
    await interaction.reply("Added Resource!");
}

module.exports = {
    registerCommand,
    interactionResponse
};
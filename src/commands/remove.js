const { SlashCommandBuilder } = require("@discordjs/builders");

/**
 * Register the command
 * @param {SlashCommandBuilder} command
 */
function registerCommand(command){
    command
        .addSubcommand( (subCmd) =>
            subCmd
                .setName("remove")
                .setDescription("Remove a resource")
                .addStringOption(opt =>
                    opt
                        .setName("name")
                        .setDescription("the name of the resource"))
        );   
}

module.exports.registerCommand = registerCommand;
const { SlashCommandBuilder } = require("@discordjs/builders");

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
module.exports.registerCommand = registerCommand;
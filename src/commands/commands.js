const { SlashCommandBuilder } = require("@discordjs/builders");
const { readdirSync } = require("fs");

const commands = {};

function mountSubCommands(cmd){
    const rootDir = `${__dirname}/`;
    const dirContent = readdirSync(rootDir);
    for(const file of dirContent){
        if(!file.endsWith(".js")  || file.endsWith(".test.js") || file === "commands.js") continue;
        
        const {registerCommand, interactionResponse} = require(`${rootDir}${file}`);
        commands[file.replace(".js", "")] = interactionResponse;
        registerCommand(cmd);
        
    }
}

function getInteractionResponse(cmdName){
    return commands[cmdName];
}

function generateCommandData(){
    const command = new SlashCommandBuilder()
        .setName("resource")
        .setDescription("Handles all of the commands for resource management.");

    mountSubCommands(command);

    return command.toJSON();
}

module.exports = {
    generateCommandData, 
    getInteractionResponse
};
const { parse } = require("toml");
const { readFileSync } = require("fs")
const config = parse(readFileSync(`${__dirname}/../config.toml`))

function getDiscordToken(){
    return config["discord"]["token"];
}

function getDiscordClientId(){
    return config["discord"]["clientId"];
}

function getDiscordGuildId(){
    return config["discord"]["guildId"];
}

function getDiscordChannelId(){
    return config["discord"]["channelId"];
}

module.exports = {
    getDiscordToken,
    getDiscordChannelId,
    getDiscordGuildId,
    getDiscordClientId
}
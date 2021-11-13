const { parse } = require("toml");
const { readFileSync } = require("fs")
const config = parse(readFileSync(`${__dirname}/../config.toml`))

function getDiscordToken(){
    return config["discord"]["token"]
}

module.exports.getDiscordToken = getDiscordToken;
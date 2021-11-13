import { parse } from "toml"
import { readFileSync } from "fs"
const config = parse(readFileSync("../config.toml"))

export function getDiscordToken(){
    return config["discord"]["token"]
}
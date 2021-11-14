const config = require("./config");

module.exports = (test, assert) =>{


    test("Config gets correct discord token", () =>{
        assert.strictEqual(config.getDiscordToken() !== undefined, true);
    });
    
    test("Config gets correct discord guild Id", () =>{
        assert.strictEqual(config.getDiscordGuildId() !== undefined, true);
    });

    test("Config gets correct discord channel Id", () =>{
        assert.strictEqual(config.getDiscordChannelId() !== undefined, true);
    });
    
    test("Config gets correct discord client Id", () =>{
        assert.strictEqual(config.getDiscordClientId() !== undefined, true);
    });
}
const add = require("./add");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = (test, assert) =>{

    const command = new SlashCommandBuilder();
    add.registerCommand(command);

    const option = command.options[0];

    test("Add command adds the correct name.", () =>{
        assert.strictEqual(option.name, "add");
    });
    
    test("Add command has every argument required.", () => {
        for(const opt of option.options){
            assert.strictEqual(opt.required, true);
        }
    });

    test("Add command has correct amount of arguments.", () => {
        assert.strictEqual(option.options.length, 3);
    });

    test("This test should fail!", ()=>{
        assert.strictEqual(1, 2);
    })
}
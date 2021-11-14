const commands = require("./commands");

module.exports = (test, assert) =>{


    test("Properly registers all valid commands.", () =>{
        
        try{
            commands.generateCommandData();
            assert.strictEqual(1, 1);
        }catch(err){
            assert.strictEqual(1, 2);
        }

    });

    test("Correctly gets interactions for command", ()=>{
        assert.strictEqual(commands.getInteractionResponse("add") !== undefined, true);
    })

}
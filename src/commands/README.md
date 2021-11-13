# Format
Each file in here (except commands.js) is expected to export methods: 
```js

/**
 * Registers a sub command and mounts information, such as
 * name description and other aspects of the command.
 * 
 * @param {SlashCommandSubcommandBuilder} subCmd the sub command to mount options to. 
**/
export function registerCommand(subCmd){

}
```

This method will be used as an entry point to register that command.
See add.js as an example.
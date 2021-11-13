const {MessageEmbed, EmbedFieldBuilder } = require("discord.js");
const { setupClient, getMainChannel } = require("../client.js");

async function sendResourceAdd(name, resource, desc){
    const channel = getMainChannel();
    channel.send({
        embeds: [
            new MessageEmbed()
                .setColor("#36393f")
                .setTitle(name)
                .setURL(resource)
                .setDescription(desc)
                .addField("Resource", resource, false)
                .setThumbnail(resource)
        ]
    });
}

module.exports = { sendResourceAdd }
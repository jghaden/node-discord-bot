const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('listen')
        .setDescription('Toggle when the bot needs to listen for input')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('Channel to listen on')
                .setRequired(true))
        // .addStringOption(option =>
        //     option.setName('type')
        //         .setDescription('Type of channel to listen on')
        //         .setRequired(true)                
        //         .addChoices(
        //             { name: 'Text', value: 'text' },
        //             { name: 'Voice', value: 'voice' },
        //         ))
        ,
    async execute(interaction) {
        const channel = interaction.options.getChannel('channel');
        const type = interaction.options.getString('type');

        await interaction.reply({ content: `Now listening on channel ${channel}`, ephemeral: true });
    }
}
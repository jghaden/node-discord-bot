const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true))
        .addBooleanOption(option =>
            option.setName('ephemeral')
                .setDescription('Whether or not the echo should be ephemeral'))
        ,
    async execute(interaction) {
        const input = interaction.options.getString('input');
        const isEphemeral = interaction.options.getBoolean('ephemeral') ?? true;

        await interaction.reply({ content: `\*\*Echo:\*\* ${input}`, ephemeral: isEphemeral });
    }
}
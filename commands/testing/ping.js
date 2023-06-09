const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with roundtrip latency in milliseconds'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Pinging...', ephemeral: true, fetchReply: true });
        interaction.editReply({ content: `\*\*Roundtrip latency:\*\* ${sent.createdTimestamp - interaction.createdTimestamp}ms`, ephemeral: true });
    }
}
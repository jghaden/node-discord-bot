const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('whisper')
        .setDescription('Use the bot to message another user')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('The message to send to the user')
                .setRequired(true))
        .addUserOption(option =>
            option.setName('user')
            .setDescription('User to send the message to')
            .setRequired(true))
        ,
    async execute(interaction) {
        const input = interaction.options.getString('message');
        const user = interaction.options.getUser('user');
        const author = interaction.member.user;

        const message = await interaction.reply({ content: `Sending **\"${input}\"** to ${user}...`, ephemeral: true, fetchReply: true });

        user.send(`**${author.username} whispered:** ${input}`)
            .then(() => interaction.editReply({ content: `Message **\"${input}\"** sent to ${user}!`}))
            .catch((error) => {
                console.error(error);

                interaction.editReply({ content: `Message **\"${input}\"** could not be sent to ${user}!`});
            });
    }
}
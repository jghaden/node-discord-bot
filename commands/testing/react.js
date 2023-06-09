const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('react')
        .setDescription('Reacts with an emoji')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The emoji category')
                .setRequired(true)                
                .addChoices(
                    { name: 'Fruits', value: 'fruits' },
                    { name: 'Vegetables', value: 'vegetables' },
                ))
        ,
    async execute(interaction) {
        const category = interaction.options.getString('category');

        const message = await interaction.reply({ content: `Reacting with ${category}!`, fetchReply: true });

        switch(category)
        {
            case 'fruits':
                Promise.all([
                    message.react('🍎'),
                    message.react('🍊'),
                    message.react('🍇'),
                ])
                    .catch(error => console.error('One of the emojis failed to react:', error));
                break;
            case 'vegetables':
                Promise.all([
                    message.react('🥕'),
                    message.react('🥬'),
                    message.react('🧅'),
                ])
                    .catch(error => console.error('One of the emojis failed to react:', error));
                break;
        }

        
    }
}
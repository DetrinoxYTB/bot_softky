const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
        .setName("resume")
        .setDescription("Reprends la chanson en cours."),
	async execute(interaction, client ){
		const queue = client.player.getQueue(interaction.guild)
		if (!queue)
		{
			await interaction.reply("il n'y a pas de chansons en cours.")
			return;
		}

		queue.setPaused(false);

        await interaction.reply("Le lecteur a été mis en pause.")
	},
}
const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
        .setName("pause")
        .setDescription("Met en pause la chanson en cours"),
	async execute(interaction, client){
		const queue = client.player.getQueue(interaction.guild)

		if (!queue)
		{
			await interaction.reply("il n'y a pas de chansons en cours.")
			return;
		}

        // Pause the current song
		queue.setPaused(true);

        await interaction.reply("Le lecteur a été mis en pause.")
	},
}
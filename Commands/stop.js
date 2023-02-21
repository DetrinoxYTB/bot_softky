const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder()
        .setName("stop")
        .setDescription("Expulsez le bot du salon vocal."),
	execute: async ({ client, interaction }) => {

		const queue = client.player.getQueue(interaction.guildId)

		if (!queue)
		{
			await interaction.reply("Il n'y a pas de chansons dans la file d'attente")
			return;
		}

		queue.destroy();

        await interaction.reply("Why you do this to me?")
	},
}
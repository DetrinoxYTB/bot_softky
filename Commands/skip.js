const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("Ignore la chanson en cours"),

	async execute(interaction, client  ){

		const queue = client.player.getQueue(interaction.guild)

		if (!queue)
        {
            await interaction.reply("Il n'y a pas de chansons en cours");
            return;
        }

        const musiqueEnCours = queue.current

		queue.skip()

        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`${musiqueEnCours.title} a été ignoré!`)
                    .setThumbnail(musiqueEnCours.thumbnail)
            ]
        })
	}
}
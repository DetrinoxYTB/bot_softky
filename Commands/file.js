
const { EmbedBuilder, SlashCommandBuilder} = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("queue")
        .setDescription("affiche les 10 premières chansons de la file d'attente"),

    async execute(interaction, client){
        const queue = client.player.getQueue(interaction.guild)
        if (!queue || !queue.playing)
        {
            await interaction.reply("Il n'y a pas de chansons dans la file d'attente");
            return;
        }

        const queueString = queue.tracks.slice(0, 10).map((song, i) => {
            return `${i}) \`[${song.duration}]\` ${song.title} de ${song.author} | **${song.source}** | - <@${song.requestedBy.id}>\n`
        }).join("\n")
        const currentSong = queue.current
        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`**Lecture en cours**\n` + 
                        (currentSong ? `\`[${currentSong.duration}]\` ${currentSong.title} de ${currentSong.author} | **${currentSong.source}** | - <@${currentSong.requestedBy.id}>` : "None") +
                        `\n\n**File d'attente**\n${queueString}`
                    )
                    .setThumbnail(currentSong.setThumbnail)
            ]
        })
    }
}
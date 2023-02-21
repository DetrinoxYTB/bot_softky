const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { QueryType } = require("discord-player")
module.exports = {
    data: new SlashCommandBuilder()
        .setName("play")
        .setDescription("Cette commande permet de metre une vidéo.")
        .addSubcommand(subcommand =>
            subcommand
                .setName("musique")
                .setDescription("Joue une vidéo YT avec une url.")
                .addStringOption(option => 
                    option
                        .setName("url")
                        .setDescription("L'url de la vidéo YT.")
                        .setRequired(true)
                )    
        )

        .addSubcommand(subcommand =>
            subcommand
                .setName("playlist")
                .setDescription("Joue une playlist YT avec une url.")
                .addStringOption(option => 
                    option
                        .setName("url")
                        .setDescription("L'url de la vidéo YT.")
                        .setRequired(true)
                )    
        )

        .addSubcommand(subcommand =>
            subcommand
                .setName("chercher")
                .setDescription("Joue une vidéo YT avec des mots-clés.")
                .addStringOption(option => 
                    option
                        .setName("mots-clées")
                        .setDescription("Les mots-clées de la vidéo.")
                        .setRequired(true)
                )    
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("spotify-m")
                .setDescription("Joue une music spotify avec une url.")
                .addStringOption(option => 
                    option
                        .setName("url")
                        .setDescription("L'url de la music spotify.")
                        .setRequired(true)
                )    
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("spotify-p")
                .setDescription("Joue une playlist spotify avec une url.")
                .addStringOption(option => 
                    option
                        .setName("url")
                        .setDescription("L'url de la music spotify.")
                        .setRequired(true)
                )    
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("spotify-a")
                .setDescription("Joue un album de spotify avec une url.")
                .addStringOption(option => 
                    option
                        .setName("url")
                        .setDescription("L'url de la music spotify.")
                        .setRequired(true)
                )    
        ),
    
    async execute(interaction, client){
        if(!interaction.member.voice.channel) return interaction.reply({content:"Veuillez vous mettre dans un salon vocal.",ephemral:true})

        const queue = client.player.createQueue(interaction.guild)

        if(!queue.connection) await queue.connect(interaction.member.voice.channel)

        let embed = new EmbedBuilder()

        if(interaction.options.getSubcommand() == "musique"){
            let url = interaction.options.getString("url")

            const result = await client.player.search(url,{
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_VIDEO
            })
            
            if(result.tracks == 0){
                interaction.reply({content:"Je n'ai pas trouvé la vidéo."})
            }
            const musique = result.tracks[0]
            await queue.addTrack(musique)
            embed
                .setDescription(`**[${musique.title}](${musique.url})** a été ajouté à la file d'attente`)
                .setThumbnail(musique.thumbnail)
                .setFooter({ text: `Durée: ${musique.duration}`})
        }
        
        else if(interaction.options.getSubcommand() == "playlist"){
            let url = interaction.options.getString("url")

            const result = await client.player.search(url,{
                requestedBy: interaction.user,
                searchEngine: QueryType.YOUTUBE_PLAYLIST
            })
            
            if(result.tracks == 0){
                interaction.reply({content:"Je n'ai pas trouvé la vidéo."})
            }
            const playlist = result.tracks[0]
            await queue.addTrack(playlist)
            embed
                .setDescription(`**[${playlist.title}](${playlist.url})** a été ajouté à la file d'attente`)
                .setThumbnail(playlist.thumbnail)
                .setFooter({ text: `Durée: ${playlist.duration}`})
        }

        else if(interaction.options.getSubcommand() == "chercher"){
            let url = interaction.options.getString("mots-clées")

            const result = await client.player.search(url,{
                requestedBy: interaction.user,
                searchEngine: QueryType.AUTO
            })
            
            if(result.tracks == 0){
                interaction.reply({content:"Je n'ai pas trouvé la vidéo."})
            }

            const chercher = result.tracks[0]
            await queue.addTrack(chercher)
            embed
                .setDescription(`**[${chercher.title}](${chercher.url})** a été ajouté à la file d'attente`)
                .setThumbnail(chercher.thumbnail)
                .setFooter({ text: `Durée: ${chercher.duration}`})
        }
        else if(interaction.options.getSubcommand() == "spotify-m"){
            let url = interaction.options.getString("url")

            const result = await client.player.search(url,{
                requestedBy: interaction.user,
                searchEngine: QueryType.SPOTIFY_SONG
            })
            
            if(result.tracks == 0){
                interaction.reply({content:"Je n'ai pas trouvé la vidéo."})
            }
            const chercher = result.tracks[0]
            await queue.addTrack(chercher)
            embed
                .setDescription(`**[${chercher.title}](${chercher.url})** a été ajouté à la file d'attente`)
                .setThumbnail(chercher.thumbnail)
                .setFooter({ text: `Durée: ${chercher.duration}`})
        }
        else if(interaction.options.getSubcommand() == "spotify-p"){
            let url = interaction.options.getString("url")

            const result = await client.player.search(url,{
                requestedBy: interaction.user,
                searchEngine: QueryType.SPOTIFY_PLAYLIST
            })
            
            if(result.tracks == 0){
                interaction.reply({content:"Je n'ai pas trouvé la vidéo."})
            }
            const chercher = result.tracks[0]
            await queue.addTrack(chercher)
            embed
                .setDescription(`**[${chercher.title}](${chercher.url})** a été ajouté à la file d'attente`)
                .setThumbnail(chercher.thumbnail)
                .setFooter({ text: `Durée: ${chercher.duration}`})
        }
        else if(interaction.options.getSubcommand() == "spotify-a"){
            let url = interaction.options.getString("url")

            const result = await client.player.search(url,{
                requestedBy: interaction.user,
                searchEngine: QueryType.SPOTIFY_ALBUM
            })
            
            if(result.tracks == 0){
                interaction.reply({content:"Je n'ai pas trouvé la vidéo."})
            }
            console.log(result.tracks[0])
            const chercher = result.tracks[0]
            await queue.addTrack(chercher)
            embed
                .setDescription(`**[${chercher.title}](${chercher.url})** a été ajouté à la file d'attente`)
                .setThumbnail(chercher.thumbnail)
                .setFooter({ text: `Durée: ${chercher.duration}`})
        }
        try{
            if (!queue.playing) await queue.play()
        } catch(err){
            console.log(err)
        }
        await interaction.channel.send({
            embeds: [embed]
        })
    }
}
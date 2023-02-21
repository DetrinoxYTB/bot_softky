const { EmbedBuilder} = require("discord.js")
module.exports = {
    name: "messageCreate",
    once: false,

    execute(message,client){
        if(message.author.bot == true){
            return
        }else{
            if(message.author.id == "711955967264424139"){
                if(message.content == "!reglement"){
                                var embed = new EmbedBuilder()
                .setColor(0x00e7ff)
                .setTitle("Le règlement")
                .setURL("https://www.youtube.com/channel/UC1ZRg4yxIDriBLvbWXDiXiA")
                .setDescription("**\nNous allons traiter le règlement sous divers catégories :**")
                .addFields({name:"**\n1 - Général\n\n2 - Les salons textuels\n\n3 - Les salons vocaux\n\n4 - La modération\n\n5 - La programmation**",value:"**\nMais avant de les traiter, je tiens à vous préciser que les propos/contenus insultants, homophobes, antisémites, racistes, xénophobes, obscènes, malsaine, à caractère pornographique, pédophile et autres. Sont formellement interdits sur ce serveur que ce soit dans les salons textuels ou vocaux.**"},
                {name:"**__\n1 - Général :__**",value:"**\n1) Nous respectons les T.O.S. (Terms of Service) appliqué par Discord.\n2) Vous êtes libre d'aimer ce que vous voulez, respectez les goûts des autres également.\n3) Les décisions des staffs sont irrévocables. Si vous êtes remis à l'ordre par un membre du staff, tachez de respecter l'autorité qu'ils exercent.\n4) Les sujets sensibles comme la politique ou la religion sont a éviter, nous avons tous des avis différents qui peuvent malheureusement créer des conflits.**"},
                {name:"**__\n2 - Les salons textuels :__**",value:"**\n1) Évitez au maximum le spam et l'excès de réactions.\n2) Les publicités telles que les serveurs discord, les bots et autres sont interdites.\n3) Veillez à bien utiliser les salons appropriés.\n4) Chaque membre est tenu d'être poli et respectueux envers les autres.**"},
                {name:"**__\n3 - Les salons vocaux:__**",value:"**\n1)  Les salons vocaux sont soumis aux mêmes règles que les salons écrits.\n2) Interdiction de faire des bruits de saturations avec votre micro.\n3) Eviter d'abuser des logiciels de type modificateurs de voix / d’effets sonores (dits « soundboards »).\n4) Veillez a bien vous entendre au niveau des bots musicaux (**Chacun son tour**).**"},
                {name:"**__\n4 - La modération:__**",value:"**\n1)  L'équipe de modération assure la tranquillité du serveur. En cas de problème urgent, vous pouvez les mentionner en faisant <@&1041505193147248662>.\n2) La modération dispose de commandes (Les principaux sont le kick, le mute et le ban). Elles ont la liberté d'agir contre les personnes nuisant à la tranquillité du serveur meme si les problèmes rencontrés ne rentrent pas dans un articles du règlement.\n3) Contourner un bannissement en créant des comptes secondaires est interdit, et est passible de sanctions de la part de Discord.\n4) Nous demandons aux membres de ne pas inciter à une sanction envers d’autres membres ou de se comporter comme des modérateurs.**"},
                {name:"**__\n5 - La programmation:__**",value:"**\n1)  Les sujets tels que le piratage informatique, les comptes d'utilisateurs automatisés (dits «self bots » en anglais), la vente de bots, de boosts ou de Nitro sont formellement interdits. Les logiciels malveillants, de triche ou autre s'appliquent aussi à cette règle.\n2) Ne pas envoyer votre problème dans tous les salons d'entraide, un seul suffit, choisissez simplement un salon qui n'est pas occupé.\n3) Envoyez votre code et votre erreur comme spécifié ci-joint : https://discord.com/channels/922946846459068437/922946847725719569/938501514450837565.\n4) Ne pas mentionner pour obtenir de l'aide. Patientez jusqu'à ce qu'un développeur ou autre vienne vous aider.**"})
                                message.channel.send({embeds:[embed]}).then(message => message.react("✅"))
                }
                if(message.content == "!r"){
                    message.channel.send("Comment prendre les rôles ?\n\n*• Pour récupérer un rôle, il suffit de cliquer sur la réaction lié au rôle en dessous du messages.*\n\n> Les rôles : \n> ▪︎ :computer: Vous donne le rôle <@&1041508987897651300>\n> ▪︎ :mobile_phone:Vous donne le rôle <@&1041514174435573802>").then(
                        message => message.react("💻")
                        .then(() => message.react('📱'))
                    )
                }
                if(message.content == "!rp"){
                    message.channel.send("Comment prendre les rôles ?\n\n*• Pour récupérer un rôle, il suffit de cliquer sur la réaction lié au rôle en dessous du messages.*\n\n> Les rôles : \n> ▪︎ <:python:1042230931454431233> Vous donne le rôle <@&1041517195882147871>\n> ▪︎ <:js:1042230558270431262> Vous donne le rôle <@&1041517505014939709>\n> ▪︎ <:html:1042229958992478208> Vous donne le rôle <@&1041517663148589116>\n> ▪︎ <:css:1042230189255573595> Vous donne le rôle <@&1041517750251700235>\n> ▪︎ <:ch:1042230682035962007> Vous donne le rôle <@&1042237376174489680>\n> ▪︎ <:cp:1042230785165512745>  Vous donne le rôle <@&1041639166720606258>").then(
                        message => message.react("1042230931454431233")
                        .then(() => message.react('1042230558270431262'))
                        .then(() => message.react('1042229958992478208'))
                        .then(() => message.react('1042230189255573595'))
                        .then(() => message.react('1042230682035962007'))
                        .then(() => message.react('1042230785165512745'))
                    )
                }
                if(message.content == "!ra"){
                    message.channel.send("Comment prendre les rôles ?\n\n*• Pour récupérer un rôle, il suffit de cliquer sur la réaction lié au rôle en dessous du messages.*\n\n> Les rôles : \n> ▪︎ :computer: Vous donne le rôle <@&1041514510239932476>\n> ▪︎ <:playstation:1042228783865942026> Vous donne le rôle <@&1041514719820918916>\n> ▪︎ <:xbox:1042229095360114758> Vous donne le rôle <@&1041515804803469322>\n> ▪︎ <:switch:1042229531035058176> Vous donne le rôle <@&1041515030279098368>").then(
                        message => message.react("💻")
                        .then(() => message.react('1042228783865942026'))
                        .then(() => message.react('1042229095360114758'))
                        .then(() => message.react('1042229531035058176'))
                    )
                }
                if(message.content == "!rj"){
                    message.channel.send("Comment prendre les rôles ?\n\n*• Pour récupérer un rôle, il suffit de cliquer sur la réaction lié au rôle en dessous du messages.*\n\n> Les rôles : \n> ▪︎ <:apexlegend:1042231158051704922> Vous donne le rôle <@&1041640245977952337>\n> ▪︎ <:fortnite:1042231290180685934> Vous donne le rôle <@&1041640373333790780>\n> ▪︎ <:valorant:1042231764946522163> Vous donne le rôle <@&1041640674002485248>\n> ▪︎ <:overwatch:1042231374482001971> Vous donne le rôle <@&1041640504024121374>").then(
                        message => message.react("1042231158051704922")
                        .then(() => message.react('1042231290180685934'))
                        .then(() => message.react('1042231764946522163'))
                        .then(() => message.react('1042231374482001971'))
                    )
                }
            }
        }
        
    }
}
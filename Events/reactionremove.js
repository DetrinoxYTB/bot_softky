module.exports = {
    name: "messageReactionRemove",
    once: false,

    execute(reaction,user,client){
        var member = reaction.message.guild.members.cache.get(user.id)
        //Règlement
        if(reaction.message.id === "1043941151624925206"){
            if(reaction.emoji.name == "✅"){
                member.roles.add("1043628850564833300")

            }
        }
        //【🎮】・𝐑𝐨𝐥𝐞𝐬
        if(reaction.message.id === "1043938014436528229"){
            if(reaction.emoji.name == "💻"){
                member.roles.remove("1041508987897651300")

            }

            if(reaction.emoji.name == "📱"){
                member.roles.remove("1041514174435573802")

            }
        }
        //【🖥】・𝐑𝐨𝐥𝐞𝐬-𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐚𝐭𝐢𝐨𝐧
        if(reaction.message.id === "1043941437395439638"){
            if(reaction.emoji.id == "1042230931454431233"){
                member.roles.remove("1041517195882147871")

            }
            if(reaction.emoji.id == "1042230558270431262"){
                member.roles.remove("1041517505014939709")

            }
            if(reaction.emoji.id == "1042229958992478208"){
                member.roles.remove("1041517663148589116")

            }
            if(reaction.emoji.id == "1042230189255573595"){
                member.roles.remove("1041517750251700235")

            }
            if(reaction.emoji.id == "1042230682035962007"){
                member.roles.remove("1042237376174489680")

            }

            if(reaction.emoji.id == "1042230785165512745"){
                member.roles.remove("1041639166720606258")

            }

        }
        //【📲】・𝐑𝐨𝐥𝐞𝐬-𝐀𝐩𝐩𝐚𝐫𝐞𝐢𝐥𝐬
        if(reaction.message.id === "1043941482215772170"){
            if(reaction.emoji.name == "💻"){
                member.roles.remove("1041514510239932476")

            }

            if(reaction.emoji.id == "1042228783865942026"){
                member.roles.remove("1041514719820918916")

            }

            if(reaction.emoji.id == "1042229095360114758"){
                member.roles.remove("1041515804803469322")

            }
            
            if(reaction.emoji.id == "1042229531035058176"){
                member.roles.remove("1041515030279098368")

            }
        }
        //【🕹】・𝐑𝐨𝐥𝐞𝐬-𝐉𝐞𝐮𝐱
        if(reaction.message.id === "1043941492823175249"){
            if(reaction.emoji.id == "1042231158051704922"){
                member.roles.remove("1041640245977952337")

            }

            if(reaction.emoji.id == "1042231290180685934"){
                member.roles.remove("1041640373333790780")

            }

            if(reaction.emoji.id == "1042231764946522163"){
                member.roles.remove("1041640674002485248")

            }

            if(reaction.emoji.id == "1042231374482001971"){
                member.roles.remove("1041640504024121374")

            }
        }
    }
}
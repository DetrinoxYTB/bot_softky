module.exports = {
    name: "messageReactionRemove",
    once: false,

    execute(reaction,user,client){
        var member = reaction.message.guild.members.cache.get(user.id)
        //Rรจglement
        if(reaction.message.id === "1043941151624925206"){
            if(reaction.emoji.name == "โ"){
                member.roles.add("1043628850564833300")

            }
        }
        //ใ๐ฎใใป๐๐จ๐ฅ๐๐ฌ
        if(reaction.message.id === "1043938014436528229"){
            if(reaction.emoji.name == "๐ป"){
                member.roles.remove("1041508987897651300")

            }

            if(reaction.emoji.name == "๐ฑ"){
                member.roles.remove("1041514174435573802")

            }
        }
        //ใ๐ฅใใป๐๐จ๐ฅ๐๐ฌ-๐๐ซ๐จ๐ ๐ซ๐๐ฆ๐ฆ๐๐ญ๐ข๐จ๐ง
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
        //ใ๐ฒใใป๐๐จ๐ฅ๐๐ฌ-๐๐ฉ๐ฉ๐๐ซ๐๐ข๐ฅ๐ฌ
        if(reaction.message.id === "1043941482215772170"){
            if(reaction.emoji.name == "๐ป"){
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
        //ใ๐นใใป๐๐จ๐ฅ๐๐ฌ-๐๐๐ฎ๐ฑ
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
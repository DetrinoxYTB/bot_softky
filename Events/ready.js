const { ActivityType } = require("discord.js")
const fs = require("fs")



//création de la connection
module.exports = {
    name: "ready",
    once: true,
    execute(client){
        client.user.setPresence({activities: [{name:`Les membres du serveur Entraide Informatique | Détrox`,type:ActivityType.Watching}],status:"online"})
        console.log("\n" + client.user.tag + " est connecté !")
    }
}


const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script2",
    alias: ["sc2","repo2","info2"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT CREATE:*
*|* *WATSON-FOURPENCE*

> *AWAIS MD REPO:*
*|* *https://github.com/watson-xd6/PRECIOUS-MD*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vb2bsRhLCoWthwxUC82B*
*╰──────────────●●►*

> *POWERED BY WATSON FOURPENCE*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363391539600226@newsletter',
      newsletterName: "PRECIOUS",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'PRECIOUS MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/watson-xd6/PRECIOUS-MD" ,
thumbnailUrl: "https://files.catbox.moe/2899fa.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});

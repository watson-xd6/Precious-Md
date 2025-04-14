const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["watson","fourpence"], 
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `
*╭━━〔 *PRECIOUS-MD* 〕━━┈⊷*

*👋 HELLO ${pushname}*

*╰──────────────┈⊷*
*╭━━━〔 MY ABOUT 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *ᴡᴇʟᴄᴏᴍᴇ T҉O҉  Pℛℯ☪¡ℴų₷-Mð*
*┃★│* *ᴄʀᴇᴀᴛᴇʀ : wᴀтsoɴ-xᴅ*
*┃★│* *ʀᴇᴀʟ ɴᴀᴍᴇ : WɑʈꜱøɲFøυɾρєɲɔє*
*┃★│* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ : wᴀтsoɴ-xᴅ*
*┃★│* *ᴀɢᴇ : 21 ʏᴇᴀʀ*
*┃★│* *ᴄɪᴛʏ : нᴀʀᴀʀᴇ,Zιмʙᴀʙwᴇ🇿🇼*
*┃★│* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SPECIAL THANKS FOR • ]*
*╭━━━〔 THANKS TO 〕━━━┈⊷*
*┃★╭──────────────*
*┃★│* *▢my self watsonfourpence*
*┃★│* *▢nteej*
*┃★│* *▢romek-xd*
*┃★│* *▢jawad and his team*
*┃★│* *▢my country(🇿🇼)*
*┃★╰──────────────*
*╰━━━━━━━━━━━━━━━┈⊷*

*•────────────•⟢*
> ©PȏẇєяєԀ ɞʏ WѧṭṡȏṅFȏȗяƿєṅc̫є
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:`https://files.catbox.moe/2899fa.jpg`},caption:about,
                             contextInfo: {
    mentionedJid: [m.sender],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363391539600226@newsletter',
      newsletterName: 'PRECIOUS-MD',
      serverMessageId: 999
    }
  }
}, { quoted: mek });
} catch (e) {
console.log(e)
reply(`${e}`)
}
})

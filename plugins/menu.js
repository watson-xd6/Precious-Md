const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚‍♀️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
╭─❍ *「 ${config.BOT_NAME} MENU 」* ❍─╮
│
├• *Owner:* ${config.BOT_NAME}
├• *Mode:* ${config.MODE}
├• *Prefix:* ${config.PREFIX}
├• *Version:* 2.0.0
├• *Platform:* Heroku
├• *Baileys:* Multi-Device
│
╰─╼━━━━━━━━━━━━━━━━╾─╯

╭─⊷ *COMMAND CATEGORIES*
│
├◉ .aimenu
├◉ .animemenu
├◉ .convertmenu
├◉ .funmenu
├◉ .dlmenu
├◉ .listcmd
├◉ .mainmenu
├◉ .allmenu
├◉ .groupmenu
├◉ .ownermenu
├◉ .othermenu
├◉ .repo
├◉ .logo <text>
├◉ .bugmenu
├◉ .antidel

╰─╼━━━━━━━━━━━━━━━━╾─╯

${config.CAPTION}
`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpgg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: 'PRECIOUS MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://s31.aconvert.com/convert/p3r68-cdx67/60blc-f5c57.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭──❍ *「 DOWNLOAD MENU 」* ❍─╮
│
├◉ .facebook
├◉ .mediafire
├◉ .tiktok
├◉ .twitter
├◉ .Insta
├◉ .apk
├◉ .img
├◉ .play
├◉ .play2
├◉ .audio
├◉ .video
├◉ .video2
├◉ .ytmp3
├◉ .ytmp4
├◉ .song
├◉ .darama
├◉ .gdrive
├◉ .smovie
├◉ .baiscope
├◉ .ginisilia
╰─╼━━━━━━━━━━━━━━━━╾─╯
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: 'PRECIOUS MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "👨‍👩‍👧‍👧",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `╭─❍ *「 GROUP MENU 」* ❍─╮
│
├◉ .grouplink
├◉ .setgoodbye
├◉ .setwelcome
├◉ .add
├◉ .remove
├◉ .kick
├◉ .promote
├◉ .demote
├◉ .dismiss
├◉ .revoke
├◉ .delete
├◉ .repo
├◉ .getpic
├◉ .ginfo
├◉ .delete
├◉ .disappear on
├◉ .disappear off
├◉ .disappear 7D,24H
├◉ .allreq
├◉ .updategname
├◉ .updategdesc
├◉ .joinrequests
├◉ .senddm
├◉ .nikal
├◉ .mute
├◉ .unmute
├◉ .lockgc
├◉ .unlockgc
├◉ .invite
├◉ .tag
├◉ .hidetag
├◉ .tagall
├◉ .tagadmins
╰─╼━━━━━━━━━━━━━━━━╾─╯
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: 'PRECIOUS MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = ` ╭─❍ *「 FUN MENU 」* ❍─╮
│
├◉ .insult
├◉ .hack
├◉ .joke
├◉ .heart
├◉ .happy
├◉ .sad
├◉ .angry
├◉ .shy
├◉ .kiss
├◉ .moon
├◉ .cunfuzed
├◉ .hand
├◉ .nikal
╰─╼━━━━━━━━━━━━━━━━╾─╯
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: 'AWAIS MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` ╭─❍ *「 OTHER MENU 」* ❍─╮
│
├◉ .srepo
├◉ .fact
├◉ .font
├◉ .define
├◉ .news
├◉ .movie
├◉ .weather
├◉ .insult
├◉ .save
├◉ .wikipedia
├◉ .gpass
├◉ .githubstalk
├◉ .yts
├◉ .ytv
╰─╼━━━━━━━━━━━━━━━━╾─╯
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: 'PRECIOUS MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` ╭──❍ *「 MAIN MENU 」* ❍─╮
│
├◉ .ping
├◉ .alive
├◉ .runtime
├◉ .uptime
├◉ .owner
├◉ .menu
├◉ .menu2
├◉ .restart
╰─╼━━━━━━━━━━━━━━━━╾─╯
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: 'PRECIOUS MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` ╭──❍ *「 OWNER MENU 」* ❍─╮
│
├◉ .owner
├◉ .menu
├◉ .menu2
├◉ .allmenu
├◉ .block
├◉ .unblock
├◉ .fullpp
├◉ .setpp
├◉ .restart
├◉ .shutdown
├◉ .updatecmd
├◉ .alive
├◉ .gjid
├◉ .ping
├◉ .jid
╰─╼━━━━━━━━━━━━━━━━╾─╯
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: 'PRECIOUS MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` ╭──❍*「 CONVERTER MENU 」* ❍─╮
│
├◉ .sticker
├◉ .sticker2
├◉ .fancy
├◉ .take
├◉ .tomp3
├◉ .tts
├◉ .trt
╰─╼━━━━━━━━━━━━━━━━╾─╯
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: 'PRECIOUS MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = ` ╭──❍*「 ANIME MENU 」* ❍─╮
│
├◉ .dog
├◉ .king
├◉ .animegirl
├◉ .animegirl1
├◉ .animegirl2
├◉ .animegirl3
├◉ .animegirl4
├◉ .animegirl5
╰─╼━━━━━━━━━━━━━━━━╾─╯
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: 'PRECIOUS MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` ╭──❍*「 AI MENU 」* ❍─╮
│
├◉ .ai
├◉ .gpt
├◉ .meta
├◉ .gpt4
├◉ .blackbox
├◉ .bing
├◉ .copilot
╰─╼━━━━━━━━━━━━━━━━╾─╯  
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: 'PRECIOUS MD',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// bug menu 

cmd({
    pattern: "bugmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` ╭──❍ *「 BUG COMING SOON😁 」* ❍─╮
│
├◉ .𝑪𝑹𝑨𝑺𝑯(+263****)
├◉ .𝑿𝑫(+263****)
├◉ .𝑶𝑻𝑷𝑳𝑶𝑪𝑲(+263781****)
├◉ .𝑻𝑬𝑴𝑷𝑩𝑨𝑵(+263781*****)
├◉ .𝑮𝑪𝑪𝑹𝑨𝑺𝑯(𝑮𝑹𝑶𝑼𝑷 𝑳𝑰𝑵𝑲)
├◉ .𝑮𝑪𝑪𝑹𝑨𝑺𝑯(𝑼𝑺𝑬 𝑻𝑯𝑰𝑺 𝑪𝑴𝑫 𝑰𝑵 𝑮𝑪)
├◉ .𝑩𝑼𝑮(+263******)
╰─╼━━━━━━━━━━━━━━━━╾─╯
> ${config.CAPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2899fa.jpgg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391539600226@newsletter',
                        newsletterName: '𝐖𝐀𝐓𝐒𝐎𝐍-𝐗𝐃-𝐁𝐎𝐓',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

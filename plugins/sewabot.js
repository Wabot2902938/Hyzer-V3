let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 SEWA BOT 〕 ════
├⬡ 𝟏 ᗰIᑎᘜᘜᑌ
├⬡ 1 ᗷᑌᒪᗩᑎ
├⬡ 2 ᗷᑌᒪᗩᑎ
├⬡ Permanent
└═══════════════
𝗦𝗶𝗹𝗮𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐓𝐎𝐏𝐔𝐏 〕 ❉──────
║│➸ *Dana* : 081233738677
║│➸ *Gopay*: 081233738677
║│➸ *Owner*: wa.me/6281233738677
║╰─────────────────────
╰═══════════════════════`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '1 Minggu', description: "Rm5.00\nSewa bot 1 Minggu.", rowId:".masuk"},
        {title: '1 ᗷᑌᒪᗩᑎ', description: "Rm10.00\nSewa bot 2 Minggu.", rowId:".masuk"},
        {title: '2 ᗷᑌᒪᗩᑎ', description: "Rm15.00\nSewa bot 3 Minggu.", rowId:".masuk"},
        {title: 'Permanent', description: "Rm20.00\nSewa bot 1 Bulan.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Rules Bot Miku.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy

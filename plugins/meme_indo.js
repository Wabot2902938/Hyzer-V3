let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/meme/memeindo?apikey=Fiktod')
  let barbar = await url.json()
conn.sendButtonImg(m.chat, await (await fetch(barbar.result)).buffer(), '*MEME INDO*', watermark, 'NEXT', '.memeindo', m)
}
handler.help = ['memeindo']
handler.tags = ['fun']
handler.command = /^(memeindo|memein)$/i
handler.private = false
handler.limit = false

module.exports = handler

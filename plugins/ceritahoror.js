let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/ceritahoror?apikey=Fiktod')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
await conn.sendButtonLoc(m.chat, await (await fetch(json.thumb)).buffer(), `
_*${json.judul}*_
_${json.desc}_
`.trim(), watermark, 'Ceritahororr', `.ceritahorror`)
}
handler.help = ['ceritahoror', 'ceritahrorr']
handler.tags = ['internet', 'fun', 'quotes']
handler.command = /^ceritahoror|ceritahorror$/i


module.exports = handler

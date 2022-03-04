let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(reyganz + 'APIKEY')).buffer(), `
*O W N E R*

*SAWERIA:* https://saweria.co/PangeranLord
*TRAKKER:* https://trakteer.id/PangeranLord

*P E N U L I S*

*SAWERIA:* https://saweria.co/PangeranLord
*TRAKKER:* https://trakteer.id/PangeranLord/tip
`.trim(), wm, 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler

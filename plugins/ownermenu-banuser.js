let handler = async (m, { conn, text }) => {
    if (!text) throw '_*Siape Yang Mo Koko Pangeran Entod❓*_'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `_*Asik Berhasil Koko Pangeran Entod😗*_`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler

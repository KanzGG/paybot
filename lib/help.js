const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `🔰 -----[ *MENU ${kanzbot}* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ UANG : Rp:${uangku}
┃│➸ XP : ${reqXp}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${kanzbot} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
Jika tidak paham ketik *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭──────────────────
┃│➸ *${prefix}info*
┃│➸ *${prefix}donasi*
┃│➸ *${prefix}owner*
┃│───────────────────
┃│➸ *${prefix}simplemenu*
┃│➸ *${prefix}makermenu*
┃│➸ *${prefix}gabutmenu*
┃│➸ *${prefix}downloadmenu*
┃│➸ *${prefix}randommenu*
┃│➸ *${prefix}dompetmenu*
┃│➸ *${prefix}othermenu*
┃│➸ *${prefix}groupmenu*
┃│➸ *${prefix}soundmenu*
┃│➸ *${prefix}ownermenu*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${kanz ganz}* ]----- 🔰`
}
exports.help = help

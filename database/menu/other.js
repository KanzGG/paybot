const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OTHER MENU* ]----- 🔰
Hallo, ${pushname} 👋
Semoga harimu Menyenangkan User, ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${kanzbot} : ${_registered.length}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut adalah fitur yang ada pada bot ini!✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}brainly*
┃│➸ *${prefix}pinterest*
┃│➸ *${prefix}bitly*
┃│➸ *${prefix}moddroid*
┃│➸ *${prefix}happymod*
┃│➸ *${prefix}resepmakanan*
┃│➸ *${prefix}beritahoax*
┃│➸ *${prefix}mutual*
┃│➸ *${prefix}next*
┃│➸ *${prefix}virtex*
┃│➸ *${prefix}virtex2*
┃│➸ *${prefix}timer*
┃│➸ *${prefix}nulis1*
┃│➸ *${prefix}nulis2*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${kanz ganz}* ]----- 🔰`
}
exports.other = other
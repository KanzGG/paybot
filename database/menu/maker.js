const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *MAKER MENU* ]----- 🔰
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
Jika tidak paham ketik *${prefix}bingungcok*
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ *${prefix}hartatahta*
┃│➸ *${prefix}pornhub*
┃│➸ *${prefix}halloweentext*
┃│➸ *${prefix}ninjalogo*
┃│➸ *${prefix}cloudtext*
┃│➸ *${prefix}gemboktext*
┃│➸ *${prefix}glitchtext*
┃│➸ *${prefix}silktext*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
🔰 -----[ *POWERED BY ${kanz ganz}* ]----- 🔰`
}
exports.maker = maker
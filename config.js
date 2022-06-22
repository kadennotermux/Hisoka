/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/254732989905
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['254792893310','254732989905','254732989905']
global.premium = ['254726235745']
global.packname = 'Sketchy Stikaz '
global.author = 'Ginger'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Only Admins can use that ,pole!',
    botAdmin: '*Make Sure Bot is Admin* 🪛',
    owner: '*Only Ginger Can use this feature* 😎',
    group: '*😂😂Use Bot in Groups Only*',
    private: '*Can be used in private chats only*',
    bot: '🔱 *Sketchy bot here* 🔱',
    wait: 'Chill Msee😊.',
    endLimit: 'Your Limit Has reached Maximum come back tommorrow🥱⛔',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/a0c5f3eccbed496d2f174.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

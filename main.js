const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const figlet = require('figlet')
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color } = require('./lib/color')


require('./Oi.js')
nocache('./Oi.js', module => console.log(`${module} is now updated!`))


const starts = async (Ndyie = new WAConnection()) => {
    Ndyie.logger.level = 'warn'
    Ndyie.version = [2, 2143, 3]
    Ndyie.browserDescription = [ 'Chrome', '3.0' ]
    console.log(banner.string)
    console.log(color('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━','aqua'))
    function _0x56c0(){var _0x49e6b7=['log','49066AltUEb','1944872HswUSZ','237123PmUDZU','4293641uCPmnS','12fgJoJJ','orange','9XUojiC','\x0a[TERIMKASIH\x20BANYAK\x20KEPADA]\x0aNdyie\x20Botz\x0aNyx-Chan\x0aMelcanz\x0aCaliph\x0aYogi\x20Presetya','magenta','4856220XrZTQP','Script\x20Ini\x20Di\x20Lindungi\x20Oleh\x20Ndyie\x20Botz\x0a','9901650SPdmdF','12chTWgV','469VWxrxI','16ZDjRCv','14622PVhatp'];_0x56c0=function(){return _0x49e6b7;};return _0x56c0();}function _0x20cd(_0x42fa13,_0x3254b5){var _0x56c049=_0x56c0();return _0x20cd=function(_0x20cdcc,_0x1ad283){_0x20cdcc=_0x20cdcc-0x6f;var _0x499523=_0x56c049[_0x20cdcc];return _0x499523;},_0x20cd(_0x42fa13,_0x3254b5);}var _0x406503=_0x20cd;(function(_0xd1655f,_0x4c2860){var _0x5d38a7=_0x20cd,_0x3c2ac8=_0xd1655f();while(!![]){try{var _0x3ebccc=-parseInt(_0x5d38a7(0x70))/0x1*(-parseInt(_0x5d38a7(0x73))/0x2)+-parseInt(_0x5d38a7(0x75))/0x3*(-parseInt(_0x5d38a7(0x7f))/0x4)+parseInt(_0x5d38a7(0x7c))/0x5+-parseInt(_0x5d38a7(0x71))/0x6*(parseInt(_0x5d38a7(0x6f))/0x7)+parseInt(_0x5d38a7(0x74))/0x8*(-parseInt(_0x5d38a7(0x79))/0x9)+-parseInt(_0x5d38a7(0x7e))/0xa+-parseInt(_0x5d38a7(0x76))/0xb*(-parseInt(_0x5d38a7(0x77))/0xc);if(_0x3ebccc===_0x4c2860)break;else _0x3c2ac8['push'](_0x3c2ac8['shift']());}catch(_0x2b805d){_0x3c2ac8['push'](_0x3c2ac8['shift']());}}}(_0x56c0,0x912f1),console[_0x406503(0x72)](color(_0x406503(0x7d),_0x406503(0x78)),color(_0x406503(0x7a),_0x406503(0x7b))));
    console.log(color('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━','white'))
    Ndyie.on('qr', () => {
    Ndyie.sendMessage(`0@s.whatsapp.net`, `「 ASALAMULAIKUM 」`, MessageType.extendedText)
        console.log(color('[','white'), color('!','red'), color(']','white'), color('Scan Ngab, Ga Scan Mati Aja Anjeng'))
    })
  
    fs.existsSync('./Done.json') && Ndyie.loadAuthInfo('./Done.json')
    Ndyie.on('connecting', () => {
console.log(color('|NDY|'), color('Connecting, Pastikan Jaringan Bagus...', 'cyan'))
    })
Ndyie.on('open', () => {
console.log(color('|NDY|'), color('Connected, Ketik #menu di Whatsapp..!!', 'cyan'))
    })
Ndyie.on('ws-close', () => {
console.log(color('|NDY|'), color('Connection lost, trying to reconnect.', 'cyan'))
    })
Ndyie.on('close', async () => {
console.log(color('|NDY|'), color('Disconnected.', 'cyan'))
   })
await Ndyie.connect({timeoutMs: 30*1000})
fs.writeFileSync('./Done.json', JSON.stringify(Ndyie.base64EncodedAuthInfo(), null, '\t'))

Ndyie.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const mdata = await Ndyie.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Ndyie;;;\nFN:Ndyie\nitem1.TEL;waid=6283818744065:6283818744065\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await Ndyie.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`Halo @${num.split('@')[0]}\nSelamat Datang Di ${mdata.subject}`
            Ndyie.sendMessage(mdata.id, masuk, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./Poto/Ndyie.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Welcome To ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtu.be/7Fu6EpM6mos`}}})
			} else if (anu.action == 'remove') {
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Ndyie;;;\nFN:Ndyie\nitem1.TEL;waid=6283818744065:6283818744065\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await Ndyie.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`Selamat tinggal ${num.split('@')[0]}\nSemoga tentang disana`
            Ndyie.sendMessage(mdata.id, keluar, MessageType.text, { quoted: fkontakk, thumbnail: fs.readFileSync('./Poto/Ndyie.jpg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Keluar Dari ${mdata.subject}`,body:"",mediaType:"2",thumbnail:buff,mediaUrl:`https://youtu.be/7Fu6EpM6mos`}}})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Ndyie;;;\nFN:Ndyie\nitem1.TEL;waid=6283818744065:6283818744065\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n Username: ${num.split('@')[0]}\n Group: ${mdata.subject}`
Ndyie.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Ndyie;;;\nFN:Ndyie\nitem1.TEL;waid=6283818744065:6283818744065\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Group: ${mdata.subject}`
Ndyie.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
    Ndyie.on('chat-update', async (message) => {
        require('./Oi.js')(Ndyie, message)
    })
}


function nocache(module, cb = () => { }) {
    console.log(color('Module', 'green'), color(`'${module} Sc Ini Di Pantau Oleh Ndyie Botz '`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}


function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()

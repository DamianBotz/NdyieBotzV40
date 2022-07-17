/*
𝐜𝐫𝐞𝐚𝐭𝐨𝐫 𝐛𝐲 𝐍𝐝𝐲𝐢𝐞
*/
const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const ms = require('parse-ms')
const toMs = require('ms')
const crypto = require('crypto')  
const qrcode = require("qrcode-terminal")
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { exec, spawn, execSync } = require('child_process')

//<-------------------------------------------------->\\
//Jam By Ndyie Botz
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')    
//<-------------------------------------------------->\\

//<-------------------------------------------------->\\
//Lib By Ndyie Botz
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, fetchText } = require('./lib/fetcher')
const {  getBuffer,  h2k,  generateMessageID,  getGroupAdmins,  getRandom,  banner,  start,  info,  success,  close,} = require("./lib/functions");
//<-------------------------------------------------->\\
//ISI INI BANH
var yeteh = 'https://youtube.com/channel/UC9WgqpVGWW87R3RWjmAxZgg'
var vidioh = 'https://youtu.be/ZTS5FEbllFA'
var tiktoh = 'https://vt.tiktok.com/ZSeCjVNPL/'
var gc = 'https://chat.whatsapp.com/LIDA6ctWSn3BRQrlK4fiin'
var githud = 'http://github.com/Ndyie'
//<-------------------------------------------------->\\
var xdy = "◯"
var rdy = "⬡"
var jol = "•"
var ren = "々"
var ndy = "と"
const renday = "║▌│█║▌│ █║▌│█│║▌║"
//<-------------------------------------------------->\\

//<-------------------------------------------------->\\
//Poto By Ndyie Botz
var Ndyie = fs.readFileSync('./Poto/Ndyie.jpg')
var Joel = fs.readFileSync('./Poto/Joel.jpg')
var Rendy = fs.readFileSync('./Poto/Rendy.jpg')
//<-------------------------------------------------->\\
const pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
//<-------------------------------------------------->\\
//Fake Nama By Ndyie Botz
const fake = "Ndyie"
//<-------------------------------------------------->\\
const bot = '𝐖𝐈𝐁𝐔 𝐁𝐎𝐓'
public = false
antical = false
aread = false
ngetik = false
vn = true
//<-------------------------------------------------->\\
//Fake Nomer By Ndyie Botz
const owner = "6283818744065"
//<-------------------------------------------------->\\

//<-------------------------------------------------->\\
//Prefix By Ndyie Botz
var prefix = '#'
/*
prefixStatus = true;
*/
//<-------------------------------------------------->\\
//<-------------------------------------------------->\\
//Jam Bro :v
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat senja'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat pagi'
                                         }
if(time2 < "06:00:00"){
var ucapanWaktu = 'Selamat pagi'                                       }

//<-------------------------------------------------->\\
//Module By Ndyie Botz
module.exports = Ndyie = async (Ndyie, Ndy) => {
try {
if (!Ndy.hasNewMessage) return
Ndy = Ndy.messages.all()[0]
if (!Ndy.message) return
if (Ndy.key && Ndy.key.remoteJid == 'status@broadcast') return
if (Ndy.key.fromMe) return
global.prefix
global.blocked		
Ndy.message = (Object.keys(Ndy.message)[0] === 'ephemeralMessage') ? Ndy.message.ephemeralMessage.message : Ndy.message
const content = JSON.stringify(Ndy.message)
const from = Ndy.key.remoteJid
const type = Object.keys(Ndy.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const date = new Date().toLocaleDateString()
body = (type === 'conversation' && Ndy.message.conversation.startsWith(prefix)) ? Ndy.message.conversation : (type == 'imageMessage') && Ndy.message[type].caption.startsWith(prefix) ? Ndy.message[type].caption : (type == 'videoMessage') && Ndy.message[type].caption.startsWith(prefix) ? Ndy.message[type].caption : (type == 'extendedTextMessage') && Ndy.message[type].text.startsWith(prefix) ? Ndy.message[type].text : (type == 'listResponseMessage') && Ndy.message[type].singleSelectReply.selectedRowId ? Ndy.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && Ndy.message[type].selectedButtonId ? Ndy.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? Ndy.message.conversation : (type === 'extendedTextMessage') ? Ndy.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const botNumber = Ndyie.user.jid
const ownerNumber = [`6283818744065@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const botNumberss = Ndyie.user.jid + '@c.us'
const sender = Ndy.key.fromMe ? Ndyie.user.jid : isGroup ? Ndy.participant : Ndy.key.remoteJid;
let senderr = Ndy.key.fromMe ? Ndyie.user.jid : Ndy.key.remoteJid.endsWith("@g.us") ? Ndy.participant : Ndy.key.remoteJid;
const senderNumber = sender.split("@")[0]
const totalchat = await Ndyie.chats.all()
const groupMetadata = isGroup ? await Ndyie.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = Ndy.key.fromMe ? Ndyie.user.jid : Ndyie.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = Ndy.key.fromMe ? Ndyie.user.name : conts.notify || conts.vname || conts.name || '-'
chatss = (type === 'conversation') ? Ndy.message.conversation : (type === 'extendedTextMessage') ? Ndy.message.extendedTextMessage.text : ''
const isOwner = ownerNumber.includes(sender)
const isMybot = isOwner || Ndy.key.fromMe
const isUser = pendaftar.includes(sender)
const itsMe = Ndy.key.fromMe ? true : false
const q = args.join(" ");
//<-------------------------------------------------->\\

//<-------------------------------------------------->\\
//Mess By Ndyie Botz
mess = {
			wait: "Sabar Kack シ︎",
			success: "Berhasil Kack シ︎",
			error: {
				stick: "Gagal Kack Coba Lagi シ︎",
				Iv: "Link Nya Eror Kack シ︎"
			},
			only: {
				admin: "Kusus Atmin Kack シ︎",
				group: "Kusus Grup Kack シ︎"
			}
		}
//<-------------------------------------------------->\\

//<-------------------------------------------------->\\
         //FAKEREPLY PRODUCT
            const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpg","jpgThumbnail": fs.readFileSync(`./Poto/Ndyie.jpg`)},"title": `OPEN BO BANG?\n${pushname}`,"description": "Ndyie Botz", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "Ndyie Botz","productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
            //FAKE KONTAK
            const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpgThumbnail': fs.readFileSync('./Poto/Rendy.jpg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
            const fvn = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
            //FAKE TEXT
            const ftext = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpgThumbnail': fs.readFileSync('./Poto/Joel.jpg')}}}
            //FAKE LIVE ACTION
            const floc2 = {
                  key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6285878313791-60139571124@g.us" },message: { "liveLocationMessage": { "title":`${owner}`,}}}
           const ftrol = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2005,status: 1,surface : 1,message: `${owner}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./Poto/Ndyie.jpg'), sellerJid: '0@s.whatsapp.net'}}}
            //FAKEREPLY TROLI
            const ftroli = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "60139571124@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2005,status: 1,surface : 1,message: `${owner}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./Poto/Ndyie.jpg'), sellerJid: '0@s.whatsapp.net'}}}
            //FAKEREPLY VIDEO
            const fvideo = {
                  key: {fromMe: false,participant: `6285878313791@s.whatsapp.net`, ...(from ? { remoteJid: "6285878313791-60139571124@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fake}`,'jpgThumbnail': fs.readFileSync('./Poto/Rendy.jpg')}}}
            //FAKEREPLY GROUPINVITE
            const fgc = {
                  key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6285878313791-60139571124@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpgThumbnail': fs.readFileSync('./Poto/Rendy.jpg')}}}
            //FAKEREPLY GIF
            const fgif = {
                  key: {fromMe: false,participant: `6285878313791@s.whatsapp.net`, ...(from ? { remoteJid: "6285878313791-60139571124@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpgThumbnail': fs.readFileSync('./Poto/Rendy.jpg')}}} 
            //FAKE REPLY
            const reply = (teks) => {
            Ndyie.sendMessage(from, teks, text, {quoted:Ndy})
        }
const fakegroup = (teks) => {
      Ndyie.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "Poto/Ndyie.jpg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./Poto/Joel.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
        const fakestatus = (teks) => {
            Ndyie.sendMessage(from, teks, text, {
            quoted: {
            key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
            },
            message: {
            "imageMessage": {
            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
            "mimetype": "Poto/Ndyie.jpg",
            "caption": fake,
            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
            "fileLength": "28777",
            "height": 1080,
            "width": 1079,
            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
            "mediaKeyTimestamp": "1610993486",
            "jpegThumbnail": fs.readFileSync('./Poto/Rendy.jpg'),
            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
            }
            }
            }
            })
        }
    
   
//<-------------------------------------------------->\\

//<-------------------------------------------------->\\
//button
        const listmsg = (from, title, desc, list) => { 
            let po = Ndyie.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝑴𝑬𝑵𝑼","footerText": `Sc By Ndyie Botz`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return Ndyie.relayWAMessage(po, {waitForAck: true})
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Ndyie.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Ndyie.sendMessage(from, teks.trim(), extendedText, { quoted: Ndy, contextInfo: { "mentionedJid": memberr } })
        }
                    const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${owner}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        Ndyie.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:Ndy, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await Ndyie.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        Ndyie.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
if (isCmd && !isUser){
          pendaftar.push(sender)
          fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
        }
//RUNTIME BIO
           runi = process.uptime() 
           Ndyie.setStatus(`${kyun(runi)} Bot Aktif Selama`).catch((_)=>_);

           settingstatus = new Date() * 1;
           
//WAKTU PROFILE NAME (auto)
           Ndyie.updateProfileName(`HAI SAYA ${bot}`).catch((_)=>_);
           settingupdateprofilename = new Date() * 1;            
//<-------------------------------------------------->\\            
//<---------------------[ autoread ]----------------------------->\\
		if (aread){

	    Ndyie.chatRead(from, "read")
		}
		
//<---------------------[ autovn ]----------------------------->\\		
		if (vn) {
		
await Ndyie.updatePresence(from, Presence.recording)
		} else if (ngetik) {
		await Ndyie.updatePresence(from, Presence.composing)
		}

//<-------------------------------------------------->\\

//<-------------------------------------------------->\\
//Conektion

const isSticker = type === 'stickerMessage'
const isVideo = type === 'videoMessage'
const isAudio = type === 'audioMessage'
const isContact = type === 'contactMessage'
const isOrder = type === 'orderMessage'
const isProduct = type === 'productMessage'
const isMentioned = type === 'mentionedJid'
const isDocument = type === 'documentMessage'
const isLink = type === 'matchedText'
const isLiveLocation = type === 'liveLocationMessage'
const isExtendedText = type === 'extendedTextMessage'
const isText = type === 'textMessage'		    
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!public){
if (!isOwner && !itsMe) return
}
if (isCmd && isUser) {console.log(color('[ CMD USER ]'), color(moment(Ndy.messageTimestamp * 1000).format('HH:mm:ss'), 'green'), color(`${command} [${args.length}]`, 'cyan'), color('Nama : ', 'pink'), color(`${pushname}`, 'blue'), color('Nomer : ', 'green'), color(`${sender.split("@")[0]}`, 'yellow'), color('in', 'pink'), color(`${groupName}`, 'cyan'))}
if (isCmd && !isGroup) {console.log(color('[ CMD PRIVATE ]'), color(moment(Ndy.messageTimestamp * 1000).format('HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`, 'cyan'))}
if (!command) console.log(Ndy)
if (isCmd && isGroup) {
console.log(color('[ CMD GROUP ]'), color(moment(Ndy.messageTimestamp * 1000).format('HH:mm:ss'), 'magenta'), color(`${command} [${args.length}]`, 'cyan'), color('from', 'pink'), color(`${pushname}`, 'yellow'), color('in', 'pink'), color(`${groupName}`, 'gold'))}
//<-------------------------------------------------->\\
//<-------------------------------------------------->\\
//<-------------------------------------------------->\\
//Menu By Ndyie Botz
switch (command) {
case 'allmenu':
var gc = Ndyie.chats.array.filter(v => v.jid.endsWith('g.us'))
var private = Ndyie.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const totalchattt = await Ndyie.chats.all()
const timestamppp = speed();
const latensott = speed() - timestamppp
let p = 0
menu1 = `
🔖 *Info ${bot}*
🔖 *User : @${sender.split("@")[0]}*
🔖 *Owner : ${fake}*
🔖 *Owner : ${owner}*
🔖 *Pengguna : ${pendaftar.length}*
🔖 *Group Chat : ${gc.length}*
🔖 *Private Chat : ${private.length}*
🔖 *Total Chat : ${totalchattt.length}*
🔖 *Speed Run : ${latensott.toFixed(4)}*

🔖 *Info Jam*
🔖 *Jam : ${wib} WIB*
🔖 *Jam : ${wita} WITA*
🔖 *Jam : ${wit} WIT*

━━━━━━━━━━━━━━━
「 ${bot} 」
━━━━━━━━━━━━━━━


⬡ OWNER MENU ⬡
⽷⃟🔖${p+=1}. ${ren}${prefix}on
⽷⃟🔖${p+=1}. ${ren}${prefix}off
⽷⃟🔖${p+=1}. ${ren}${prefix}emoji
⽷⃟🔖${p+=1}. ${ren}${prefix}teruskan
⽷⃟🔖${p+=1}. ${ren}${prefix}bc (pesan)
⽷⃟🔖${p+=1}. ${ren}${prefix}del (pesan)
⽷⃟🔖${p+=1}. ${ren}${prefix}anticall
⽷⃟🔖${p+=1}. ${ren}${prefix}spam (pesan)
⽷⃟🔖${p+=1}. ${ren}${prefix}readall
⽷⃟🔖${p+=1}. ${ren}${prefix}upswteks
⽷⃟🔖${p+=1}. ${ren}${prefix}upswvideo
⽷⃟🔖${p+=1}. ${ren}${prefix}upswimage
⽷⃟🔖${p+=1}. ${ren}${prefix}setfake
⽷⃟🔖${p+=1}. ${ren}${prefix}setfakeimg

⬡ STICKER MENU ⬡
⽷⃟🔖${p+=1}. ${ren}${prefix}s
⽷⃟🔖${p+=1}. ${ren}${prefix}stiker
⽷⃟🔖${p+=1}. ${ren}${prefix}sticker
⽷⃟🔖${p+=1}. ${ren}${prefix}attp
⽷⃟🔖${p+=1}. ${ren}${prefix}toimg

⬡ GRUP MENU ⬡
⽷⃟🔖${p+=1}. ${ren}${prefix}join
⽷⃟🔖${p+=1}. ${ren}${prefix}add
⽷⃟🔖${p+=1}. ${ren}${prefix}kick
⽷⃟🔖${p+=1}. ${ren}${prefix}gcbot
⽷⃟🔖${p+=1}. ${ren}${prefix}report (fitur)
⽷⃟🔖${p+=1}. ${ren}${prefix}open (grup)
⽷⃟🔖${p+=1}. ${ren}${prefix}close (grup)
⽷⃟🔖${p+=1}. ${ren}${prefix}bukagc
⽷⃟🔖${p+=1}. ${ren}${prefix}tutupgc
⽷⃟🔖${p+=1}. ${ren}${prefix}listonline
⽷⃟🔖${p+=1}. ${ren}${prefix}welcome (on/off)
⽷⃟🔖${p+=1}. ${ren}${prefix}setdesc (grup)
⽷⃟🔖${p+=1}. ${ren}${prefix}setname (grup)
⽷⃟🔖${p+=1}. ${ren}${prefix}setppgrup
⽷⃟🔖${p+=1}. ${ren}${prefix}infogrup
⽷⃟🔖${p+=1}. ${ren}${prefix}tagall
⽷⃟🔖${p+=1}. ${ren}${prefix}totag (bebas)
⽷⃟🔖${p+=1}. ${ren}${prefix}stag (stiker)
⽷⃟🔖${p+=1}. ${ren}${prefix}sticktag (stiker)
⽷⃟🔖${p+=1}. ${ren}${prefix}kontag (kontak)
⽷⃟🔖${p+=1}. ${ren}${prefix}revoke (linkgc)
⽷⃟🔖${p+=1}. ${ren}${prefix}chat (62|P)
⽷⃟🔖${p+=1}. ${ren}${prefix}promote
⽷⃟🔖${p+=1}. ${ren}${prefix}demote
⽷⃟🔖${p+=1}. ${ren}${prefix}promoteall
⽷⃟🔖${p+=1}. ${ren}${prefix}demoteall

⬡ DONASI MENU ⬡
⽷⃟🔖${p+=1}. ${ren}${prefix}ovo
⽷⃟🔖${p+=1}. ${ren}${prefix}dana
⽷⃟🔖${p+=1}. ${ren}${prefix}pulsa
⽷⃟🔖${p+=1}. ${ren}${prefix}gopay
⽷⃟🔖${p+=1}. ${ren}${prefix}linkaja
⽷⃟🔖${p+=1}. ${ren}${prefix}donasi
⽷⃟🔖${p+=1}. ${ren}${prefix}saweria

⬡ CREDITS ⬡
⽷⃟🔖${p+=1}. ${ren}${prefix}yt
⽷⃟🔖${p+=1}. ${ren}${prefix}tiktok
⽷⃟🔖${p+=1}. ${ren}${prefix}github
⽷⃟🔖${p+=1}. ${ren}${prefix}sc bot

⬡ DOSA MENU ⬡
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa1
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa2
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa3
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa4
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa5
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa6
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa7
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa8
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa9
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa10
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa11
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa12
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa13
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa14
⽷⃟🔖${p+=1}. ${ren}${prefix}dosa15

⬡ BOKEP INDO ⬡
⽷⃟🔖${p+=1}. ${ren}${prefix}indo1  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo2  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo3  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo4  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo5  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo6  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo7  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo8  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo9  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo10  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo11  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo12  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo13  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo14  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo15  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo16  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo17  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo18  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo19  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo20  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo21  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo22  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo23  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo24  
⽷⃟🔖${p+=1}. ${ren}${prefix}indo25

⬡ RANDOM MENU ⬡
⽷⃟🔖${p+=1}. ${ren}${prefix}rate
⽷⃟🔖${p+=1}. ${ren}${prefix}babi
⽷⃟🔖${p+=1}. ${ren}${prefix}toxic
⽷⃟🔖${p+=1}. ${ren}${prefix}beban
⽷⃟🔖${p+=1}. ${ren}${prefix}jadian
⽷⃟🔖${p+=1}. ${ren}${prefix}cantik
⽷⃟🔖${p+=1}. ${ren}${prefix}mining
⽷⃟🔖${p+=1}. ${ren}${prefix}citacita
⽷⃟🔖${p+=1}. ${ren}${prefix}apakah
⽷⃟🔖${p+=1}. ${ren}${prefix}bisakah
⽷⃟🔖${p+=1}. ${ren}${prefix}kapankah
⽷⃟🔖${p+=1}. ${ren}${prefix}wangy
⽷⃟🔖${p+=1}. ${ren}${prefix}cekwatak
⽷⃟🔖${p+=1}. ${ren}${prefix}ganteng
⽷⃟🔖${p+=1}. ${ren}${prefix}cekganteng
⽷⃟🔖${p+=1}. ${ren}${prefix}cekcantik`
function _0x4b36(){var _0x29ef0a=['10305KRLVBh','•━━•\x20Thanks\x20To\x20•━━•\x0a\x20\x20.Ndyie\x20Botz\x20(Delover)\x0a\x20\x20.Nyx\x20Chan\x20(Guru)\x0a\x20\x20.Melcanz\x20(Mastah)\x0a\x20\x20.Caliph\x20(Mastah)\x0a\x20\x20.Yogi\x20Presetya\x20(Fatner)','32429148YoYMDb','9530XMikPl','6074159YiLXhe','4638DocmRe','187414AGkRMt','2696gkYTQG','6256870HjvpGb','22GCTmGN','13CKiDrf','4lGxVXY','12HFQVis','659536AxaDOm'];_0x4b36=function(){return _0x29ef0a;};return _0x4b36();}var _0x9df4ae=_0x3050;function _0x3050(_0x4b0f03,_0x3148ef){var _0x4b3696=_0x4b36();return _0x3050=function(_0x30507a,_0x1d4455){_0x30507a=_0x30507a-0x1b1;var _0x3929ee=_0x4b3696[_0x30507a];return _0x3929ee;},_0x3050(_0x4b0f03,_0x3148ef);}(function(_0x26312a,_0x4eb8b2){var _0x2ab756=_0x3050,_0x19ba4b=_0x26312a();while(!![]){try{var _0x1be5c0=-parseInt(_0x2ab756(0x1bd))/0x1*(parseInt(_0x2ab756(0x1b4))/0x2)+parseInt(_0x2ab756(0x1b5))/0x3*(parseInt(_0x2ab756(0x1b6))/0x4)+parseInt(_0x2ab756(0x1ba))/0x5*(parseInt(_0x2ab756(0x1bc))/0x6)+parseInt(_0x2ab756(0x1bb))/0x7+parseInt(_0x2ab756(0x1be))/0x8*(-parseInt(_0x2ab756(0x1b7))/0x9)+parseInt(_0x2ab756(0x1b1))/0xa*(parseInt(_0x2ab756(0x1b2))/0xb)+parseInt(_0x2ab756(0x1b9))/0xc*(-parseInt(_0x2ab756(0x1b3))/0xd);if(_0x1be5c0===_0x4eb8b2)break;else _0x19ba4b['push'](_0x19ba4b['shift']());}catch(_0x2ca423){_0x19ba4b['push'](_0x19ba4b['shift']());}}}(_0x4b36,0xc097f),menu2=_0x9df4ae(0x1b8));
  
   gbutsan = [

{buttonId:`${prefix}yt`,buttonText:{displayText:'*☕MEDIA☕*'},type:1},

{buttonId:`${prefix}kontag`,buttonText:{displayText:'*☕OWNER☕*'},type:1},

{buttonId:`${prefix}sc`,buttonText:{displayText:'*☕SCRIPT☕*'},type:1}

]
    mhan = await Ndyie.prepareMessage(from, Rendy, image, {thumbnail: Rendy})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: `${menu1}`,
footerText: `${menu2}`,
buttons: gbutsan,
headerType: 4
}
Ndyie.sendMessage(from, buttonMessages, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./Poto/Ndyie.jpg'),
        "contextInfo": {
            mentionedJid: [sender]},
        caption: 'Tes',
            quoted: ftroli})
break
//<------------------------[ MENU ]-------------------------->\\

case 'menu':
case 'help':
               list = [ ]
               listmenu = [`allmenu`,`ownermenu`,`stikermenu`,`grupmenu`,`donasimenu`,`credistmenu`,`dosamenu`,`bokepmenu`,`randommenu`]
               listmenuu = [`All Menu`,`Owner Menu`,`Stiker Menu`,`Grup Menu`,`Donasi Menu`,`Credist`,`Dosa Menu`,`Bokep Menu`,`Random Menu`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Ndyie',
                    rows: [
                       {
                        title: `${listmenuu[startnum++ ]}`,
                        description: `${bot}`,
                        rowId: `${prefix}${x}`
                      }
                     ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`, `Hai kak ${pushname}, Pilih Menu Disini`, list)
               break
               
               
case 'ownermenu':
menu1 = `⬡ OWNER MENU ⬡
${ren}${prefix}on
${ren}${prefix}off
${ren}${prefix}emoji
${ren}${prefix}teruskan
${ren}${prefix}anticall
${ren}${prefix}bc (pesan)
${ren}${prefix}del (pesan)
${ren}${prefix}spam (pesan)
${ren}${prefix}readall
${ren}${prefix}upswteks
${ren}${prefix}upswvideo
${ren}${prefix}upswimage
${ren}${prefix}setfake
${ren}${prefix}setfakeimg`
function _0x4b36(){var _0x29ef0a=['10305KRLVBh','•━━•\x20Thanks\x20To\x20•━━•\x0a\x20\x20.Ndyie\x20Botz\x20(Delover)\x0a\x20\x20.Nyx\x20Chan\x20(Guru)\x0a\x20\x20.Melcanz\x20(Mastah)\x0a\x20\x20.Caliph\x20(Mastah)\x0a\x20\x20.Yogi\x20Presetya\x20(Fatner)','32429148YoYMDb','9530XMikPl','6074159YiLXhe','4638DocmRe','187414AGkRMt','2696gkYTQG','6256870HjvpGb','22GCTmGN','13CKiDrf','4lGxVXY','12HFQVis','659536AxaDOm'];_0x4b36=function(){return _0x29ef0a;};return _0x4b36();}var _0x9df4ae=_0x3050;function _0x3050(_0x4b0f03,_0x3148ef){var _0x4b3696=_0x4b36();return _0x3050=function(_0x30507a,_0x1d4455){_0x30507a=_0x30507a-0x1b1;var _0x3929ee=_0x4b3696[_0x30507a];return _0x3929ee;},_0x3050(_0x4b0f03,_0x3148ef);}(function(_0x26312a,_0x4eb8b2){var _0x2ab756=_0x3050,_0x19ba4b=_0x26312a();while(!![]){try{var _0x1be5c0=-parseInt(_0x2ab756(0x1bd))/0x1*(parseInt(_0x2ab756(0x1b4))/0x2)+parseInt(_0x2ab756(0x1b5))/0x3*(parseInt(_0x2ab756(0x1b6))/0x4)+parseInt(_0x2ab756(0x1ba))/0x5*(parseInt(_0x2ab756(0x1bc))/0x6)+parseInt(_0x2ab756(0x1bb))/0x7+parseInt(_0x2ab756(0x1be))/0x8*(-parseInt(_0x2ab756(0x1b7))/0x9)+parseInt(_0x2ab756(0x1b1))/0xa*(parseInt(_0x2ab756(0x1b2))/0xb)+parseInt(_0x2ab756(0x1b9))/0xc*(-parseInt(_0x2ab756(0x1b3))/0xd);if(_0x1be5c0===_0x4eb8b2)break;else _0x19ba4b['push'](_0x19ba4b['shift']());}catch(_0x2ca423){_0x19ba4b['push'](_0x19ba4b['shift']());}}}(_0x4b36,0xc097f),menu2=_0x9df4ae(0x1b8));
Ndyie.sendMessage(from, {'text': 'test',"contentText":menu1,"footerText": `${menu2}`, "buttons": [{"buttonId": `#allmenu`,"buttonText": {"displayText": "☕ALLMENU☕"},"type": "RESPONSE"},{"buttonId": `#kontag`,"buttonText": {"displayText": "☕OWNER☕"},"type": "RESPONSE"},{"buttonId": `#yt`,"buttonText": {"displayText": "☕MEDIA SOSIAL☕"},"type": "RESPONSE"}], "headerType": "DOCUMENT", "documentMessage": {
    "url": "https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc",
    "mimetype": "application/pdf",
"jpegThumbnail": fs.readFileSync('./Poto/Ndyie.jpg'),
    "fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
    "fileLength": "28999",
    "pageCount": "999999999999999999",
    "mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
    "fileName": `Ndyie Botz`,
    "fileEncSha256": "bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A="
  }}, MessageType.buttonsMessage, {"contextInfo": {
            "forwardingScore": 3,
            isForwarded: true,
            mentionedJid: [sender],
            externalAdReply: {
            "title": `${fake}`,
            "body": `${bot}`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnailUrl": `https://telegra.ph/file/5f7aafb00733538b2cf16.jpg`,
            "mediaUrl": `https://youtu.be/ZTS5FEbllFA`
        }}, quoted: ftrol})
break

case 'stikermenu':
menu1 = `⬡ STICKER MENU ⬡
${ren}${prefix}s
${ren}${prefix}stiker
${ren}${prefix}sticker
${ren}${prefix}attp
${ren}${prefix}toimg`
function _0x4b36(){var _0x29ef0a=['10305KRLVBh','•━━•\x20Thanks\x20To\x20•━━•\x0a\x20\x20.Ndyie\x20Botz\x20(Delover)\x0a\x20\x20.Nyx\x20Chan\x20(Guru)\x0a\x20\x20.Melcanz\x20(Mastah)\x0a\x20\x20.Caliph\x20(Mastah)\x0a\x20\x20.Yogi\x20Presetya\x20(Fatner)','32429148YoYMDb','9530XMikPl','6074159YiLXhe','4638DocmRe','187414AGkRMt','2696gkYTQG','6256870HjvpGb','22GCTmGN','13CKiDrf','4lGxVXY','12HFQVis','659536AxaDOm'];_0x4b36=function(){return _0x29ef0a;};return _0x4b36();}var _0x9df4ae=_0x3050;function _0x3050(_0x4b0f03,_0x3148ef){var _0x4b3696=_0x4b36();return _0x3050=function(_0x30507a,_0x1d4455){_0x30507a=_0x30507a-0x1b1;var _0x3929ee=_0x4b3696[_0x30507a];return _0x3929ee;},_0x3050(_0x4b0f03,_0x3148ef);}(function(_0x26312a,_0x4eb8b2){var _0x2ab756=_0x3050,_0x19ba4b=_0x26312a();while(!![]){try{var _0x1be5c0=-parseInt(_0x2ab756(0x1bd))/0x1*(parseInt(_0x2ab756(0x1b4))/0x2)+parseInt(_0x2ab756(0x1b5))/0x3*(parseInt(_0x2ab756(0x1b6))/0x4)+parseInt(_0x2ab756(0x1ba))/0x5*(parseInt(_0x2ab756(0x1bc))/0x6)+parseInt(_0x2ab756(0x1bb))/0x7+parseInt(_0x2ab756(0x1be))/0x8*(-parseInt(_0x2ab756(0x1b7))/0x9)+parseInt(_0x2ab756(0x1b1))/0xa*(parseInt(_0x2ab756(0x1b2))/0xb)+parseInt(_0x2ab756(0x1b9))/0xc*(-parseInt(_0x2ab756(0x1b3))/0xd);if(_0x1be5c0===_0x4eb8b2)break;else _0x19ba4b['push'](_0x19ba4b['shift']());}catch(_0x2ca423){_0x19ba4b['push'](_0x19ba4b['shift']());}}}(_0x4b36,0xc097f),menu2=_0x9df4ae(0x1b8));
Ndyie.sendMessage(from, {'text': 'test',"contentText":menu1,"footerText": `${menu2}`, "buttons": [{"buttonId": `#allmenu`,"buttonText": {"displayText": "☕ALLMENU☕"},"type": "RESPONSE"},{"buttonId": `#kontag`,"buttonText": {"displayText": "☕OWNER☕"},"type": "RESPONSE"},{"buttonId": `#yt`,"buttonText": {"displayText": "☕MEDIA SOSIAL☕"},"type": "RESPONSE"}], "headerType": "DOCUMENT", "documentMessage": {
    "url": "https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc",
    "mimetype": "application/pdf",
"jpegThumbnail": fs.readFileSync('./Poto/Ndyie.jpg'),
    "fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
    "fileLength": "28999",
    "pageCount": "999999999999999999",
    "mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
    "fileName": `Ndyie Botz`,
    "fileEncSha256": "bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A="
  }}, MessageType.buttonsMessage, {"contextInfo": {
            "forwardingScore": 3,
            isForwarded: true,
            mentionedJid: [sender],
            externalAdReply: {
            "title": `${fake}`,
            "body": `${bot}`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnailUrl": `https://telegra.ph/file/5f7aafb00733538b2cf16.jpg`,
            "mediaUrl": `https://youtu.be/ZTS5FEbllFA`
        }}, quoted: ftrol})
break

case 'grupmenu':
menu1 = `⬡ GRUP MENU ⬡
${ren}${prefix}join
${ren}${prefix}add
${ren}${prefix}kick
${ren}${prefix}gcbot
${ren}${prefix}report (fitur)
${ren}${prefix}open (grup)
${ren}${prefix}close (grup)
${ren}${prefix}bukagc
${ren}${prefix}tutupgc
${ren}${prefix}welcome (on/off)
${ren}${prefix}setdesc (grup)
${ren}${prefix}setname (grup)
${ren}${prefix}setppgrup
${ren}${prefix}infogrup
${ren}${prefix}listonline
${ren}${prefix}tagall
${ren}${prefix}totag (bebas)
${ren}${prefix}stag (stiker)
${ren}${prefix}sticktag (stiker)
${ren}${prefix}kontag (kontak)
${ren}${prefix}revoke (linkgc)
${ren}${prefix}chat (62|P)
${ren}${prefix}promote
${ren}${prefix}demote
${ren}${prefix}promoteall
${ren}${prefix}demoteall`
function _0x4b36(){var _0x29ef0a=['10305KRLVBh','•━━•\x20Thanks\x20To\x20•━━•\x0a\x20\x20.Ndyie\x20Botz\x20(Delover)\x0a\x20\x20.Nyx\x20Chan\x20(Guru)\x0a\x20\x20.Melcanz\x20(Mastah)\x0a\x20\x20.Caliph\x20(Mastah)\x0a\x20\x20.Yogi\x20Presetya\x20(Fatner)','32429148YoYMDb','9530XMikPl','6074159YiLXhe','4638DocmRe','187414AGkRMt','2696gkYTQG','6256870HjvpGb','22GCTmGN','13CKiDrf','4lGxVXY','12HFQVis','659536AxaDOm'];_0x4b36=function(){return _0x29ef0a;};return _0x4b36();}var _0x9df4ae=_0x3050;function _0x3050(_0x4b0f03,_0x3148ef){var _0x4b3696=_0x4b36();return _0x3050=function(_0x30507a,_0x1d4455){_0x30507a=_0x30507a-0x1b1;var _0x3929ee=_0x4b3696[_0x30507a];return _0x3929ee;},_0x3050(_0x4b0f03,_0x3148ef);}(function(_0x26312a,_0x4eb8b2){var _0x2ab756=_0x3050,_0x19ba4b=_0x26312a();while(!![]){try{var _0x1be5c0=-parseInt(_0x2ab756(0x1bd))/0x1*(parseInt(_0x2ab756(0x1b4))/0x2)+parseInt(_0x2ab756(0x1b5))/0x3*(parseInt(_0x2ab756(0x1b6))/0x4)+parseInt(_0x2ab756(0x1ba))/0x5*(parseInt(_0x2ab756(0x1bc))/0x6)+parseInt(_0x2ab756(0x1bb))/0x7+parseInt(_0x2ab756(0x1be))/0x8*(-parseInt(_0x2ab756(0x1b7))/0x9)+parseInt(_0x2ab756(0x1b1))/0xa*(parseInt(_0x2ab756(0x1b2))/0xb)+parseInt(_0x2ab756(0x1b9))/0xc*(-parseInt(_0x2ab756(0x1b3))/0xd);if(_0x1be5c0===_0x4eb8b2)break;else _0x19ba4b['push'](_0x19ba4b['shift']());}catch(_0x2ca423){_0x19ba4b['push'](_0x19ba4b['shift']());}}}(_0x4b36,0xc097f),menu2=_0x9df4ae(0x1b8));
Ndyie.sendMessage(from, {'text': 'test',"contentText":menu1,"footerText": `${menu2}`, "buttons": [{"buttonId": `#allmenu`,"buttonText": {"displayText": "☕ALLMENU☕"},"type": "RESPONSE"},{"buttonId": `#kontag`,"buttonText": {"displayText": "☕OWNER☕"},"type": "RESPONSE"},{"buttonId": `#yt`,"buttonText": {"displayText": "☕MEDIA SOSIAL☕"},"type": "RESPONSE"}], "headerType": "DOCUMENT", "documentMessage": {
    "url": "https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc",
    "mimetype": "application/pdf",
"jpegThumbnail": fs.readFileSync('./Poto/Ndyie.jpg'),
    "fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
    "fileLength": "28999",
    "pageCount": "999999999999999999",
    "mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
    "fileName": `Ndyie Botz`,
    "fileEncSha256": "bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A="
  }}, MessageType.buttonsMessage, {"contextInfo": {
            "forwardingScore": 3,
            isForwarded: true,
            mentionedJid: [sender],
            externalAdReply: {
            "title": `${fake}`,
            "body": `${bot}`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnailUrl": `https://telegra.ph/file/5f7aafb00733538b2cf16.jpg`,
            "mediaUrl": `https://youtu.be/ZTS5FEbllFA`
        }}, quoted: ftrol})
break

case 'donasimenu':
menu1 = `⬡ DONASI MENU ⬡
${ren}${prefix}ovo
${ren}${prefix}dana
${ren}${prefix}pulsa
${ren}${prefix}gopay
${ren}${prefix}linkaja
${ren}${prefix}donasi
${ren}${prefix}saweria`
function _0x4b36(){var _0x29ef0a=['10305KRLVBh','•━━•\x20Thanks\x20To\x20•━━•\x0a\x20\x20.Ndyie\x20Botz\x20(Delover)\x0a\x20\x20.Nyx\x20Chan\x20(Guru)\x0a\x20\x20.Melcanz\x20(Mastah)\x0a\x20\x20.Caliph\x20(Mastah)\x0a\x20\x20.Yogi\x20Presetya\x20(Fatner)','32429148YoYMDb','9530XMikPl','6074159YiLXhe','4638DocmRe','187414AGkRMt','2696gkYTQG','6256870HjvpGb','22GCTmGN','13CKiDrf','4lGxVXY','12HFQVis','659536AxaDOm'];_0x4b36=function(){return _0x29ef0a;};return _0x4b36();}var _0x9df4ae=_0x3050;function _0x3050(_0x4b0f03,_0x3148ef){var _0x4b3696=_0x4b36();return _0x3050=function(_0x30507a,_0x1d4455){_0x30507a=_0x30507a-0x1b1;var _0x3929ee=_0x4b3696[_0x30507a];return _0x3929ee;},_0x3050(_0x4b0f03,_0x3148ef);}(function(_0x26312a,_0x4eb8b2){var _0x2ab756=_0x3050,_0x19ba4b=_0x26312a();while(!![]){try{var _0x1be5c0=-parseInt(_0x2ab756(0x1bd))/0x1*(parseInt(_0x2ab756(0x1b4))/0x2)+parseInt(_0x2ab756(0x1b5))/0x3*(parseInt(_0x2ab756(0x1b6))/0x4)+parseInt(_0x2ab756(0x1ba))/0x5*(parseInt(_0x2ab756(0x1bc))/0x6)+parseInt(_0x2ab756(0x1bb))/0x7+parseInt(_0x2ab756(0x1be))/0x8*(-parseInt(_0x2ab756(0x1b7))/0x9)+parseInt(_0x2ab756(0x1b1))/0xa*(parseInt(_0x2ab756(0x1b2))/0xb)+parseInt(_0x2ab756(0x1b9))/0xc*(-parseInt(_0x2ab756(0x1b3))/0xd);if(_0x1be5c0===_0x4eb8b2)break;else _0x19ba4b['push'](_0x19ba4b['shift']());}catch(_0x2ca423){_0x19ba4b['push'](_0x19ba4b['shift']());}}}(_0x4b36,0xc097f),menu2=_0x9df4ae(0x1b8));
Ndyie.sendMessage(from, {'text': 'test',"contentText":menu1,"footerText": `${menu2}`, "buttons": [{"buttonId": `#allmenu`,"buttonText": {"displayText": "☕ALLMENU☕"},"type": "RESPONSE"},{"buttonId": `#kontag`,"buttonText": {"displayText": "☕OWNER☕"},"type": "RESPONSE"},{"buttonId": `#yt`,"buttonText": {"displayText": "☕MEDIA SOSIAL☕"},"type": "RESPONSE"}], "headerType": "DOCUMENT", "documentMessage": {
    "url": "https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc",
    "mimetype": "application/pdf",
"jpegThumbnail": fs.readFileSync('./Poto/Ndyie.jpg'),
    "fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
    "fileLength": "28999",
    "pageCount": "999999999999999999",
    "mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
    "fileName": `Ndyie Botz`,
    "fileEncSha256": "bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A="
  }}, MessageType.buttonsMessage, {"contextInfo": {
            "forwardingScore": 3,
            isForwarded: true,
            mentionedJid: [sender],
            externalAdReply: {
            "title": `${fake}`,
            "body": `${bot}`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnailUrl": `https://telegra.ph/file/5f7aafb00733538b2cf16.jpg`,
            "mediaUrl": `https://youtu.be/ZTS5FEbllFA`
        }}, quoted: ftrol})
break

case 'credistmenu':
menu1 = `⬡ CREDITS ⬡
${ren}${prefix}yt
${ren}${prefix}tiktok
${ren}${prefix}github
${ren}${prefix}sc bot`
function _0x4b36(){var _0x29ef0a=['10305KRLVBh','•━━•\x20Thanks\x20To\x20•━━•\x0a\x20\x20.Ndyie\x20Botz\x20(Delover)\x0a\x20\x20.Nyx\x20Chan\x20(Guru)\x0a\x20\x20.Melcanz\x20(Mastah)\x0a\x20\x20.Caliph\x20(Mastah)\x0a\x20\x20.Yogi\x20Presetya\x20(Fatner)','32429148YoYMDb','9530XMikPl','6074159YiLXhe','4638DocmRe','187414AGkRMt','2696gkYTQG','6256870HjvpGb','22GCTmGN','13CKiDrf','4lGxVXY','12HFQVis','659536AxaDOm'];_0x4b36=function(){return _0x29ef0a;};return _0x4b36();}var _0x9df4ae=_0x3050;function _0x3050(_0x4b0f03,_0x3148ef){var _0x4b3696=_0x4b36();return _0x3050=function(_0x30507a,_0x1d4455){_0x30507a=_0x30507a-0x1b1;var _0x3929ee=_0x4b3696[_0x30507a];return _0x3929ee;},_0x3050(_0x4b0f03,_0x3148ef);}(function(_0x26312a,_0x4eb8b2){var _0x2ab756=_0x3050,_0x19ba4b=_0x26312a();while(!![]){try{var _0x1be5c0=-parseInt(_0x2ab756(0x1bd))/0x1*(parseInt(_0x2ab756(0x1b4))/0x2)+parseInt(_0x2ab756(0x1b5))/0x3*(parseInt(_0x2ab756(0x1b6))/0x4)+parseInt(_0x2ab756(0x1ba))/0x5*(parseInt(_0x2ab756(0x1bc))/0x6)+parseInt(_0x2ab756(0x1bb))/0x7+parseInt(_0x2ab756(0x1be))/0x8*(-parseInt(_0x2ab756(0x1b7))/0x9)+parseInt(_0x2ab756(0x1b1))/0xa*(parseInt(_0x2ab756(0x1b2))/0xb)+parseInt(_0x2ab756(0x1b9))/0xc*(-parseInt(_0x2ab756(0x1b3))/0xd);if(_0x1be5c0===_0x4eb8b2)break;else _0x19ba4b['push'](_0x19ba4b['shift']());}catch(_0x2ca423){_0x19ba4b['push'](_0x19ba4b['shift']());}}}(_0x4b36,0xc097f),menu2=_0x9df4ae(0x1b8));
Ndyie.sendMessage(from, {'text': 'test',"contentText":menu1,"footerText": `${menu2}`, "buttons": [{"buttonId": `#allmenu`,"buttonText": {"displayText": "☕ALLMENU☕"},"type": "RESPONSE"},{"buttonId": `#kontag`,"buttonText": {"displayText": "☕OWNER☕"},"type": "RESPONSE"},{"buttonId": `#yt`,"buttonText": {"displayText": "☕MEDIA SOSIAL☕"},"type": "RESPONSE"}], "headerType": "DOCUMENT", "documentMessage": {
    "url": "https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc",
    "mimetype": "application/pdf",
"jpegThumbnail": fs.readFileSync('./Poto/Ndyie.jpg'),
    "fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
    "fileLength": "28999",
    "pageCount": "999999999999999999",
    "mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
    "fileName": `Ndyie Botz`,
    "fileEncSha256": "bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A="
  }}, MessageType.buttonsMessage, {"contextInfo": {
            "forwardingScore": 3,
            isForwarded: true,
            mentionedJid: [sender],
            externalAdReply: {
            "title": `${fake}`,
            "body": `${bot}`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnailUrl": `https://telegra.ph/file/5f7aafb00733538b2cf16.jpg`,
            "mediaUrl": `https://youtu.be/ZTS5FEbllFA`
        }}, quoted: ftrol})
break

case 'dosamenu':
menu1 = `⬡ DOSA MENU ⬡
${ren}${prefix}dosa1
${ren}${prefix}dosa2
${ren}${prefix}dosa3
${ren}${prefix}dosa4
${ren}${prefix}dosa5
${ren}${prefix}dosa6
${ren}${prefix}dosa7
${ren}${prefix}dosa8
${ren}${prefix}dosa9
${ren}${prefix}dosa10
${ren}${prefix}dosa11
${ren}${prefix}dosa12
${ren}${prefix}dosa13
${ren}${prefix}dosa14
${ren}${prefix}dosa15`
function _0x4b36(){var _0x29ef0a=['10305KRLVBh','•━━•\x20Thanks\x20To\x20•━━•\x0a\x20\x20.Ndyie\x20Botz\x20(Delover)\x0a\x20\x20.Nyx\x20Chan\x20(Guru)\x0a\x20\x20.Melcanz\x20(Mastah)\x0a\x20\x20.Caliph\x20(Mastah)\x0a\x20\x20.Yogi\x20Presetya\x20(Fatner)','32429148YoYMDb','9530XMikPl','6074159YiLXhe','4638DocmRe','187414AGkRMt','2696gkYTQG','6256870HjvpGb','22GCTmGN','13CKiDrf','4lGxVXY','12HFQVis','659536AxaDOm'];_0x4b36=function(){return _0x29ef0a;};return _0x4b36();}var _0x9df4ae=_0x3050;function _0x3050(_0x4b0f03,_0x3148ef){var _0x4b3696=_0x4b36();return _0x3050=function(_0x30507a,_0x1d4455){_0x30507a=_0x30507a-0x1b1;var _0x3929ee=_0x4b3696[_0x30507a];return _0x3929ee;},_0x3050(_0x4b0f03,_0x3148ef);}(function(_0x26312a,_0x4eb8b2){var _0x2ab756=_0x3050,_0x19ba4b=_0x26312a();while(!![]){try{var _0x1be5c0=-parseInt(_0x2ab756(0x1bd))/0x1*(parseInt(_0x2ab756(0x1b4))/0x2)+parseInt(_0x2ab756(0x1b5))/0x3*(parseInt(_0x2ab756(0x1b6))/0x4)+parseInt(_0x2ab756(0x1ba))/0x5*(parseInt(_0x2ab756(0x1bc))/0x6)+parseInt(_0x2ab756(0x1bb))/0x7+parseInt(_0x2ab756(0x1be))/0x8*(-parseInt(_0x2ab756(0x1b7))/0x9)+parseInt(_0x2ab756(0x1b1))/0xa*(parseInt(_0x2ab756(0x1b2))/0xb)+parseInt(_0x2ab756(0x1b9))/0xc*(-parseInt(_0x2ab756(0x1b3))/0xd);if(_0x1be5c0===_0x4eb8b2)break;else _0x19ba4b['push'](_0x19ba4b['shift']());}catch(_0x2ca423){_0x19ba4b['push'](_0x19ba4b['shift']());}}}(_0x4b36,0xc097f),menu2=_0x9df4ae(0x1b8));
Ndyie.sendMessage(from, {'text': 'test',"contentText":menu1,"footerText": `${menu2}`, "buttons": [{"buttonId": `#allmenu`,"buttonText": {"displayText": "☕ALLMENU☕"},"type": "RESPONSE"},{"buttonId": `#kontag`,"buttonText": {"displayText": "☕OWNER☕"},"type": "RESPONSE"},{"buttonId": `#yt`,"buttonText": {"displayText": "☕MEDIA SOSIAL☕"},"type": "RESPONSE"}], "headerType": "DOCUMENT", "documentMessage": {
    "url": "https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc",
    "mimetype": "application/pdf",
"jpegThumbnail": fs.readFileSync('./Poto/Ndyie.jpg'),
    "fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
    "fileLength": "28999",
    "pageCount": "999999999999999999",
    "mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
    "fileName": `Ndyie Botz`,
    "fileEncSha256": "bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A="
  }}, MessageType.buttonsMessage, {"contextInfo": {
            "forwardingScore": 3,
            isForwarded: true,
            mentionedJid: [sender],
            externalAdReply: {
            "title": `${fake}`,
            "body": `${bot}`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnailUrl": `https://telegra.ph/file/5f7aafb00733538b2cf16.jpg`,
            "mediaUrl": `https://youtu.be/ZTS5FEbllFA`
        }}, quoted: ftrol})
break

case 'bokepmenu':
menu1 = `⬡ BOKEP INDO ⬡
${ren}${prefix}indo1  
${ren}${prefix}indo2  
${ren}${prefix}indo3  
${ren}${prefix}indo4  
${ren}${prefix}indo5  
${ren}${prefix}indo6  
${ren}${prefix}indo7  
${ren}${prefix}indo8  
${ren}${prefix}indo9  
${ren}${prefix}indo10  
${ren}${prefix}indo11  
${ren}${prefix}indo12  
${ren}${prefix}indo13  
${ren}${prefix}indo14  
${ren}${prefix}indo15  
${ren}${prefix}indo16  
${ren}${prefix}indo17  
${ren}${prefix}indo18  
${ren}${prefix}indo19  
${ren}${prefix}indo20  
${ren}${prefix}indo21  
${ren}${prefix}indo22  
${ren}${prefix}indo23  
${ren}${prefix}indo24  
${ren}${prefix}indo25`
function _0x4b36(){var _0x29ef0a=['10305KRLVBh','•━━•\x20Thanks\x20To\x20•━━•\x0a\x20\x20.Ndyie\x20Botz\x20(Delover)\x0a\x20\x20.Nyx\x20Chan\x20(Guru)\x0a\x20\x20.Melcanz\x20(Mastah)\x0a\x20\x20.Caliph\x20(Mastah)\x0a\x20\x20.Yogi\x20Presetya\x20(Fatner)','32429148YoYMDb','9530XMikPl','6074159YiLXhe','4638DocmRe','187414AGkRMt','2696gkYTQG','6256870HjvpGb','22GCTmGN','13CKiDrf','4lGxVXY','12HFQVis','659536AxaDOm'];_0x4b36=function(){return _0x29ef0a;};return _0x4b36();}var _0x9df4ae=_0x3050;function _0x3050(_0x4b0f03,_0x3148ef){var _0x4b3696=_0x4b36();return _0x3050=function(_0x30507a,_0x1d4455){_0x30507a=_0x30507a-0x1b1;var _0x3929ee=_0x4b3696[_0x30507a];return _0x3929ee;},_0x3050(_0x4b0f03,_0x3148ef);}(function(_0x26312a,_0x4eb8b2){var _0x2ab756=_0x3050,_0x19ba4b=_0x26312a();while(!![]){try{var _0x1be5c0=-parseInt(_0x2ab756(0x1bd))/0x1*(parseInt(_0x2ab756(0x1b4))/0x2)+parseInt(_0x2ab756(0x1b5))/0x3*(parseInt(_0x2ab756(0x1b6))/0x4)+parseInt(_0x2ab756(0x1ba))/0x5*(parseInt(_0x2ab756(0x1bc))/0x6)+parseInt(_0x2ab756(0x1bb))/0x7+parseInt(_0x2ab756(0x1be))/0x8*(-parseInt(_0x2ab756(0x1b7))/0x9)+parseInt(_0x2ab756(0x1b1))/0xa*(parseInt(_0x2ab756(0x1b2))/0xb)+parseInt(_0x2ab756(0x1b9))/0xc*(-parseInt(_0x2ab756(0x1b3))/0xd);if(_0x1be5c0===_0x4eb8b2)break;else _0x19ba4b['push'](_0x19ba4b['shift']());}catch(_0x2ca423){_0x19ba4b['push'](_0x19ba4b['shift']());}}}(_0x4b36,0xc097f),menu2=_0x9df4ae(0x1b8));
Ndyie.sendMessage(from, {'text': 'test',"contentText":menu1,"footerText": `${menu2}`, "buttons": [{"buttonId": `#allmenu`,"buttonText": {"displayText": "☕ALLMENU☕"},"type": "RESPONSE"},{"buttonId": `#kontag`,"buttonText": {"displayText": "☕OWNER☕"},"type": "RESPONSE"},{"buttonId": `#yt`,"buttonText": {"displayText": "☕MEDIA SOSIAL☕"},"type": "RESPONSE"}], "headerType": "DOCUMENT", "documentMessage": {
    "url": "https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc",
    "mimetype": "application/pdf",
"jpegThumbnail": fs.readFileSync('./Poto/Ndyie.jpg'),
    "fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
    "fileLength": "28999",
    "pageCount": "999999999999999999",
    "mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
    "fileName": `Ndyie Botz`,
    "fileEncSha256": "bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A="
  }}, MessageType.buttonsMessage, {"contextInfo": {
            "forwardingScore": 3,
            isForwarded: true,
            mentionedJid: [sender],
            externalAdReply: {
            "title": `${fake}`,
            "body": `${bot}`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnailUrl": `https://telegra.ph/file/5f7aafb00733538b2cf16.jpg`,
            "mediaUrl": `https://youtu.be/ZTS5FEbllFA`
        }}, quoted: ftrol})
break

case 'randommenu':
menu1 = `⬡ RANDOM MENU ⬡
${ren}${prefix}rate
${ren}${prefix}babi
${ren}${prefix}toxic
${ren}${prefix}beban
${ren}${prefix}jadian
${ren}${prefix}cantik
${ren}${prefix}mining
${ren}${prefix}citacita
${ren}${prefix}apakah
${ren}${prefix}bisakah
${ren}${prefix}kapankah
${ren}${prefix}wangy
${ren}${prefix}cekwatak
${ren}${prefix}ganteng
${ren}${prefix}cekganteng
${ren}${prefix}cekcantik`
function _0x4b36(){var _0x29ef0a=['10305KRLVBh','•━━•\x20Thanks\x20To\x20•━━•\x0a\x20\x20.Ndyie\x20Botz\x20(Delover)\x0a\x20\x20.Nyx\x20Chan\x20(Guru)\x0a\x20\x20.Melcanz\x20(Mastah)\x0a\x20\x20.Caliph\x20(Mastah)\x0a\x20\x20.Yogi\x20Presetya\x20(Fatner)','32429148YoYMDb','9530XMikPl','6074159YiLXhe','4638DocmRe','187414AGkRMt','2696gkYTQG','6256870HjvpGb','22GCTmGN','13CKiDrf','4lGxVXY','12HFQVis','659536AxaDOm'];_0x4b36=function(){return _0x29ef0a;};return _0x4b36();}var _0x9df4ae=_0x3050;function _0x3050(_0x4b0f03,_0x3148ef){var _0x4b3696=_0x4b36();return _0x3050=function(_0x30507a,_0x1d4455){_0x30507a=_0x30507a-0x1b1;var _0x3929ee=_0x4b3696[_0x30507a];return _0x3929ee;},_0x3050(_0x4b0f03,_0x3148ef);}(function(_0x26312a,_0x4eb8b2){var _0x2ab756=_0x3050,_0x19ba4b=_0x26312a();while(!![]){try{var _0x1be5c0=-parseInt(_0x2ab756(0x1bd))/0x1*(parseInt(_0x2ab756(0x1b4))/0x2)+parseInt(_0x2ab756(0x1b5))/0x3*(parseInt(_0x2ab756(0x1b6))/0x4)+parseInt(_0x2ab756(0x1ba))/0x5*(parseInt(_0x2ab756(0x1bc))/0x6)+parseInt(_0x2ab756(0x1bb))/0x7+parseInt(_0x2ab756(0x1be))/0x8*(-parseInt(_0x2ab756(0x1b7))/0x9)+parseInt(_0x2ab756(0x1b1))/0xa*(parseInt(_0x2ab756(0x1b2))/0xb)+parseInt(_0x2ab756(0x1b9))/0xc*(-parseInt(_0x2ab756(0x1b3))/0xd);if(_0x1be5c0===_0x4eb8b2)break;else _0x19ba4b['push'](_0x19ba4b['shift']());}catch(_0x2ca423){_0x19ba4b['push'](_0x19ba4b['shift']());}}}(_0x4b36,0xc097f),menu2=_0x9df4ae(0x1b8));
Ndyie.sendMessage(from, {'text': 'test',"contentText":menu1,"footerText": `${menu2}`, "buttons": [{"buttonId": `#allmenu`,"buttonText": {"displayText": "☕ALLMENU☕"},"type": "RESPONSE"},{"buttonId": `#kontag`,"buttonText": {"displayText": "☕OWNER☕"},"type": "RESPONSE"},{"buttonId": `#yt`,"buttonText": {"displayText": "☕MEDIA SOSIAL☕"},"type": "RESPONSE"}], "headerType": "DOCUMENT", "documentMessage": {
    "url": "https://mmg.whatsapp.net/d/f/Ao-k40Q-gO_hn2Sqy4nHfrYAYVeWq-7FZNjAqSMngeXI.enc",
    "mimetype": "application/pdf",
"jpegThumbnail": fs.readFileSync('./Poto/Ndyie.jpg'),
    "fileSha256": "kXrt+8eqBgD3MAaYx15D+0Mjbi7yiiv9gIBMu9tXtpE=",
    "fileLength": "28999",
    "pageCount": "999999999999999999",
    "mediaKey": "3n1n1Kbt6aNkBAVg8GMetpwXOQusBR97m/gdkX/DbG0=",
    "fileName": `Ndyie Botz`,
    "fileEncSha256": "bx/mFEB8SWYMsYMtnlnbbA1B2pJ18rKZqeL7byF+X/A="
  }}, MessageType.buttonsMessage, {"contextInfo": {
            "forwardingScore": 3,
            isForwarded: true,
            mentionedJid: [sender],
            externalAdReply: {
            "title": `${fake}`,
            "body": `${bot}`,
            "mediaType": "VIDEO",
            "mediaType": 2,
            "thumbnailUrl": `https://telegra.ph/file/5f7aafb00733538b2cf16.jpg`,
            "mediaUrl": `https://youtu.be/ZTS5FEbllFA`
        }}, quoted: ftrol})
break




//<-------------------------------------------------->\\

//Credits
case 'gcbot':
reply (`HAI KAK ${pushname}\n${gc}\nJANGAN LUPA MASUK YA`)
break
case 'yt':
reply (`HAI KAK ${pushname}\n${yeteh}\nJANGAN LUPA UNTUK SUBSCRIBE YT OWNER KU YA`)
break
case 'sc':
reply (`HAI KAK ${pushname} MAU DOWNLOAD SCRIPT BOT KU YA? YAUDAH NIH LINK DOWNLOAD NYA\n${vidioh}`)
break
case 'tiktok':
reply (`HAI KAK ${pushname}\n${tiktoh}\nJANGAN LUPA UNTUK POLOW TIKTOK OWNER KU YA`)
break
case 'github':
reply (`HAI KAK ${pushname}\n${githud}\nJANGAN LUPA UNTUK POLOW GITHUB OWNER KU YA`)
break

//Owner
case "upswteks":
        if (!q) return fakestatus("Isi teksnya!");
        Ndyie.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Sukses Up story wea teks ${q}`);
        break;
case "on":
        if (!isOwner && ! Ndy.key.fromMe) return reply(mess.own)
        offline = false;
        reply(" ```ANDA TELAH ONLINE``` ");
        break;
        case "off":
        if (!isOwner && !Ndy.key.fromMe) return reply(mess.own)
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        reply(" ```ANDA TELAH OFFLINE``` ");
        break;
         case 'readall':
              totalchat.map( async ({ jid }) => {
              await Ndyie.chatRead(jid)
})
              reply(`\`\`\`Berhasil membaca Seluruh Chat !\`\`\``)
              console.log(totalchat.length)
              break
case 'bc':
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('.......')
anu = await Ndyie.chats.all()
if (isMedia && !Ndy.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
bc = await Ndyie.downloadMediaMessage(encmedia)
for (let _ of anu) {
Ndyie.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break           
case 'del':
Ndyie.deleteMessage(from, { id: Ndy.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'spam':
if (!isOwner && !Ndy.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`Gini, ${prefix + command} 6283818744065|Hai Kon`)
if (!q.includes('|')) return  reply(`Format Salah\nContoh : ${prefix + command} 6283818744065|Bot`)
                    if (args[0].startsWith('08')) return reply('Gunakan kode bahasa kak')
                    if (args[0].startsWith(`${owner}`)) return reply(`Mau Ngapain Lu Anjc Ngespam Nomor Owner`)
                    const nomorkiri = q.substring(0, q.indexOf('|') - 0)
                    const pesankanan = q.substring(q.lastIndexOf('|') + 1)
                    var nomor = Ndy.participant
                    tekss = `☠️Spam Chat☠️\n✍️Nomor : @${nomor.split('@s.whatsapp.net')[0]}\n✍️Pesan : ${pesankanan}`
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    Ndyie.sendMessage(`${nomorkiri}@s.whatsapp.net`, tekss, text, {quoted: ftroli})
                    reply(`Spam Berhasil!`)
                    break
            case 'teruskan':		            
            Ndyie.sendMessage(from, `${body.slice(9)}`, MessageType.text, {contextInfo: { forwardingScore: 210, isForwarded: true }})
            break                    
case 'report':
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftroli })
var nomor = Ndy.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
Ndyie.sendMessage(`6283818744065@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'anticall':
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antical)return reply('Sudah diaktifkan sebelumnya!')
antical = true
reply(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if(!antical)return reply('Sudah di NonAktifkan sebelumnya!')
antical = false
reply(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break
case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await Ndyie.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `Ndyie Botz`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, Ndyie, Mek, from)
			break    
    case 'upswimage':
            if (!Ndy.key.fromMe && !isOwner) return reply(mess.owner)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
            cihcih = await Ndyie.downloadMediaMessage(swsw)
            Ndyie.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            Ndyie.sendMessage(from, bur, text, { quoted: Ndy })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (!Ndy.key.fromMe && !isOwner) return reply(mess.owner)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
            cihcih = await Ndyie.downloadMediaMessage(swsw)
            Ndyie.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            Ndyie.sendMessage(from, bur, text, { quoted: Ndy })
            } else {
            fakestatus('reply videonya!')
            }
            break    



//Bokep Indo
   case 'indo1':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
	case 'indo2':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
	case 'indo3':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
	case 'indo4':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
	case 'indo5':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
 case 'indo6':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
 case 'indo7':  
				   qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
  case 'indo8':                       
				   qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
  case 'indo9':                      
				   qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/aipi6xisyppe751/VID-20210107-WA1465.mp4/file' })				   
				   break
  case 'indo10':                     
				   qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
  case 'indo11':              
				   qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
  case 'indo12':            
				   qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
   case 'indo13':          
				   qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
	case 'indo14':   
				   qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
   case 'indo15':  
				   qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
   case 'indo16':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
	case 'indo17':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
    case 'indo18':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
	case 'indo19':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
	case 'indo20':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
	case 'indo21':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
	case 'indo22':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
	case 'indo23':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
	case 'indo24':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break
	case 'indo25':
qute = fs.readFileSync('./Poto/Joel.jpg') 
				   Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption:'*SANGEAN AOWKWKO*\nNih Link Bro Download Sendiri Jing\n\nhttps://www.mediafire.com/file/j3hxseqc3uoc1v7/VID-20210107-WA1526.mp4/file' })				   
				   break 


//Dosa Menu           
case 'dosa1':				 

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
break
case 'dosa2':

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
break
case 'dosa3':	

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
break
case 'dosa4':	

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
break
case 'dosa5':	

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
break
case 'dosa6':	

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
break
case 'dosa7':

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
break
case 'dosa8':	

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
break
case 'dosa10':	

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
break
case 'dosa11':	

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
break
case 'dosa12':	

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
break
case 'dosa13':	

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
break
case 'dosa14':	

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
break
case 'dosa15':

qute = fs.readFileSync('./Poto/Ndyie.jpg') 
Ndyie.sendMessage(from, qute, image, { quoted: ftroli, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
break


//Donasi Menu
case 'donasi':
               list = [ ]
               listmenu = [`dana`,`ovo`,`gopay`,`pulsa`,`linkaja`,`saweria` ]
               listmenuu = [`Dana`,`Ovo`,`Gopay`,`Pulsa`,`Link Aja`,`Saweria` ]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'Ndyie',
                    rows: [
                       {
                        title: `${listmenuu[startnum++ ]}`,
                        description: `Ndyie`,
                        rowId: `${prefix}${x}`
                      }
                     ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${ucapanWaktu}`, `Hai kak ${pushname}, Pilih Menu Disini`, list)
               break
               
      case 'pulsa':
             reply(`PULSA : 083818744065\n\n KARTU AXIS`)
             break
      case 'dana':
             reply(`DANA : 083818744065\n\n ${fake}`)
             break  
       case 'gopay': 
       reply(`GOPAY : 083818744065\n\n ${fake}`)
      break
      case 'linkaja':
      reply(`LINK AJA : 083818744065\n\n ${fake}`)
     break
     case 'ovo':
     reply(`OVO : 083818744065\n\n ${fake}`)
     break
 case 'saweria':
             reply(`SAWERIA : https://saweria.co/Ndyie`)
             break


//Grup Menu
case 'add':
            if (!isGroup) return reply(mess.group)
            if (!isGroupAdmins) return reply(mess.admin)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            orang = args[0] + '@s.whatsapp.net'
            response = await Ndyie.groupAdd(from, [orang])
o = response.participants[0]
            let inv = (Object.values(o))
            if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')

            else if(inv[0].code == 403){

            Ndyie.sendMessage(from, `Mengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: Ndy, contextInfo: {mentionedJid: [orang]}})
            Ndyie.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp,
            groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
            }
            break
           case 'kick':
            if (!isGroup) return reply(mess.group)

            if (!itsMe && !isGroupAdmins) return reply(mess.admin)
            if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
            if (!isBotGroupAdmins) return reply(mess.Badmin)
            y = q.split('@')[1] + '@s.whatsapp.net'
            Ndyie.groupRemove(from, [y])
            reply(`Succses kick target!`)
            break             
            case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (Ndy.message.extendedTextMessage === undefined || Ndy.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = Ndy.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ndyie.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Ndyie.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (Ndy.message.extendedTextMessage === undefined || Ndy.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = Ndy.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Ndyie.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Ndyie.groupDemoteAdmin(from, mentioned)
}
break
case 'demoteall':
		if (!isOwner && !Ndy.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Ndyie.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !Ndy.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Ndyie.groupMakeAdmin(from, members_id)
                break
                case 'linkgroup':  
				    if (!isGroup) return reply(`GRUB ONLY`) 
				    if (!isBotGroupAdmins) return reply(`BOT BUKAN ADMIN`)
				    linkgc = await Ndyie.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    Ndyie.sendMessage(from, yeh, text, {quoted: Ndy})			       
					break
      case "revoke":
        if (!Ndy.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        Ndyie.revokeInvite(from);
        reply("```Succes revoke link group```");
        break
case 'chat':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            Ndyie.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
            case 'kontag':
            if (!Ndy.key.fromMe && !isOwner) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${fake}\n`
            + `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
            + 'END:VCARD'.trim()
            Ndyie.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
            case 'sticktag':
            case 'stag':
            if ((isMedia && !Ndy.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
            file = await Ndyie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Ndyie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: Ndy
            }
            ini_buffer = fs.readFileSync(file)
            Ndyie.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
            case 'totag':
            if ((isMedia && !Ndy.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
            file = await Ndyie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Ndyie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: Ndy
            }
            ini_buffer = fs.readFileSync(file)
            Ndyie.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !Ndy.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
            file = await Ndyie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Ndyie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            contextInfo: { mentionedJid: mem },
            quoted: Ndy
            }
            ini_buffer = fs.readFileSync(file)
            Ndyie.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !Ndy.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
            file = await Ndyie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Ndyie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
            contextInfo: { mentionedJid: mem },
            quoted: Ndy
            }
            ini_buffer = fs.readFileSync(file)
            Ndyie.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
            }  else if ((isMedia && !Ndy.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
            file = await Ndyie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Ndyie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
            contextInfo: { mentionedJid: mem },
            quoted: Ndy
            }
            ini_buffer = fs.readFileSync(file)
            Ndyie.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
            } else{
            reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
            }
            break
case "close":
case 'tutupgc':
        if (!Ndy.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES CLOSE GROUP*`);
        Ndyie.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
case "open":
case 'bukagc':
        if (!Ndy.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*SUCCES OPEN GROUP*`);
        Ndyie.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
case "setname":
        if (!Ndy.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        Ndyie.groupUpdateSubject(from, `${args.join(" ")}`);
        Ndyie.sendMessage(from, "Succes change name group", text, {
          quoted: Ndy,
        });
        break;
case "setdesc":
        if (!Ndy.key.fromMe && !isGroupAdmins) return reply("Admin Group Only");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        Ndyie.groupUpdateDescription(from, `${args.join(" ")}`);
        Ndyie.sendMessage(from, "Succes change description group", text, {
          quoted: Ndy,
        });
        break;
        case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
        case 'setfakeimg':
            if ((isMedia && !Ndy.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Ndy
		    delb = await Ndyie.downloadMediaMessage(boij)
		    fs.writeFileSync(`./Poto/fake.jpg`, delb)
			fakestatus('Sukses')
            } else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
      case "hidetag":
        if (!Ndy.key.fromMe) return reply("Khusus Owner 🗿");
        if (!isGroup) return reply(mess.only.group);
        var value = args.join(" ");
        var group = await Ndyie.groupMetadata(from);
        var member = group["participants"];
        var mem = [];
        member.map(async (adm) => {
          mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
        });
        var optionshidetag = {
          text: value,
          contextInfo: { mentionedJid: mem },
          quoted: Ndy,
        };
        Ndyie.sendMessage(from, optionshidetag, text);
        break;
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Ndyie.sendMessage(from, buffer, sticker, { quoted: ftroli })
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !Ndy.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Ndyie Botz`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && Ndy.message.videoMessage.seconds < 11 || isQuotedVideo && Ndy.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
const media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
Ndyie.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftroli })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Ndyie.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, `Jangan Lupa Subscribe Ndyie Botz`)
fs.unlinkSync(ran)
})
break            
       case 'infogrup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await Ndyie.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              Ndyie.sendMessage(from, await getBuffer(pic), image, {quoted: Ndy, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(Ndyie.chats.get(ido).presences), Ndyie.user.jid]
             Ndyie.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: Ndy, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break              
case 'setppgrup':
              if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(Ndy).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : Ndy
              let media = await Ndyie.downloadMediaMessage(encmedia)
              Ndyie.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
              
              
              
              
              


            


//Random Menu             
       case 'wangy':
              if (!q) retuNdy
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
       case 'mining':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)
              break
       case 'waktu':
              reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
              break
       case 'toxic':
        reply ('kontol memek anjing bego asu')
              break
        case 'citacita':
              const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3' ]
              const cita3 = cita[Math.floor(Math.random() * cita.length) ]
              cita2 = await getBuffer(cita3)
              Ndyie.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: Ndy})
              break
       case 'apakah':
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','YNTKS','Mungkin','Mungkin Iya','Mungkin Tidak','MANA GW TAU' ]
              const kah = apa[Math.floor(Math.random() * apa.length) ]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: Ndy })
              break
       case 'rate':
       case 'nilai':
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39' ]
              const te = ra[Math.floor(Math.random() * ra.length) ]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: Ndy })
              break
       case 'gantengcek':
       case 'cekganteng':
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39' ]
              const teng = gan[Math.floor(Math.random() * gan.length) ]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: Ndy })
              break
       case 'cantikcek':
       case 'cekcantik':
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39' ]
              const tik = can[Math.floor(Math.random() * can.length) ]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: Ndy })
              break
       case 'cekwatak':
              var namao = pushname
              var prfx = await Ndyie.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu' ]
              const wtk = watak[Math.floor(Math.random() * (watak.length)) ]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%' ]
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length)) ]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar' ]
              const sft = sifat[Math.floor(Math.random() * (sifat.length)) ]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri' ]
              const hby = hobby[Math.floor(Math.random() * (hobby.length)) ]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan' ]
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length)) ]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend' ]
              const typo = tipe[Math.floor(Math.random() * (tipe.length)) ]
              await reply(`[ INTROGASI SUKSES  ]\n\n[Nama ]:${namao}\n\n[Watak ]:${wtk}\n\n[Akhlak✨ ]:${akhlak}\n\n[Sifat ]:${sft}\n\n[Hobby ]:${hby}\n\n[Tipe ]:${typo}\n\n[Kelebihan ]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length) ]
              Ndyie.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: Ndy })
              break
       case 'bisakah':
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU','YNTKS','Mungkin','Mungkin Bisa','Mungkin Tidak','Coba Ulangi' ]
              const keh = bisa[Math.floor(Math.random() * bisa.length) ]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: Ndy })
              break
       case 'kapankah':
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi' ]
              const koh = kapan[Math.floor(Math.random() * kapan.length) ]
              Ndyie.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: Ndy })
              break
       case 'jadian':
              jds = [ ]
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length) ]
              diaa = koss[Math.floor(Math.random() * koss.length) ]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0 ]}  (♥️ ) @${diaa.jid.split('@')[0 ]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
              membr = [ ]
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length) ]
              const sips = pushname[Math.floor(Math.random() * msk.length) ]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0 ]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
              membr = [ ]
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length) ]
              const sipss = pushname[Math.floor(Math.random() * msl.length) ]
              teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0 ]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
              membr = [ ]
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length) ]
              const bi = pushname[Math.floor(Math.random() * mge.length) ]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0 ]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
              membr = [ ]
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length) ]
              const an = pushname[Math.floor(Math.random() * tod.length) ]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0 ]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
case 'welcome':
reply ('Silahkan Pilih \nWelcome On\nWelcome Off')
break              
case 'welcomeon':
reply ('Welcome Aktif Kak')
break       
case 'welcomeoff':
reply ('Welcome Non-Aktif Kak')
break       
case 'join':
    if (! Ndy.key.fromMe && !isOwner) return reply(mess.owner)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await Ndy.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
              
              
              
default:
           if (budy.startsWith("$")){
           if (!Ndy.key.fromMe && !isOwner) return reply('```khusus owner bro```')
           	console.log(color('[EVAL]'), color(moment(Ndy.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(chats.slice(2), (err, stdout) => {
           	if (err) return reply(`${err}`)
           	if (stdout) reply(`${stdout}`)
           	})
            }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(Ndy.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(Ndy.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Ndyie.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftroli })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
	console.log('Message : %s', color(e, 'magenta'))
	Ndyie.sendMessage(`0@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Ndyie Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./Poto/Ndyie.jpg'),sourceUrl:"https://youtu.be/7Fu6EpM6mos"}}})
        }
        //console.log(e)
	}
}


	
    

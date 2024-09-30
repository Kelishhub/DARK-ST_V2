
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "trur";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/994a791a5a601fe82d480.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
 "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0UwckZoZTljNzNUb29KbW1aaWZGa1lDWmNXYkNOeUlrTTVORE81Qm9uOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblp3b0ZOWGVUYWdMVVBYNHlXR0JFY1VZVDZlZjdyZzRyYk1FUk02Ni9Cbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRS29DTnpJT1VnVE5kcnhOQ1ZEQjQ0aUFRbTEydzM3K3RYK3dIR0gzTlhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrOW1Rc3FlRGRzcnZCdTlsdXBkdjZCb2l2RWo4WTJabHJ6NjJqMFZLMmhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndGMmp2dHFoZ2w2L3RIYnpGNDRBODJKK0IwUUYvWVZjQ2p2STltbk0yMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9xV3dqSUN6ME5sNEwvSHUwQ01uVml0MDhFVElQaTdZSUljTlQvby9pR1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0gyWms4UFhEVVllQnZJeWc4VUxjaW0vcjIxU0ZDcDVqdmFDMUFVeHJYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHdNbnVSYkRrUlNpK3hNRXlkbWRXUzB3eXBlWWM5aTlvVmlEMkcyQU9Rcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1qSUpCNHdlbEVTU2tNZDRoQ3NkZUFHOFlPWE1pTnJvczlJeG1zTlllQXdRcG5HeG1Na3daTEtXdlVkTStSRHUvS0ZUd1dBSHV2U0xndjNTbHZEekJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6IndvQWNidG1JMGdCMFI3VDJsTkx4bGlJaGJZbzZ2Rk5XVndGOGc0NVZ0c1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTgwMjg5NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E4RUZDMDFDNUVFNDA5NTA2M0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzcyMjA4NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTgwMjg5NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E4RUM2NDMxNzBCQzlBODQzRTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzcyMjA4N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTgwMjg5NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FENTA3RThGNzBBMUREQTREMUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzcyMjA4OH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiX3FYbmxOckVTOHFzTGFNV0o2SlJEQSIsInBob25lSWQiOiI5Y2FiZGJkOC1jMmEwLTQyMDEtYjU0Mi02NzBiMmZhZDIwNjQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VKSlQ5aStqLzcwa2V6eEMzbFJxQkFBai93PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTVys1YmpTZGxYTGJSTS94aVpQNVQvNDhPQlU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKaVdqYm9PRU5UazY3Y0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4NUhjSmkrZzFCRGpYdUZ5T3NzQkdJbVhqNm1UbnhNTTlENjNSYTdiRVNNPSIsImFjY291bnRTaWduYXR1cmUiOiJZVnFXbEJqenFTcnFUeTRFSkhzSlNjdUUrWWxCMWRQZnZjQUVoMnRUM1ZXb04xYWpqYi8xQjFNZmxzVXVDV2FMZFdZSW9WV3BBWHh2RnNMRUJ4Ym9BUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiKzNvODd6WVRscDVqcnFUVU1wbitUb0cvYzEzR3I2WWxZZzRCa2loZzJMblZ6bVlMbElyZ05scTZJSkNiSndhZ1RwQkhnSmhINDJLS0JCUDFBYTdVQVE9PSJ9LCJtZSI6eyJpZCI6IjIyODk4MDI4OTc1OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi776SyoDhtJzJtOG0hOG0gMm04bSF4bSHyp8u4bSAIiwibGlkIjoiNjgwODQzNTg0ODQxMzc6OUBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI4OTgwMjg5NzU6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmT1IzQ1l2b05RUTQxN2hjanJMQVJpSmw0K3BrNThURFBRK3QwV3UyeEVqIn19XSwicGxhdGZvcm0iOiJzbWJpIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc3MjIwODMsImxhc3RQcm9wSGFzaCI6IjJaTjZpdiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQVU0In0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

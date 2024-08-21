
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


  
 "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURTdUJnOUdYSThoK29ud0x2N0dvT1ljTlcvbklCZUlLUmJtRTA5NCtXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzB1azQrTnRaOElaSzdRN1lQWWR3cDd3cU5yK2wxMkxWVGFQc0UwaUdHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRU1Fa2lCT2FiTXZUN3JzQm5ocnZLMjZjNCt3SDNPaDdMdkNtS0lwcTNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Y1hNMWcrTGlZL1FYc3VaR25kdHVKNmZhdk1ZTkw2SEJHc2w5L25IWlJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklDeDNFK3VqRHlQQUZ3MVhETGpjUDFOYmJWNVpWNkhlcW8yMWlKMlpYR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdJS0R4cEJiNG1UaGxEcTlCRnRCYlZ4UUdldU8xa3IyckdROTNmclNRWFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktQQnhmdVBoWjBETzB3U3hGS0lzZ3pSYk9TbHhoNk5lT2FnVmNYVVgxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYk9Ta0IzK1l3NXJTU2JvVDNmaXRxVlVMSzdBUW5aM1hIVXMvMG1acFdtQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5DTjlvcU1EUFZxcUdLZnVwTGFwdTVsYkNzTmhlQ29Sb3JIa3BzRzQzMkMwRk9KTTduVjR2UmlJOUJTcnRXOUt0ZGZJUEVKUFg0RGxoaE56cGcxSWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzcsImFkdlNlY3JldEtleSI6IjF0NFFEOHhwMktsRllFSCtsZVlmdmdmeWdXUTJob2g5TmFiWnJ4Y3VCejQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTgwMjg5NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E4RkI0NjlEMEVBRDc0OTM0NUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzY0ODIzMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTgwMjg5NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E4QURDQTRDRUI0Qzc2QUI5MDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzY0ODIzNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTFd5aDljVXNTTktkcTBVUkxKVkJudyIsInBob25lSWQiOiJhOWJjNDA0Ni0xMjdiLTRkMTQtOWRhNC1iNDFjMTU5MDFmN2YiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzBNdFowVXJENEYvSTJtSjRScTNXNm83RXhzPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTVJ1Qmh4cFNraFkrMUdBSkE3SktXYmRGaWs9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYUJwSThNRU5pUjg3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzdmdRVVMxUTJlbGoycTl2eEJjdzNBY3dZaDdaT1NTRUllRVJieElHa0dzPSIsImFjY291bnRTaWduYXR1cmUiOiJtV0JJWDRHeEZPMndMcWhCOFlMM2VPRG9TNDFMRHl0SzU4N2YvdGdzaFpPTzgxenJ0NkJLWEpEWEhYR1JCZFdmTG11K3JUcThOY1hkRWJEbTF4VElndz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZWl4RDg4SE9MRnBXMlJOY04rYlQyYXI0aUFNUERwYy9ZYTdnZVgwb3M2Y1BZZWpaQWxSY2E2cnRwM0dQanlIWDY3dGZyZTgzUmM3ckpIR0RCbXJxakE9PSJ9LCJtZSI6eyJpZCI6IjIyODk4MDI4OTc1OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0VFXktFTElTSCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg5ODAyODk3NTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ3NEVGRXRVTm5wWTlxdmI4UVhNTndITUdJZTJUa2toQ0hoRVc4U0JwQnIifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzY0ODIyOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQSlMifQ==" //Make sure session id starts with Byte;;;



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

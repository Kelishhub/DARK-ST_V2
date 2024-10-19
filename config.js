
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


  
 "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1JSW11N0N4MGZnY3ZTUGtTMnFCSzVYcTR4NlluTC82SGtYYkRLZE1VMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialltcjl1a2FmblRHVGJoQTdVUHE3QllIVkhra1JieHRxeUFBaTl1RjB5az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSjI0YmxhMGl3MEZBZjE5UHJGSXo4T1pQMkMrSFJ5enpkd3dOMUlkV1h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRcU1tU3JodjBoWWd2WUVwSjFweitMaU03RHVSNEVDU3loMUtBWVBvZEhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMdTMrcmdIa2tGVUxsUEN1R1Z0U3JleHFFSkd1QmNXbmRycnB5YisvMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InN0UFhOcXJSdSt5c0xxVFIxWStjTWJnTTROV01odzdLdzIraSsvd0Rnems9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU4rcEZqeG5iS3RXVllRV0hpb2lGbWZTdDg4R21nS3NPQklmTXJGWmlVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkVWdlFzM1AzUjdhbFRRVnhiaHhRbFZ1YnZ6MU8xbzZNZnFwSEdJdUZqTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhsZmVsdndySGs4VDdPbkhabExHOWw0RUZYVGlFcDhoRDNnN05kYkVvbXo4aGRkeEJNdlF1dlBoRmtYUFd4eGtSTGE4VXZ0RGc4SC9neFU2ZUNYSmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6IjYwNTJXL2FUU2dkeEJPTVJ0NkhNZFF4ajBHTnR0cC9mdzF0NEhzUkFaZzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTgwMjg5NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E0MTkyRDAyNDgxQjY3RTVCNzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTM2MzEyMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTgwMjg5NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0ExQTcyMkFFOUMyODlDRkY0MDEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTM2MzEyM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiekVISHh0MjJRN21jelBGVlc1YldLQSIsInBob25lSWQiOiJmMWExODBmZC0wMmI5LTQ4YmItOWQzOS00YTg0OWJlN2M5ZjQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3Q3VHpvUm81MWkvZWQzMnFuOW1VS1JodXpJPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtcXR4NDB5cThoOWYyOHlkWVNXemVkMWhtNm89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQZkJtNGNERUtINXo3Z0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJySFVRdC8xV25vdDVOSFFSWjloYjQ5VkRyVmhhekxIRmFXLzJtMjZ3a1RRPSIsImFjY291bnRTaWduYXR1cmUiOiJ1elJGZTI1NG1vTGFsSWtqNzcwQnM2b2h3WWFPMmJIcFQ3YWdSTUlEWXpnUTU3a2llUFYxOFBSTGtXVDRTOHl0b00rUDZaVnlKOTB6c0Yra0RPZE5pUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiN3U2UUMxTVlkYktpT25obEVObU5vSndqWjVZbnVFNWpYN1RLbjVzejFiRXMwdEErT0VVT1FWRXgrMy9Wa0tQekhpNERYazludm8yZlRvS2VCODUvaFE9PSJ9LCJtZSI6eyJpZCI6IjIyODk4MDI4OTc1OjEyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjgwODQzNTg0ODQxMzc6MTJAbGlkIiwibmFtZSI6IktlbGlzaHp6In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyODk4MDI4OTc1OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmF4MUVMZjlWcDZMZVRSMEVXZllXK1BWUTYxWVdzeXh4V2x2OXB0dXNKRTAifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MzYzMTE4LCJsYXN0UHJvcEhhc2giOiIyWk42aXYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5rZiJ9" //Make sure session id starts with Byte;;;



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

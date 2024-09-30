
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


  
 "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK09xYlpwa1lUdGIxSzlPeDBUeWFFaENHN2hPT2VOQkNiZ2dCMUtQTTlIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHp4WGdRaEFvTCtqcHgxKzJNd0p6djZ4cmNUYmpjbEgzVkRnaTMyM1VqOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQU04aEt5M3poVjlLUlpjQWRncHNrbnRtdEJQaUJiUVNnUHZJRDk2KzFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0V3A1dWNTZzRnKzBERlBmbnRqaUluSXYwMmNybThyTnp0Q09ZbWlJNG40PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdCa0JXeWptUk8zckxIRGt3OUpFcG11dnBVSXl5Z05UWDZ1RDVOQ1RjMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYrdVRPZ1FOZDFGbCtSR2pPWS8rTXRCa3RjWTJCN2djWFlKMUFHTDJHVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxUQ2ZsWVhvWXRPMlQ5R2txcEpJZ3djMitLMlgwQmtHdG5rcnZnaFJuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibm54VFpHSmlIK2t1NTM2Y0c1SHBCYndhOE5qMmcrUlBnMno2eE5mTWpSTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPbFFZdXlacWRzZElQdEhZdnB4eTRJeUI4M1YxN3czZ0lsd3ZhWUJJckJOa1Y5eTRFUGZ1RUVTa1RwaWNwckI5anFqaWdOdWN6YUJCNDBmSHd6Zmd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6Ilh2MGphZjF3dUlnOE9nb2pDRzBNME9JZzJRZDVkRWhVWWk3T3MrOG5OTFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjI4OTgwMjg5NzVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E0RTcwQzg4MzAzQzM3OTkyRDcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzY3MDQ2OH1dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiblN5VjBUelNTbktDakQzc0ZNZm5VUSIsInBob25lSWQiOiIyZTM5YmUzMy1hYTMxLTRkMjItYmU4Mi0xYTYzNGI4ZDg0MDAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiakFHTDR5MEswOXlTU2FKZjRuZktjQ2hkU3hZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJETHA2aUdjRWl3TEh0WklxR0JCWVVZMlJKSm89In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdVA2cllERUxUUjZMY0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCTUlyOUg2MzRWOXNVTVVRVDR3NllNUkFoMktUZXhLU2E2aE1xZVRZT21rPSIsImFjY291bnRTaWduYXR1cmUiOiJ3Z0VqYXBPd25tZUpsRWFmVjZ6YVpUSWhWeXlmejBidzlHRFZqSmlOZGdneTd6YVd4Z0JIRWlrMkVIWlhONHJiSzU0UmJ2M3FWQlJ3TGJkVEZMT1FpUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNHJucGxuK0dJdTl4azRpVEF6WnhOQ2ZNVFlMaXdJcVgwU0NMWnlnTkNOaEY2NHpBQkR4TjVpcTRrdnVPQVlrcGlFMUx5MEhrVEVjSU1SRkY3UVhVanc9PSJ9LCJtZSI6eyJpZCI6IjIyODk4MDI4OTc1OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi776SyoDhtJzJtOG0hOG0gMm04bSF4bSHyp8u4bSAIiwibGlkIjoiNjgwODQzNTg0ODQxMzc6OEBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI4OTgwMjg5NzU6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRVENLL1IrdCtGZmJGREZFRStNT21ERVFJZGlrM3NTa211b1RLbmsyRHBwIn19XSwicGxhdGZvcm0iOiJzbWJpIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc2NzA0NjUsImxhc3RQcm9wSGFzaCI6IjJaTjZpdiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTU81In0=" //Make sure session id starts with Byte;;;



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

//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5RbkFaRmpvN2ZnM1hOT0tpMzhTcmdiWEI2UmtERjlXaUNxaDFZVzdubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZk1SaVkwekpKczkxN2pqenFzcEVZM3RrTWZtS1lQVzFIWFpTeTdaSzJqaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUGkrR1F1V3ZIOGsxRml4Q21IU01aK2pPNEtScG51WDNybTIxOFowTVVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3dmhaYk5MWmlxZUFvS2pUa0xrMWFzUmZsUjBrTmphNlhXakZoVkhQN2xVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVNZ05iREVpbnk4aGVMVTZ1L0FpemZjeGJBeFdYYW5Fdi83MXZMTE5GRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5wM1ZpT1ltOGhuQmw0N09hREZXcXZQNEt3WnY0bGt3Qks0RVlZU09UQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZ6cWIzU1VlWGs3cDFydlF2KzdFbndEejVMSHIwR3NHbVdLckJFZTZHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDYrNGVUbDd5NDVsbmdzdzJxc1RqNXZ0ZzJVL1g5UTZlUE1nNmJKQkJsUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFUHNzNXRzQnJEM3R4TmNaVTRSTEFJZ3V2cE9aWjl0dmMrdzJYRmtLZy9OeHhWSkZEYnVsU2JRY1NnL1FpRDRLbFdQNGQ5NnZzVFRUL2FmUWJkNWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6ImdxdHJhRlM3a3B3QTlDa3JHTzlUWERiUVVGNklUZ21aTUJlK1loQzBtY009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InBZNHI5dGVHUWN5UGtrOE8zOXJtd2ciLCJwaG9uZUlkIjoiOGNkN2Y3MTUtMjkwMy00ZGRlLTgzNmQtNDhhZGRlNGRiYmUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJ5Wnc5d2ZJS1lVeXRKVVBva0hJSkI2QzFyUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbmIrSDRDRFJuYm5NNkJ0VkMweERZRjdTQ1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTkJTTktFUVEiLCJtZSI6eyJpZCI6IjIzNzY3NTU5NzMyMToxMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZG18J2RrvCdkbfwnZG58J2RtiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkdBcFJNUTdPWEd0QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSmdhbGpWaDFLNU5TT3ZSRERqZk9NdFFQMWVpOGQ0SUlGSDBPTnY1QTN6bz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMEt1MTR3R2x3UnpLai9ueHdwT3FUT3h6Z1FFbHFkM2lEbDhzVCsvVkt4Qm1jNkVkcnFCdXpLM25tSGJVY2RoMkM2SW5BeGh0UlpsLzQ2SlVPV2NyQnc9PSIsImRldmljZVNpZ25hdHVyZSI6InpjSHhhWFN5YWExdHBFSVkyay96MXdWalBHRmN2VXF5Z0RwTjBTdHRSL2wrdlQ0cHpFN2tMWFJxRXI3OWNzSitrdjZxZXhIS0JGL3BNeWUwNFI0dWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njc1NTk3MzIxOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNZR3BZMVlkU3VUVWpyMFF3NDN6akxVRDlYb3ZIZUNDQlI5RGpiK1FOODYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA4MjQ1NzB9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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

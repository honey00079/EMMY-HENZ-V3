//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUduejNXWHlyVmNvUHppR1NvVmxBcURiZmdKZzN5YXp5V3pPc1h4N0szND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3FFbElubVlqUit4Q1EybXFXOWI4d3MwMExqSXNCS0Q3QVRER01FejBGTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSW1UVFJvQjlrbnVhY1oxanJCaUs1Z2FYUm9OL2RyaWtsZEpNMG1zbzFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIYm1tSmxxU1VKYjFTY2RjNVBLYzZnQUNhZUdUV2wvZThYUUNBcHhZQlJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9DUVMxSjRQL0FpSlNCamJRM2FPTTRQUDgzRThVYnNYRElRWjN1MGw3SFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllmdmxaUFhaTHFvMG5xeDlOWmRGREJFSVJQNHpZd1pmL0d4SWo0QUlDejQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJnWG5pUWtzWnUxWHZYMGpuaytzc29ONnl1eG1JL29lS3RRVmZ2WmlGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWlArYUhvZlhBMW5XVmJtU1N1UlNrS3REazQwTllCWnNtUldyc2FLTWhBQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpJRC9MVFpKZkR4WW9sNU1OSEJuby9OSmdWa3pCVWpRM21KRmZybGZlUWRkMW9VSnEyT2RaTHIvc1kzVk51NS9mVk04QkwwNjlGeGNKaGhBMHp1amd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJQUVJydWdKSG1EV2x2R3FhL3RkTnVwMFNzclJPdnd2RExCWFpKaENtSHpRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZaWM5enBub1FZVzJpNEZ1S3dwTG1RIiwicGhvbmVJZCI6IjhkODE5MTJiLWU0YmEtNDc1MC04ODdkLThmMDdhMDUxN2ExZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyMzJ1RUpKaFRXbUZRNHRCTXlYZU5GTVI0Q2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTJ0cUovK3MwK0ZTUjFtU3pVbFE5R1d2c1JVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRXR1hFTE0xIiwibWUiOnsiaWQiOiI5MjMxNzcyMzU2MDU6MjRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lHWXVzVURFSjZQL0xjR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBwN01yMXlWNzc0WkNhNHlNL1FLRG9qNks2OGEya2h5dlQ4VkRBSStxQkU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlSMTl3M3NTb1MwYWFDRlVTTCtPUVR5M1o0blF0emlWTUFpWUNySHVydnZpQldZWm4zNEVCWjFpaXdKSXhPK0RXV2hmbDZnU2JITFFBQ2VaWllZY0RRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5ZUJBZUhUcmFXUkdTWTRnY2JMelRsVGtKRm02M3Q0azFCWmtJVmkwbFJrUVdVU3hGZVU5K0dIU3puODgvYy95am1KdWl0WDd0K21QNURyWFRLUWtqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE3NzIzNTYwNToyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkS2V6SzljbGUrK0dRbXVNalAwQ2c2SStpdXZHdHBJY3IwL0ZRd0NQcWdSIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3OTg5Njc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdsaCJ9"
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
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

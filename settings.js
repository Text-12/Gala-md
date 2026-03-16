iconst fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('settings.env'))
    require('dotenv').config({ path: __dirname + '/settings.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || 'B.M.B-TECH;;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZiaGlzN0V2SHUwT2Qza1VsVkZHMEFDaXIyS1V6ZExha0poWmtpYTkwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFFVWVNOZ3BCd3BFZlQ2ZUZoQWZ4YVZXbjVSeDdrOEp2TlZWY2J4MEZpTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRy9nODBmVWw5d3EzdndqeWwvMDZDUi85L3M3MjZkQlM0cFVKNU9MNzFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQSElPcUt6RzZVNHlSV2ozb0J4aGo2T2kzOVpFWXlIWVAyRzlEQll2MFhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJczdZKzZIN3F1YW04K1BuR0FvQlR3TllPaEhnUjZoZnRTcG93KzRURzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxFTWgzd2ord3dLWTl4NDBOaHdtQ2ZURUFDZHo0OXF0R0hOd05sNStmbDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1wa1hYS2NKQzMxQ01NN2lPdm9zcVVXSjJtdklUeEt3U0g0WXhjNTUwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEZBU3BvVzhIclZPWUhUVURxNWM0cFcwVUl5UUEvOVNrYkFSZlF4SnFDaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp1V3ZJWktaNkFzZWZiWDIzQVJSRzRFRGxSbVBSVXFzeWFMZWR3aGF3aDRlRHJDZFR3Z0U3MXJNcnJQaC8wTisrc1F5Qm9xQm54ZUptQlo1ajU0N2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6ImtzNUlza2ZoSS8zb2htc1ltdTBWbWhrZEdGRVlac2pvTWpjM2pXaHJqb3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDQ5OTg2OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNBMThCNjkzMTQ0MUEyNTEyM0QzOUQ1QkU1M0NDOEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzQ4NjcxNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDQ5OTg2OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNCNzk0RTM3QTc0Qzc3NTJDNkE2RERCMjk1OEQ5OTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzQ4NjcxNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDQ5OTg2OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNBOURDQjBDNDBEMDdENDM3QkY4M0QwRUUzQjJDQTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzQ4NjcxNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDQ5OTg2OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM5RTE4RDVBMUY0RDY3ODE2NjYwQkQ0MkE4MkMxMjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzQ4NjcxNn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDQ5OTg2OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNCQkMwRTRBQjBFNkZGMTY2Q0MyQjY0NTIyQjM3MjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzQ4NjcyOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDQ5OTg2OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM3QjYwRDE1NDVDQzIyRUM1RTM1MDRGNjhCRkFFRUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzQ4Njc0MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDQ5OTg2OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNFRkU0ODVCNzlCQjAxM0YxN0MwQUIyMUQ4QTVEMUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzQ4Njc1M30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3MDQ5OTg2OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM0Q0I5MDExRUJCMUE4ODJEQ0U4RTYyQUIxQUY4RjMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3MzQ4Njc2NX1dLCJuZXh0UHJlS2V5SWQiOjgyMCwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgyMCwiYWNjb3VudFN5bmNDb3VudGVyIjo0LCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiOTQ3MDQ5OTg2OTI6MjJAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxNjQ5ODc2NDU0NzI4MDY6MjJAbGlkIiwibmFtZSI6IvCdkIFfX1/wnZCOX19f8J2QkyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTJTL3RjSEVPdUUxYzBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZGRybXFMREorVmpPUjJqRWUyU1kyaHBKNUpzcGxyblpOQ0Y0ZmIxdTFnOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUUdjbi9sRHlZODh2ZlRJdllrZHU3V0NuaGs1MGFaQ1RMcDJyeDZ2QlpzYTdUMElTcElXUmNBZXljQVJiWGtLNnhtWXJJSmVmOUNDeFRIR0FqbTh5REE9PSIsImRldmljZVNpZ25hdHVyZSI6IldONC9IMUZNcjdWUkxoUzRvVFp5bmtPRHpKTUtvWFBicVF0akhuY2wvMno4ZFFqMlYrU1I2UFBkUTMzczVmTkNKRnc3RGIrQlNvajJ2bmhKM043VmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDQ5OTg2OTI6MjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWFhhNXFpd3lmbFl6a2RveEh0a21Ob2FTZVNiS1phNTJUUWhlSDI5YnRZUCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzczNDg2NzEzLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNZMyJ9',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝐛𝐦𝐛 𝐭𝐞𝐜𝐡",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254769529791",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "on",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'off',
    BOT : process.env.BOT_NAME || '𝐛𝐦𝐛 𝐭𝐞𝐜𝐡',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/8qq3l4.jpg',
    MODE: process.env.PUBLIC_MODE || "on",
    PM_PERMIT: process.env.PM_PERMIT || 'off',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY, 
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '',
    ANTICALL : process.env.ANTICALL || 'on',   
    AUTO_BIO : process.env.AUTO_BIO || 'on',               
    DP : process.env.STARTING_BOT_MESSAGE || "on",
    ANTIDELETE_PUBLIC: process.env.ANTIDELETE_PUBLIC || "on",
    ANTIDELETE_DM: process.env.ANTIDELETE_DM || "on",
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'on',
    AUTO_READ : process.env.AUTO_READ || 'on',
    CHATBOT: process.env.CHATBOT || 'off',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

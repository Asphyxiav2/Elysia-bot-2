const axios = require('axios');
const prefix = global.config.PREFIX;

module.exports.config = {
    name: "mlnn",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Kim Joseph DG Bien",
    description: "mlbb nickname getter",
    usePrefix: true,
    commandCategory: "tool",
    usages: "mlnn <userid> <serverid>",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
    const userId = args[0];
    const serverId = args[1];

    if (!userId || !serverId) {
        return api.sendMessage(`Usage: ${prefix}mlnn <user id> <server id>`, event.threadID);
    }

    try {
        const response = await axios.get(`https://mlbb-nn-api.vercel.app/api?userid=${userId}&serverid=${serverId}`);
        const nickname = response.data.nickname;

        api.sendMessage(`MLBB NAME: ${nickname}`, event.threadID);
    } catch (error) {
        api.sendMessage("Error fetching nickname. Please check the provided userid and serverid.", event.threadID);
    }
};
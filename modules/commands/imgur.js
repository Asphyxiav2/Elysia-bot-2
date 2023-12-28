const axios = require('axios');

module.exports.config = {
    name: "imgur",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "saikidesu",
    description: "Upload the following into imgur",
    usePrefix: true,
    commandCategory: "utilities",
    cooldowns: 5,
    usage: "[reply/url]",
    aliases: ['imgurl', 'imageurl'],
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID, messageReply, type } = event;
  let baseUrl = "https://sampleapi.netlify.app/.netlify/functions/api" || "https://sampleapi-mraikero-01.vercel.app/get";
    try {
        if (type == "message_reply") {
            if (!messageReply.attachments || messageReply.attachments.length == 0) {
                return api.sendMessage("Oops, You have to reply to a photo", threadID, messageID);
            } else if (['photo', 'animated_image', 'sticker'].some(attach => messageReply.attachments[0].type == attach)) {
                const url = messageReply.attachments[0].url;

                console.log(url);

                let { data } = await axios.get(baseUrl + '/imgur?', {
                    params: {
                        url
                    }
                });

                if (data.code == 400 || data.code == 500) {
                    return api.sendMessage("[ERR] " + data.error, threadID, messageID);
                }

                console.log(data);
                return api.sendMessage(data.result.link, threadID, messageID);
            } else {
                return api.sendMessage("Oops, That's not a valid attachment!", threadID, messageID);
            }
        } else {
            console.log(args);
           if (args[0] && args[0].startsWith('http')) {
            let url = args[0];

            let { data } = await axios.get(baseUrl + '/imgur?', {
                params: {
                    url
                }
            });

            if (data.code == 400 || data.code == 500 ) {
                return api.sendMessage("[ERR] " + data.error, threadID, messageID);
            }

            console.log(data);
            return api.sendMessage(data.result.link, threadID, messageID);
        } else {
            return api.sendMessage("Oops, Invalid use of Command!", threadID, messageID);
        }
        }
    } catch (err) {
        if (err.message === "Cannot read property 'startsWith' of undefined") {
            return api.sendMessage("Oops, Invalid use of command!", threadID, messageID);
        }

        console.log(err);
        return api.sendMessage("[ERR] " + err, threadID, messageID);
    }
};

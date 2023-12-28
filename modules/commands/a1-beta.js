const fs = require("fs");

module.exports.config = {
    name: "prefix_bet",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "VanHung - Fixed by LTD",
    description: "Watch your language!",
    commandCategory: "prefix",
    usages: "bot",
    cooldowns: 20,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
    var { threadID, messageID, body } = event;

    const triggerWords = ["coin_bet"];

    const lowercaseBody = body.toLowerCase();
    if (triggerWords.some((word) => lowercaseBody.includes(word))) {
        // Randomly select "heads" or "tails" with a 50% chance
        const result = Math.random() < 0.5 ? "You got heads" : "You got tails";
        var msg = {
            body: `Coin flip: ${result}`,
            attachment: fs.createReadStream(__dirname + `/noprefix/kafkacard.gif`),
        };
        api.sendMessage(msg, threadID, messageID);
    }
};

module.exports.run = function ({ api, event, client, __GLOBAL }) {
    // Your run logic here if needed
};
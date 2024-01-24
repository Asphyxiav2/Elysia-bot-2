const fs = require("fs");
module.exports.config = {
	name: "sus",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sus",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("W0ndahoy")==0 || event.body.indexOf("WONDAHOY")==0 || event.body.indexOf("Wondahoy")==0 || event.body.indexOf("wondahoy")==0) {
		var msg = {
				body: "wondahoy",
				attachment: fs.createReadStream(__dirname + `/noprefix/wondahoy.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😱", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
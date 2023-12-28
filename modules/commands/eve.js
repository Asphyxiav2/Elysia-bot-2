module.exports.config = {
	name: "eve",
  version: "7.3.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("good evening")==0 || event.body.indexOf("Good evening")==0 || event.body.indexOf("good Evening")==0 || event.body.indexOf("Good Evening")==0 || event.body.indexOf("evening")==0 || event.body.indexOf("Evening")==0 || event.body.indexOf("magandang gabi")==0 || event.body.indexOf("Magandang gabi")==0 || event.body.indexOf("magandang Gabi")==0 || event.body.indexOf("Magandang Gabi")==0 ) { 
		var msg = {
				body: `What a fine night we're having today, mine became better after you greeted me ${name} ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

const { exec } = require('child_process');

module.exports.config = {
    name: "shell",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "SaikiDesu",
    description: "Execute a shell command",
    commandCategory: "system",
    usages: "[command]",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const command = args.join(" ");
    const GOD = global.config.GOD;
    const permission = ["100093099606387"];
//console.log(global.config.GOD);
    
    if (!command) {
        return api.sendMessage("Please provide a command to execute.", event.threadID, event.messageID);
    } else if(/(mv|cat|cp|rm|env|set|unset)/gi.test(command) && ![...permission, ...GOD].some(id => id.match(event.senderID))){
        return api.sendMessage("You don't have the power to do that!", event.threadID, event.messageID);
    }
    try {
        let result = await deezFckingShell(command);
        result = `Output:\n\n${result == '' ? "Done!" : result}`;
        result = result.replace(/\b\.com\b/gi, "**.com");  
        let chunks = result.match(/[\s\S]{1,8000}/g);

        async function chunksDelay() {
            for (const chunk of chunks) {
                console.log(chunk);
                let msg = {};
              
                if(/\b(.com|.net|.co)\b/gi.test(chunk)){
                    msg = {
                        body: chunk,
                        url: "https://github.com/Mra1k3r0"
                    }
                    
                } else {
                    msg = {
                        body: chunk
                    }
                   
                }
                await new Promise(resolve => setTimeout(resolve, 500));
                //console.log(msg);
                 api.sendMessage(msg, event.threadID, (error, info) => { 
                if(error)
                     return api.sendMessage(chunk, event.threadID);
                 }, event.messageID);
            }
        }

        await chunksDelay();  
    } catch (error) {
        api.sendMessage(`Trouble executing:\n\n${error.message}`, event.threadID, event.messageID);
    }

};

function deezFckingShell(cmd) {
    return new Promise((resolve, reject) => {
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(stdout);
            }
        });
    });
}

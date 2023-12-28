const axios = require('axios');
const { writeFileSync, createReadStream } = require('fs');

module.exports.config = {
    name: "gen",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "saikidesu",
    description: "<prompt> | [number of models]",
    usePrefix: true,
    commandCategory: "AI",
    cooldowns: 5
},

    module.exports.run = async function ({ api, event, args }) {

        let [prompt, modelNum] = args.join(" ").split("|").map((item, index) => index === 0 ? item.trim() : parseInt(item));

        const models = await getModels();
        const ln = models.length;

        if (/(?<!-)(--list|-l)\b/gi.test(args)) {
            return listAvailableModels(api, event, models);
        }

        if (!args[0]) {
            return api.sendMessage("Prompt cannot be empty!", event.threadID);
        } else if (modelNum) {
            if (modelNum > ln) {
                return api.sendMessage("Model is not available yet, max number is " + ln + "\n\nType '" + this.config.name + " --list' to view the lists of available models.", event.threadID);
            }
            modelNum = modelNum - 1;
        }

        const apiUrl = `https://sampleapi.mra1k3r0.repl.co/get/aiimage/generate?prompt=${encodeURIComponent(prompt)}&model=${modelNum}`;
        try {
            const response = await axios.get(apiUrl);
            console.log(response);

            await finish(api, event, response.data.imgUrl);
        } catch (error) {
            console.log(error);
            api.sendMessage(error.message, event.threadID);
        }

    }

async function getModels() {
    return (await axios.get('https://sampleapi.mra1k3r0.repl.co/get/aiimage/models')).data.models;
}

async function listAvailableModels(api, event, models) {
    let msg = "";
    let c = 0;
    for (let model of models) {
        msg += `${c + 1}. ${model}\n`;
        c++;
    }
    return api.sendMessage("List Of Available Models (ALL " + c + "): \n\n" + msg, event.threadID);
}

async function finish(api, event, imageUrl) {
    const filePath = `${__dirname}/cache/prodia${event.senderID}.png`;
    const imgdata = await downloadImage(imageUrl);
    await writeFileSync(filePath, imgdata);

    api.sendMessage({
        attachment: createReadStream(filePath)
    }, event.threadID, event.messageID);
}

async function downloadImage(imageUrl) {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        return response.data;
    } catch (error) {
        throw new Error('Error downloading image');
    }
}
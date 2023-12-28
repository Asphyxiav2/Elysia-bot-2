const fs = require("fs");

// Function to read image URLs from a file
const readImageUrls = () => {
    try {
        const data = fs.readFileSync(__dirname + "/imageUrl.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading image URLs:", error.message);
        return [];
    }
};

// Function to write image URLs to a file
const writeImageUrls = (urls) => {
    try {
        fs.writeFileSync(__dirname + "/imageUrl.json", JSON.stringify(urls, null, 2), "utf8");
    } catch (error) {
        console.error("Error writing image URLs:", error.message);
    }
};

let ImagehImages = readImageUrls();

module.exports.config = {
    name: "prod",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Nath Aniel Lobo",
    description: "beta",
    commandCategory: "random-img",
    usages: "prod",
    cooldowns: 0,  // Set cooldown to 0 for no cooldown
    maintenance: false,
    maintenanceMessage: "This command is currently experiencing issues. Please try again later.",
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    if (module.exports.config.maintenance) {
        return api.sendMessage(module.exports.config.maintenanceMessage, event.threadID);
    }

    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];

    const ImagehMessage = "";

    const sendImagehImage = () => api.sendMessage({
        body: ImagehMessage,
        attachment: fs.createReadStream(__dirname + "/cache/1.jpg")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);

    // Check if the command is "imageh add" and the reply contains an image attachment
    if (args[0] && args[0].toLowerCase() === "add" && event.messageReply.attachments.length > 0) {
        const imageUrl = event.messageReply.attachments[0].url;
        ImagehImages.push(imageUrl);

        // Write updated URLs to the file
        writeImageUrls(ImagehImages);

        return api.sendMessage("Image URL added successfully.", event.threadID);
    } else {
        // Default behavior: Send a random image
        return request(encodeURI(ImagehImages[Math.floor(Math.random() * ImagehImages.length)])).pipe(fs.createWriteStream(__dirname + "/cache/1.jpg")).on("close", sendImagehImage);
    }
};

const CharacterAI = require("node_characterai");
let characterAI = new CharacterAI();
//characterAI.puppeteerPath = "/nix/store/ia69plrrvn7czdhn3flq1ll39i92ixab-chromium-92.0.4515.159/bin/chromium-browser";
characterAI.puppeteerLaunchArgs = ["--no-sandbox", "--disable-setuid-sandbox"];

async function loginCai() {
   
  //  await characterAI.authenticateWithToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJpc3MiOiJodHRwczovL2NoYXJhY3Rlci1haS51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDU4Njc0Mzk3MDQzNzM5NTg2NjMiLCJ");
    let accessToken = "", idToken = "";

    try {
        await characterAI.authenticateWithToken(accessToken, idToken);
    } catch (error) {
        console.log(rror.message);
    }

}
loginCai();

module.exports.config = {
    name: "cai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Nath",
    description: "Talk to characters",
    commandCategory: "ai",
    usages: "[(prefix) prompt]",
    cooldowns: 2
};

module.exports.run = async function ({ api, event, args }) {
  // await loginCai();
    let { threadID, messageID } = event;
    let prompt = args.join(" ");
    if (!prompt) return api.sendMessage("Prompt is empty!", threadID, messageID);

    try {
        const characterId = "iO8Mv8j8RyuUXsdJIhp2UL1ctUsWdKvBpZlRlt3EoRM";
        const chat = await characterAI.createOrContinueChat(characterId);
        try {
            const response = await chat.sendAndAwaitResponse(prompt, true);

            console.log(response);
            api.sendMessage(response.text, threadID, messageID);
        } catch (error) {
            api.sendMessage(error.message, threadID, messageID);
        }
    } catch (error) {
        api.sendMessage(error.message, threadID, messageID);
    }
}

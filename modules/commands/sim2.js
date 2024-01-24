module.exports.config = {
    name: "Cai",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Nath",
    description: "Talk to characters",
    commandCategory: "cai",
    usages: "[(prefix) prompt]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
 const CharacterAI = require("node_characterai");
const characterAI = new CharacterAI();

(async () => {
  // Authenticating as a guest (use `.authenticateWithToken()` to use an account)
  await characterAI.authenticateWithToken("eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVqYmxXUlVCWERJX0dDOTJCa2N1YyJ9.eyJpc3MiOiJodHRwczovL2NoYXJhY3Rlci1haS51cy5hdXRoMC5jb20vIiwic3ViIjoiZ29vZ2xlLW9hdXRoMnwxMDU4Njc0Mzk3MDQzNzM5NTg2NjMiLCJ");

  // Place your character's id here
  const characterId = "iO8Mv8j8RyuUXsdJIhp2UL1ctUsWdKvBpZlRlt3EoRM";";

  const chat = await characterAI.createOrContinueChat(characterId);

  // Send a message
  const response = await chat.sendAndAwaitResponse("User Prompt", true);

  console.log(response);
  // Use `response.text` to use it as a string
})();
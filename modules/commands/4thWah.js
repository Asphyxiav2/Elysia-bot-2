module.exports.config = {
  name: "4thWah!",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nath Aniel Lobo",
  description: "Forbidden WAH!",
  commandCategory: "nsfw",
  usages: "4thWAH",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];

  //Links in an array
  var link = [

    "https://i.imgur.com/MfHMXhH.jpg",
    "https://i.imgur.com/bda0zBH.jpg",
    "https://i.imgur.com/fOIkdIk.jpg",
    "https://i.imgur.com/np8BXVk.jpg",
    "https://i.imgur.com/9aRQlsg.jpg",
    "https://i.imgur.com/oYvEJMJ.jpg",
    "https://i.imgur.com/vzGZVW0.jpg",
    "https://i.imgur.com/RZn9ILe.jpg",
    "https://i.imgur.com/piUAs4n.jpg",
    "https://i.imgur.com/fWgVCZ2.jpg",
    "https://i.imgur.com/fWgVCZ2.jpg",
    "https://i.imgur.com/myBzCeB.jpg",
    "https://i.imgur.com/07xbuqj.jpg",
    "https://i.imgur.com/znYDmcE.jpg",
    "https://i.imgur.com/hL9g2lp.jpg",
    "https://i.imgur.com/qO2GX1K.jpg",
    "https://i.imgur.com/hrFFxr6.jpg",
    "https://i.imgur.com/cCT3nji.jpg",
    "https://i.imgur.com/2ugUZkq.jpg",
    "https://i.imgur.com/upOvGQS.jpg",
    "https://i.imgur.com/1QkfSeV.jpg",
    "https://i.imgur.com/EeOq1eP.jpg",
    "https://i.imgur.com/7d70oQl.jpg",
    "https://i.imgur.com/azV1wlg.jpg",
    "https://i.imgur.com/uRiXoon.jpg",
    "https://i.imgur.com/jdF5FRo.jpg",
    "https://i.imgur.com/f2imHb4.jpg",
    "https://i.imgur.com/bPe0Q3M.jpg",
    "https://i.imgur.com/06mNG3F.jpg",
    "https://i.imgur.com/Z6XcGZH.jpg",
    "https://i.imgur.com/FKRabDX.jpg",
    "https://i.imgur.com/7mCn2DR.jpg",
    "https://i.imgur.com/G4vS2Pd.jpg",
    "https://i.imgur.com/ZOm6kpI.jpg",
    "https://i.imgur.com/uzSEvNj.jpg",
    "https://i.imgur.com/dtC5ox8.jpg",
    "https://i.imgur.com/pCXGRGG.jpg",
    "https://i.imgur.com/x72jVw5.jpg",
    "https://i.imgur.com/tMmyuui.jpg",
    "https://i.imgur.com/2vNHlCy.jpg",
    "https://i.imgur.com/v1fdyDd.jpg",
    "https://i.imgur.com/k9A44Sw.jpg",
    "https://i.imgur.com/LaAaovO.jpg",
    "https://i.imgur.com/08Zf3i0.jpg",
    "https://i.imgur.com/SwNFwME.jpg",

    ];
    var callback = () => api.sendMessage({
        body:`Make sure Mama Ina Wont Find It\nNumber of photos: ${link.length}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.jpg")
    }, 
    event.threadID,() => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 


}


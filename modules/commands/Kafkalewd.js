module.exports.config = {
  name: "kafkalewd",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nath Aniel Lobo",
  description: "Random kafka Pics",
  commandCategory: "nsfw",
  usages: "kafkalewd",
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
  var link = [

     "https://i.imgur.com/12KbpSD.jpg",
    "https://i.imgur.com/ppCVDbc.jpg",
    "https://i.imgur.com/Xn3JpZl.jpg",
    "https://i.imgur.com/98JGUhT.jpg",
    "https://i.imgur.com/I8GLtz9.jpg",
    "https://i.imgur.com/JSTCTsr.jpg",
    "https://i.imgur.com/HiSSzra.jpg",
    "https://i.imgur.com/BXN1pSV.jpg",
    "https://i.imgur.com/HvKUTW5.jpg",

    ];
      var callback = () => api.sendMessage(
        {
          body:`Random Kafka Pic\nNumber of photos: ${link.length}`,
          attachment: fs.createReadStream(__dirname + "/cache/1.jpg")
        }, 
        event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 


}


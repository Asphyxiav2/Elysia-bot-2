module.exports.config = {
  name: "1stWah",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nath Aniel Lobo",
  description: "Forbidden WAH!",
  commandCategory: "nsfw",
  usages: "1stWah",
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

    "https://i.postimg.cc/2ySXzYCq/Ninomae-Ina-nis-full-3336248.jpg",
    "https://i.postimg.cc/WpS1SwKS/Eh7z-Xtb-Vo-AAOH90.jpg",
    "https://i.postimg.cc/5twxzBLB/Eqjg4yz-VQAAdp-LO.jpg",
    "https://i.postimg.cc/mDjBXTdh/Frr-Cgc-ag-AAAjh-F.jpg",
   "https://i.postimg.cc/jqJrnQTL/FNXf-Xl8-VUAIe-L24.jpg",
"https://i.postimg.cc/9fzk5CFr/FEMVc-Ue-VUAE-eup.png",
    ""
    ];
    var callback = () => api.sendMessage({
        body:`Cute Mama Ina Collection\nNumber of photos: ${link.length}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.jpg")
    }, 
    event.threadID,() => fs.unlinkSync(__dirname + "/cache/1.jpg"), event.messageID);  
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback()); 


}


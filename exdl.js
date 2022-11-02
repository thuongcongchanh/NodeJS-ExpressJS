const https =  require("https");
const fs = require("fs");
const path = require("path");



function dowloadFile(url,callback){
    const filename = path.basename(url);
    // const path1 = path.resolve(__dirname, 'files', filename)
    
    const path1 = path.resolve(__dirname, 'files', filename)

    console.log(filename);
    const req = https.get(url,function(res){
        const fileStream = fs.createWriteStream("./files/"+filename);
        res.pipe(fileStream);
        
        fileStream.on("error",function(err){
            console.log("Error writting to the stream");
            console.log(err);
        });

        fileStream.on("close",function(){
            callback(filename);
        })
        fileStream.on("finish",function(){
           fileStream.close();
           console.log("Done!");
           console.log(path1);
        });
    });
    
    req.on("error",function(err){
        console.log("Error dowloading the file.");
        console.log(err);
    })
}

dowloadFile("https://data-gcdn.basecdn.net/202210/sys6041/workflow/31/14/PRPM8MVVF9/256c19c262a4b1e1c5199a77ffd2d9a3/KXHBWPU9K9JSV9PKQHCJ8UE46RFNNLRP9DKUB39QGTE9KGFML4ZFNH4A22R9BH69MK9Z6PZKTA734RXQRU3UKA/84/3b/94/11/2e/41417425ba597d9ff3f60367c01b2c31/diaveridine_hcl_3304_442208002.jpg", function(fn){
    console.log(fn);
});


const fs = require('fs');

function appendtofile(filename,additionalcontent){
    fs.readFile(filename,"utf8",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }

        const updatedcontent = data + '\n'+ additionalcontent;

        console.log('start of asyn operation');
        setTimeout(function(){
            console.log('end of asyn operation');

            fs.writeFile(filename,updatedcontent,'utf8',(err)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('file updated successfully');
            });
        },2000);
    });
}

appendtofile('C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\a.txt',"prince is shudra");
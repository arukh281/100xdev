const fs = require('fs');

fs.readFile('C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\a.txt', 'utf8', function(err,data){
    if(err){
        console.log(err);
    }else{
        data = data + " aru was here";
        fs.writeFile('C:\\Users\\arukh\\Desktop\\study\\coding\\100xdev\\week 2\\a.txt',data, function(err){
            if(err){
                console.log(err);
            }else{
                console.log("file updated succesfully.");
            }
        });
    }
});
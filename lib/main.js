(function() {
    //Declaring variables
    var fs, reptxt, filedata;

    //Requiring files
    fs = require('fs');
    reptxt = require ('./replaceyou');

    //Reading files
    fs.readFile(process.argv[2],'utf8',function(err,data){
      if(err) {
        console.error("Could not open file: %s", err);
        process.exit(1);
     }
     console.log('read file ok!');
     //Calling replacement function
     filedata = reptxt.replaceyou(data,process.argv[3],process.argv[4]);

     //Writing replaced text into a new file
    fs.writeFile("./out.txt", filedata, function(err){
            if(err) {
                console.error("Error saving file %s", err);
                process.exit(1);
            }
            console.log('out.txt file saved!');
        });

    });

}).call(this);
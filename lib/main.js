(function() {
    //Declaring variables
    var fs, reptxt, filedata, argv, meta;

    //Requiring files
    fs = require('fs');
    reptxt = require('./replaceyou');
    argv = process.argv;
    meta = JSON.parse(fs.readFileSync(__dirname + '/package.json')),

    if(argv[2] === '-v') {
        console.log(meta.version);
        process.exit(0);
    }
    if(argv.length !== 5) {
        console.log('parameters error!');
        process.exit(0);
    }
    //Reading files
    fs.readFile(argv[2], 'utf8', function(err, data) {
        if(err) {
            console.error("Could not open file: %s", err);
            process.exit(1);
        }
        console.log('read file ok!');
        //Calling replacement function
        filedata = reptxt.replaceyou(data, argv[3], argv[4]);

        //Writing replaced text into a new file
        fs.writeFile("./out.txt", filedata, function(err) {
            if(err) {
                console.error("Error saving file %s", err);
                process.exit(1);
            }
            console.log('out.txt file saved!');
        });

    });

}).call(this);
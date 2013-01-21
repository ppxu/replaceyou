(function() {
    //Declaring variables
    var fs, reptxt, filedata, argv, meta;

    //Requiring files
    fs = require('fs');
    reptxt = require('./replaceyou');
    argv = process.argv;
    meta = JSON.parse(fs.readFileSync(__dirname.replace('lib', 'package.json')));

    if(argv[2] === '-v') {
        console.log(meta.version);
        process.exit(0);
    }
    if(argv[2] === '-h') {
        console.log('A node commandline app to replace selected word in txt file');
        console.log('Usage: ');
        console.log('    replaceyou [filename] [oddword] [newword]');
        process.exit(0);
    }
    if(argv.length !== 5) {
        console.log('parameters error!');
        console.log('Usage: ');
        console.log('    replaceyou [filename] [oddword] [newword]');
        process.exit(1);
    }
    //Reading files
    fs.readFile(argv[2], 'utf8', function(err, data) {
        if(err) {
            console.error("Could not open file!");
            console.error('%s', err);
            process.exit(1);
        }
        console.log('read file ok!');
        //Calling replacement function
        filedata = reptxt.replaceyou(data, argv[3], argv[4]);

        if(!filedata){
            console.log('No such word in source file!');
            process.exit(1);
        }

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
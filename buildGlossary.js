var fs = require('fs');

var termbase = fs.readFileSync('termbase.json');

var termsObj = JSON.parse(termbase);

function capitalize(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertToDefinitionList (termsObj) {
    var newFile = fs.createWriteStream('getting-started/references/terminology.md');

    newFile.write('# Terminology\r\n\r\n**This termbase contains definitions of terms that are used in IOTA.**\r\n\r\nTerms are listed in alphabetical order.\r\n');

    // Access categories, terms, and definitions
    for(var i = 0; i < termsObj.length; i++){

        for(term in termsObj[i].terms ){
            newFile.write(`##${term}\\r\\n_${term.pos}_\\r\\n${term.definition}\\r\\n`);
        }
    }
}

convertToDefinitionList(termsObj);


var fs = require('fs');

var termbase = fs.readFileSync('termbase.json');

var termsObj = JSON.parse(termbase);

function capitalize(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function convertToDefinitionList (termsObj) {
    var newFile = fs.createWriteStream('getting-started/1.1/references/glossary.md');

    newFile.write('# Terminology\r\n\r\n**This termbase contains definitions of terms that are used in IOTA.**\r\n\r\nIn the interests of efficient and accurate translations, we do not use synonyms. Instead, terms have one of the following statuses:\r\n\r\n- **Preferred:** This term is used in our documentation\r\n- **Deprecated:** This term is banned, out-of-date, or obsolete');

    // Access categories, terms, and definitions
    for(var i = 0; i < termsObj.length; i++){

        newFile.write(`\r\n\r\n## ${termsObj[i].cat}\r\n\r\n`);
        newFile.write(`${termsObj[i].definition}`);

        for(term in termsObj[i].EN ){
            newFile.write(`\r\n\r\n### ${term}\r\n\r\n`);

            newFile.write('|**Definition**|**Part of speech**|**Status**|\r\n');
            newFile.write('|:---------|:-------------|:-----|\r\n');

            newFile.write(`|${termsObj[i].EN[term].definition}|${termsObj[i].EN[term].pos}|${termsObj[i].EN[term].status}|`);

            if(termsObj[i].EN[term].image !== ""){
                newFile.write(`\r\n\r\n![${term}](${termsObj[i].EN[term].image})`);
            } 
        }
    }
}

convertToDefinitionList(termsObj);


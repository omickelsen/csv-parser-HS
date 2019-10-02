const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');




app.use(bodyParser.urlencoded({ extended: false })); // made a change here
let csvResult = "";
app.post('/formatCSV', function (req, res) {
  csvResult = formatCSV(req.body.csv);
  // console.log(req.body);
  res.send(csvResult);
  // res.render(csvResult);

});
app.get('/', (req, res) =>{
  const csvParsed = csvResult;
  res.json(csvParsed);
});




let finishedOutput;
finishedOutput = "";
let finishedString = "";




// Function to format the input CSV string
function formatCSV(str) {
  if (!str) {     // Verifies that str exists
    return "Input was null";}
//
//
// 
let csvString = str;
//escapes the characters to the ASCII
let escapedCSV = escape(csvString);
// while loop that loops through until it changes all Left '"' to regular quotes and then after they are all changed stops
while (true) {
    let index = escapedCSV.indexOf("%u201C");
    if (index === -1) {
        break;
    }
    escapedCSV = escapedCSV.replace("%u201C", "%22");
}
// while loop that loops through until it changes all Right '"' to regular quotes and then after they are all changed stops
while (true) {
    let index = escapedCSV.indexOf("%u201D");
    if (index === -1) {
        break;
    }
    escapedCSV = escapedCSV.replace("%u201D", "%22");
}
// goes back to the regular characters after they are all changed
csvString = unescape(escapedCSV);


  let lines = [];
  lines = csvString.split(/\r\n|\n/); // splits at \r\n or \n and assigns the input to array lines
console.log(csvString, " here is input");
//document.write(input);
//document.write(lines[0]);
//document.write(lines[1]);
//document.write(lines.length);

for ( let i = 0; i < lines.length; i++) {
let line;
line = lines[i]

    finishedString = "";
    let pieces = [];
    pieces = line.split(""); // splits each character 
  
    //takes lines at index i and sets it to line. then it takes line and splits it at each character and assigns it to array pieces
    let startsWithQuote = false;
    // assigns startsWithQuote to boolean false in preparation for the if statement
    let tempX = "";
    
    if (pieces[0] == '"'){
      startsWithQuote = true;
    }
    //if statement that looks for the character at index 0 and asks the question if the character starts with a quote.
    
  let parcedStr = "";
    startNewPiece = false;

    for (let i = 1; i < pieces.length; i++) {
      if (startsWithQuote) {
        if (startNewPiece == true) {
        
          if (pieces[i] == '"') {
            startNewPiece = false;
          }
        } else if (pieces[i] != '"'){
          tempX += pieces [i];
        } else {
          parcedStr += "[" + tempX + "]";
          
          finishedString += parcedStr;
          parcedStr = "";
          tempX = "";
          startNewPiece = true;
          
                if(finishedString.length == 0) {
      	// document.write("its zero");
      }

          if ( i + 2 < pieces.length && pieces [i + 2] != '"'){
            startsWithQuote = false;
          }
        }
      } else {
        if (pieces [i] == ',' && tempX.length == 0){
            //do nothing if character is a comma
        }
        else if (pieces[i] != ','){
          tempX += pieces[i];
        }
        else{
          parcedStr += "[" + tempX + "]";
          finishedString += parcedStr;
                          if(finishedString.length == 0) {
      	// document.write("its zero xxx");
        }
          parcedStr = "";
          tempX = "";
          startNewPiece = true;
          if (i + 1 < pieces.length && pieces [i + 1] == '"'){
            startsWithQuote = true;
          }
        }
      }

    }
    
      if (finishedOutput.length > 0){
        finishedOutput += "\n";
      }
      finishedOutput += finishedString;

}
console.log(finishedOutput);
    return finishedOutput;
    
  }




app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
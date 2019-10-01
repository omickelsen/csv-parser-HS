const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
let csvResult = "";
// app.set('Content-Type', 'text/plain');
app.post('/formatCSV', function (req, res) {


  csvResult = formatCSV(req.body.csv);
  // console.log(req.body);
  res.send(csvResult);

});

let finishedOutput;
finishedOutput = "";
let finishedString = "";




// Function to format the input CSV string
function formatCSV(str) {
  if (!str) {     // Verifies that str exists
    return "Input was null";
  }

  let input = "";
  input += "\n";
  input += str;

  let lines = [];
  lines = input.split(/\r\n|\n/);
console.log(input, " here is input");
//document.write(input);
//document.write(lines[0]);
//document.write(lines[1]);
//document.write(lines.length);

for ( let i = 0; i < lines.length; i++) {
let line;
line = lines[i]
    finishedString = "";
    let pieces = [];
    pieces = line.split("");
    //document.write(line);
    //document.write(pieces);
    
    let startsWithQuote = false;
    let tempX = "";
    
    if (pieces[0] == '"'){
      startsWithQuote = true;
      //document.write("Made it to starts");
    }
    
  let parcedStr = "";
    startNewPiece = false;

    for (let i = 1; i < pieces.length; i++) {
      if (startsWithQuote) {
        if (startNewPiece == true) {
        //document.write("xxxxxx");
        //document.write(finishedOutput);
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
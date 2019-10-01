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

let finishedOutput = "";
let finishedString = "";




// Function to format the input CSV string
function formatCSV(str) {
  if (!str) {     // Verifies that str exists
    return "Input was null";
  }

  let lines = [];
  lines = str.split(/\r\n|\n/);
  console.log(lines, " here are the lines");
  // console.log(lines[0]);
  // console.log("this is after");
  for ( let i = 0; i < lines.length; i++) {
    // console.log(lines.length, " HOW MANY TIMES AM I RUNNING");
    line = lines[0];
    // line = "\"Alan said, Peter is learning Javascript\"";
    if (line.length == 0){
      break;
    }
    // line = line.toString().replace('"', '&');
    // console.log(line, " REPLACED STRING ");
    finishedString = "";
    let pieces = [];
    pieces = line.split("");
    console.log(pieces, " PIECES HERE");
    let startsWithQuote = false;
    let tempX = "";
    console.log( pieces[0], " here is pieces at index 0");
    if (pieces[0] == '"'){
      startsWithQuote = true;
      console.log(startsWithQuote, " starting with starts with quote.");
    }
    let parcedStr = "";
    startNewPiece = false;
    // console.log(pieces.length, " Pieces lengthy pieces")
    for (let i = 1; i < pieces.length; i++) {
      // console.log(i, " what am I doing?????");
      console.log(startsWithQuote, " why not made it to starts with quote");
      if (startsWithQuote) {
        console.log(" made it to starts with quote");
        if (startNewPiece == true) {
          if (pieces[i] == '"') {
            startNewPiece = false;
          }
        } else if (pieces[i] != '"'){
          tempX += pieces [i];
          console.log(tempX," TEMPX");
        } else {
          console.log(" made it to after TempX");
          parcedStr += "[" + tempX + "]";
          finishedString += parcedStr;
          parcedStr = "";
          tempx = "";
          startNewPiece = true;

          if ( i + 2 < pieces.length && pieces [i + 2] != '"'){
            startsWithQuote = false;
          }
        }
      } else {
        console.log("do nothing if its comma");
        if (pieces [i] == ',' && tempX.length == 0){
            //do nothing if character is a comma
        }
        else if (pieces[i] != ','){
          console.log(" here is a replacement");
          tempX += pieces[i];
        }
        else{
          parcedStr += "[" + tempX + "]";
          finishedString += parcedStr;
          parcedStr = "";
          tempx = "";
          startNewPiece = true;
          if (i + 1 < pieces.length && pieces [i + 1] == '"'){
            startsWithQuote = true;
          }

        }

      }
      if (finishedOutput.length > 0){
        finishedOutput += "\r\n";
      }
      finishedOutput += finishedString;
    }
    
    // console.log(finishedOutput, " is this finished output?");
    return finishedOutput;
  }

}


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
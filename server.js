const express = require( 'express' );
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
let csvResult= "";
app.set('Content-Type', 'text/plain');
app.post('/formatCSV', function(req, res ) {


csvResult = formatCSV(req.body.csv);
// console.log(req.body.csv);
res.send(csvResult);

});






// Function to format the input CSV string
function formatCSV(str) {
  if (!str) {     // Verifies that str exists
    return "Input was null";
  }
 
  let lines = [];
  lines = str.split('\n');
  console.log(lines[0]);
  console.log("this is after");

  let headerFound = false;
  lines.forEach(function(line){
   let formattedHeader = ""
    if(!headerFound){
      let parts = [];
      parts = line.split(",")
      parts.forEach(function(part){
        formattedHeader += '[ ' + part + ' ]'  

      })
      headerFound = true;
      
    }
    else{
      // turn each line into a character array "pieces"


      //if first character in pieces is quote, read until find next quote
      //else read until you find next comma



    }
  })
}
  


app.listen( PORT, () => console.log( `Server started on port ${PORT}` ));
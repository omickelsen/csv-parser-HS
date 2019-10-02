# csv-parser-HS
a restful web service that takes a string of CSV data as input and returns the data reformatted as shown below without using regular expressions or a 3 rd party CSV parser library.

 Example input string: 
 
 “Patient Name”,”SSN”,”Age”,”Phone Number”,”Status” “Prescott, Zeke”,”542-51-6641”,21,”801-555-2134”,”Opratory=2,PCP=1” “Goldstein, Bucky”,”635-45-1254”,42,”435-555-1541”,”Opratory=1,PCP=1” “Vox, Bono”,”414-45-1475”,51,”801-555-2100”,”Opratory=3,PCP=2”  
 
 Return string for the above sample input:
 
  [Patient Name] [SSN] [Age] [Phone Number] [Status] [Prescott, Zeke] [542-51-6641] [21] [801-555-2134] [Opratory=2,PCP=1] [Goldstein, Bucky] [635-45-1254] [42] [435-555-1541] [Opratory=1,PCP=1] [Vox, Bono] [414-45-1475] [51] [801-555-2100] [Opratory=3,PCP=2] 
  
  The system should function with both \r\n and \n carriage return, new line configurations.


  # instructions

  - clone or save this repo.
  - install all dependencies by running npm install in the client folder and the main folder csv-parser-HS
  - run the app by typing in npm run dev in the terminal in the csv-parser-HS folder

  Paste the CSV data. 

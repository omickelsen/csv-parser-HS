import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  render(){
  return (
    <div className="App">
      <div className="container">
    <div className="row header">
      <div className="col-sm-12 text-center">
        <h1><u>CSV Formatter</u></h1>
        <h3>“Patient Name”,”SSN”,”Age”,”Phone Number”,”Status” “Prescott, Zeke”,”542-51-6641”,21,”801-555-2134”,”Opratory=2,PCP=1” “Goldstein, Bucky”,”635-45-1254”,42,”435-555-1541”,”Opratory=1,PCP=1” “Vox, Bono”,”414-45-1475”,51,”801-555-2100”,”Opratory=3,PCP=2”</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 text-center">
      </div>
    </div>
    <form action="/formatCSV" method="POST">
    <div className="row">
      <div className="col-sm-11">
        <textarea placeholder="Copy CSV string here and submit" name="csv" rows="10" cols="55"></textarea>
      </div>
      <div className="col-sm-7">
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 text-center">
        <button className="btn btn-dark" type="submit">Get results</button>
      </div>
    </div>
    </form>
  </div>
    </div>
  );
}
}

export default Form;

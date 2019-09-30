import React from 'react';
import './form.css';

function Form() {
  return (
    <div className="App">
      <div className="container">
    <div className="row header">
      <div className="col-sm-12 text-center">
        <h1><u>CSV Formatter</u></h1>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 text-center">
      </div>
    </div>
    <form action="/formatCSV" method="POST">
    <div className="row">
      <div className="col-sm-5">
        <textarea placeholder="Copy CSV string here and submit to see results..." name="csv" rows="10" cols="55"></textarea>
      </div>
      <div className="col-sm-7">
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 text-center">
        <button className="btn btn-dark" type="submit">Get results!</button>
      </div>
    </div>
    </form>
  </div>
    </div>
  );
}

export default Form;

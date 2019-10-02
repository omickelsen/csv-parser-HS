import React, { Component } from 'react';
import './newForm.css';

class Newform extends Component {

    constructor() {
        super();
        this.state = {
            csvParsed: []
        }
    }
    componentDidMount() {
        fetch('/')
            .then(res => res.json())
            .then(csvParsed => this.setState({ csvParsed }, () => console.log('csvParsed fetched.. ', csvParsed)));
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row header">
                        <div className="col-sm-12 text-center">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 text-center">
                        </div>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-sm-11">
                                <textarea  name="csv" rows="10" cols="55">

                                    {/* {this.state.csvParsed.map()} */}

                                </textarea>
                            </div>
                            <div className="col-sm-7">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <button action="/" className="btn btn-dark" type="submit">Restart</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Newform;
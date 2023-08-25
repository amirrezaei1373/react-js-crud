import React, { Component } from 'react'
import MyForm from './MyForm';
import "./app.css";

class App extends Component {
    render() { 
        return (
            <div>
                <div className="ui fixed inverted menu">
                  <div className="ui container">
                    <a href="/#" className="header item">
                        React JS CRUD With Laravel Api
                    </a>  
                  </div>
                  </div>
                  <div className="ui main container">
                    <MyForm />

                  </div>
            </div>
        );
    }
}
 
export default App;
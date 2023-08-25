import React, { Component } from 'react'


class MyForm extends Component {
    render() { 
        return (
            <form className="ui form">
                <div className="fields">
                  <div className="four wide field">
                    <label >First Name</label>
                    <input type="text" className="last_name" placeholder="First Name" />
                  </div>

                  <div className="four wide field">
                    <label >Last Name</label>
                    <input type="text" className="last_name" placeholder="Last Name" />
                  </div>

                  <div className="four wide field">
                    <label >Email</label>
                    <input type="email" className="last_name" placeholder="amir@gmail.com" />
                  </div>

                  <div className="four wide field">
                    <button className="ui primary button submit-button">Save</button>
                  </div>
                </div>
            </form>
        );
    }
}
 
export default MyForm;
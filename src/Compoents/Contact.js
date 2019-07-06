import React, { Component } from 'react';
import axios from 'axios';



// (1) Contact Us Logo
// (2) embedded Map API
// (3) event listener in form and button
// (4) states
// (5) mySql database in backend

export default class Contact extends Component {
    render () {
        return (
            <div className="contact">
                <ul>
                    <li>50 Northland Rd, Waterloo, N2V 1N3</li>
                    <li>Phone: (519) 725-1419</li>
                    <li><a href="www.wrolcc.com">church website</a></li>
                </ul>
                <form className="modal">
                    <label>Your name *
                        <input className="modal__input" type="text" name="name" placeholder="Katherina Lin"></input>
                    </label>
                    <label>Your email *
                        <input className="modal__input" type="text" name="email" placeholder="*******@gamil.com"></input>
                    </label>
                    <label>Phone number (optional)  
                        <input className="modal__input" type="text" name="phone_number" placeholder="123 456 7466"></input>
                    </label>
                    <label>Comment or Questions
                        <textarea className="modal__input" type="text" type="text" name="comment" placeholder="Please leave a note :)"/>
                    </label>
                    <button className="modal__submit" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
import React, { Component } from 'react';
import axios from 'axios';

// (1) embedded video
// (2) event listener for button 

// front-end: image size
// front-end: fonts
// front-end: button hover color
// front-end: size of containers 
// front-end: header nav bar font size and color

export default class Home extends Component {
    render () {
        return (
            <div className="home">
                <section className="introduction">
                    <article className="welcome">
                        <video></video> // a video need to be added
                        <h1 className="welcome__title">Welcome</h1>
                        <p className="welcome__content">
                        We meet on Fridays to explore Jesus' message of grace and love as we apply truths of scripture to our culture and everyday lives. No matter who you are or where you have been, you're welcome here.
                        </p>
                    </article>
                    <article className="about">
                        <h1 className="about__title">Welcome</h1>
                        <p className="about__content1">
                        Welcome to Timothy Christian Fellowship website! Nice to have you here.
                        </p>
                        <p className="about__content2">
                        We 'grew up' in Christ in this fellowship where we have studied the Bible. We are fascinated with how God touches our hearts in our daily lives.
                        </p>
                        <img/> // an image needed to be added
                    </article>
                </section>
                <section className='gallery'>
                        <img/> // an image needed to be added
                        <img/> // an image needed to be added
                        <img/> // an image needed to be added
                        <img/> // an image needed to be added
                        <img/> // an image needed to be added
                </section>
                <div className='submit'>
                    <h1>Want to know more?</h1>
                    <button>Join Us</button>
                </div>
            </div>
        )
    }
}
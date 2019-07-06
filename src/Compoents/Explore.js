import React, { Component } from 'react';
import axios from 'axios';
import background_img from '../asset/'; // add the img.svg in here
import img1 from '../asset/'; // add the img.svg in here
import img2 from '../asset/'; // add the img.svg in here

export default class Explore extends Component {
    render () {
        return (
            <div className="explore">
                <figure>
                    <img src={ background_img} alt="group photo"/>
                </figure>
                <article className="story">
                    <section className="story__words">
                        <h1 className='story__words__title'>About Our Story</h1>
                        <p className='story__words__content'>
                            Timothy Christian Fellowship is created by Grace He and Victoria Lien to learn God's words together. By discussing who God is and sharing our weekly experiences on Friday nights, we have built closer relationships with God and each other ourselves.
                        </p>
                    </section>
                    <section className="story__pictures">
                        <img src={img1} alt="word:live"/>
                        <h3>Love</h3>
                        <img src={img2} alt="word:life in christ"/>
                        <h3>Life in Christ</h3>
                    </section>
                </article>
            </div>
        )
    }
}
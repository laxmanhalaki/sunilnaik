import React from 'react'
import homebg from './images/homebg1.jpg'

const About = () => {
  return (
    <div>
        <section className="about" id="about">
        <h1 className="heading"><span>about</span> us</h1>
        <div className="row">
            <div className="column">
                <img src={homebg} alt=""/>
            </div>
            <div className="column2">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?
                    Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?</p>
                    <a href="#" className="btn">learn more</a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
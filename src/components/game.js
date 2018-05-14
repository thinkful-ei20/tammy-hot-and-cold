'use strict';
import React from 'react';
import Feedback from './feedback.js';
import Form from './form.js';
import Counter from './counter.js';
import Guesses from './guesses.js';
import './game.css';

export default function Game(){
  return ( 
    <section className="game">
      <Feedback />
      <Form />
      <Counter />
      <Guesses />
    </section>
  )
}
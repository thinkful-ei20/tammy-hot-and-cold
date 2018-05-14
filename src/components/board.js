'use strict';
import React from 'react';
import Game from './game.js';
import './board.css';

export default function Board(){
  return ( 
    <div className="board">
      <nav>
        <ul class="control-menu">
          <li>
            <a class="what" href="###">What ? </a>
          </li>
          <li>
            <a class="new" href="@@@"> + New Game</a> 
          </li>
        </ul>
      </nav>
      <h1> Hot or Cold? </h1>
      <Game />
    </div>
  )
}
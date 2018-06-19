import React from 'react';
import ScoreBoard from '../scorer/Scoreboard';
import BowlerDetails from '../bowlerDetails/BowlerDetails';
import BatsmanDetails from '../batsmanDetails/BatsmanDetails';

const GameDetails = (props) => (
  <div>
      {/*<ScoreBoard game={props.game} score={props.score}/>*/}
  <br/>
      <BatsmanDetails/>
      <br/>
      <BowlerDetails/>
  </div>
);

export default GameDetails;
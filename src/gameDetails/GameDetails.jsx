import React from 'react';
import ScoreBoard from '../scorer/Scoreboard';
import BowlerDetails from '../bowlerDetails/BowlerDetails';
import BatsmanDetails from '../batsmanDetails/BatsmanDetails';
import { connect } from 'react-redux';

const GameDetails = props => (
  <div>
    <ScoreBoard game={props.game} score={props.score} />
    <br />
    <BatsmanDetails />
    <br />
    <BowlerDetails />
  </div>
);
export const mapStateToProps = state => ({
  score: state.scoreInformation,
  game: state.gameInformation,
});

export default connect(mapStateToProps)(GameDetails);


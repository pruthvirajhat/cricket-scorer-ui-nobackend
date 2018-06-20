import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScoreBoard from '../scorer/Scoreboard';
import BowlerDetails from '../bowlerDetails/BowlerDetails';
import BatsmanDetails from '../batsmanDetails/BatsmanDetails';


const GameDetails = props => (
  <div>
    <ScoreBoard game={props.game} score={props.score} />
    <BatsmanDetails />
    <BowlerDetails />
  </div>
);

GameDetails.propTypes = {
  game: PropTypes.shape.isRequired,
  score: PropTypes.shape.isRequired,
};

export const mapStateToProps = state => ({
  score: state.scoreInformation,
  game: state.gameInformation,
});

export default connect(mapStateToProps)(GameDetails);



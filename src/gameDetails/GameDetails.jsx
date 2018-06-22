import React from 'react';
import { connect } from 'react-redux';
import ScoreBoard from '../scorer/Scoreboard';
import BowlerDetails from '../bowlerDetails/BowlerDetails';
import BatsmanDetails from '../batsmanDetails/BatsmanDetails';


const GameDetails = props => (
  <div>
    <ScoreBoard game={props.game} score={props.score} overs={props.overs} />
    <br />
    <BatsmanDetails />
    <BowlerDetails />
  </div>
);


export const mapStateToProps = state => ({
  score: state.scoreInformation,
  game: state.gameInformation,
  overs: state.gameSummary.innings1.overs,
});

// GameDetails.propTypes = {
//   game: PropTypes.shape.isRequired,
//   score: PropTypes.number.isRequired,
//   overs: PropTypes.shape.isRequired,
// };

export default connect(mapStateToProps)(GameDetails);


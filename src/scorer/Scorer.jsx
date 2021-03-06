import React from 'react';
import Button from 'reactstrap/lib/Button';
import { connect } from 'react-redux';
import Scoreboard from './Scoreboard';
import { navigateToStatsAction } from './actions';
import PlayerSelector from './PlayerSelector';
import RunsSelector from './RunsSelector';
import CurrentOver from '../currentOver/CurrentOver';
import NextBall from './NextBall';
import Extras from '../extras/Extras';

const Scorer = props => (
  <div>
    <Scoreboard game={props.game} score={props.score} overs={props.overs} />
    <div align="center">
      <Button color="primary" onClick={props.navigateToStats}>Statistics</Button>
    </div>
    <CurrentOver />
    <PlayerSelector />
    <br />
    <RunsSelector />
    <br />
    <Extras />
    <br />
    <NextBall />
  </div>
);


export const mapStateToProps = state => ({
  score: state.scoreInformation,
  game: state.gameInformation,
  overs: state.gameSummary.innings1.overs,
});
export const mapDispatchToProps = dispatch => ({
  navigateToStats: () => dispatch(navigateToStatsAction()),
});

// Scorer.propTypes = {
//   game: PropTypes.shape.isRequired,
//   score: PropTypes.number.isRequired,
//   navigateToStats: PropTypes.func.isRequired,
//   overs: PropTypes.shape.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Scorer);

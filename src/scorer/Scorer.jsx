import React from 'react';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import { connect } from 'react-redux';
import Scoreboard from './Scoreboard';
import { navigateToStatsAction } from './actions';
import PlayerSelector from './PlayerSelector';
import RunsSelector from './RunsSelector';
import CurrentOver from '../currentOver/CurrentOver'

const Scorer = props => (
  <div>
    <Scoreboard game={props.game} score={props.score} />
    <div align="center">
      <Button color="primary" onClick={props.navigateToStats}>Statistics</Button>
    </div>
    <CurrentOver/>
    <PlayerSelector />
    <RunsSelector />
  </div>
);


export const mapStateToProps = state => ({
  score: state.scoreInformation,
  game: state.gameInformation,
});
export const mapDispatchToProps = dispatch => ({
  navigateToStats: () => dispatch(navigateToStatsAction()),
});

Scorer.propTypes = {
  game: PropTypes.shape.isRequired,
  score: PropTypes.number.isRequired,
  navigateToStats: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scorer);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Scoreboard from './Scoreboard';
import PlayerSelector from './PlayerSelector';
import RunsSelector from './RunsSelector';

const Scorer = props => (
  <div>
    <Scoreboard game={props.game} score={props.score} />
    <PlayerSelector />
    <RunsSelector />
  </div>
);


export const mapStateToProps = state => ({
  score: state.scoreInformation,
  game: state.gameInformation,
});

Scorer.propTypes = {
  game: PropTypes.shape.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Scorer);

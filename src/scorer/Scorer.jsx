import React from 'react';
import Scoreboard from './Scoreboard';
import {connect} from 'react-redux';
import PlayerSelector from "./PlayerSelector";
import {navigateToStatsAction} from "./actions";
import Button from 'reactstrap/lib/Button';

const Scorer = (props) => (
  <div>
    <Scoreboard game={props.game} score={props.score}/>
      <br/>
      <div align="center">
        <Button color="primary" onClick={props.navigateToStats}>Statistics</Button>
      </div>
      <br/>
      <PlayerSelector/>
  </div>
);

export const mapStateToProps = (state) => {
    return {
        score: state.scoreInformation,
        game:state.gameInformation
    }
}

export const mapDispatchToProps = (dispatch) => ({
    navigateToStats: () => dispatch(navigateToStatsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Scorer)
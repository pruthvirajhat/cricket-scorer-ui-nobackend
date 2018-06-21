import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { nextBallAction } from './actions';


const renderNextBallButton = props => (
  <div align="center">
    <Button
      color="primary"
      onClick={() => props.onNextBallClick(props.currentBall)}
      disabled={props.inningsCompleted}
    >Next Ball
    </Button>
  </div>
);

export const mapStateToProps = state => ({
  currentBall: state.currentBall,
  inningsCompleted:
    (state.gameInformation.numberOfOvers === state.gameSummary.innings1.overs.length
      && state.currentOver.ballsCount === 6),
});

export const mapDispatcherToProps = dispatch => ({
  onNextBallClick: currentBall => dispatch(nextBallAction(currentBall)),
});


// renderNextBallButton.propTypes = {
//   onNextBallClick: PropTypes.func.isRequired,
//   currentBall: PropTypes.shape.isRequired,
//   inningsCompleted: PropTypes.bool.isRequired,
// };

export default connect(mapStateToProps, mapDispatcherToProps)(renderNextBallButton);

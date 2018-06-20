import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { nextBallAction } from './actions';


const renderNextBallButton = props => (
  <div>
    <Button onClick={() => props.onNextBallClick(props.currentBall)}>
        Next Ball
    </Button>
  </div>
);

export const mapStateToProps = state => ({
  currentBall: state.currentBall,
});

export const mapDispatcherToProps = dispatch => ({
  onNextBallClick: currentBall => dispatch(nextBallAction(currentBall)),
});

renderNextBallButton.propTypes = {
  onNextBallClick: PropTypes.func.isRequired,
  currentBall: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, mapDispatcherToProps)(renderNextBallButton);

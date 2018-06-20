import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { selectPlayerAction } from './actions';


class PlayerSelector extends React.Component {
  onRadioButtonClick(player) {
    if (player === this.props.player1) {
      this.props.onSelectPlayerClick({
        batsman: this.props.player1, non_striker: this.props.player2,
      });
    } else {
      this.props.onSelectPlayerClick({
        batsman: this.props.player2, non_striker: this.props.player1,
      });
    }
  }

  render() {
    return (
      <div align="center">
        <ButtonGroup>
          <Button
            onClick={() => this.onRadioButtonClick(this.props.player1)}
            active={this.props.player1 === this.props.currentBatsman}
          >
            {this.props.player1}
          </Button>
          <Button
            onClick={() => this.onRadioButtonClick(this.props.player2)}
            active={this.props.player2 === this.props.currentBatsman}
          >
            {this.props.player2}
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

PlayerSelector.propTypes = {
  player1: PropTypes.string.isRequired,
  player2: PropTypes.string.isRequired,
  currentBatsman: PropTypes.string.isRequired,
  onSelectPlayerClick: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  player1: state.gameInformation.team1.players[0],
  player2: state.gameInformation.team1.players[1],
  currentBatsman: state.currentBall.batsmen,
});

export const mapDispatcherToProps = dispatch => ({
  onSelectPlayerClick: players => dispatch(selectPlayerAction(players)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(PlayerSelector);

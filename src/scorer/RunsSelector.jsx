import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { selectRunsAction, selectBatsmanOut } from './actions';


class RunsSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { outList: [] };
  }

  onRadioButtonClick(runs) {
    this.props.onSelectRunsClick(runs);
  }

  onBatsmanOut(currentBatsman) {
    if (this.state.outList.length === 9) {
      return;
    }
    this.state.outList.push(currentBatsman);
    this.props.onBatsmanOut
    (this.props.batsmenList.slice((2 + (this.state.outList.length - 1)), 11)[0]);
  }

  render() {
    return (
      <div align="center">
        <ButtonGroup>
          <Button
            outline
            color="primary"
            onClick={() => this.onRadioButtonClick(0)}
            active={this.props.selected === 0}
          >0
          </Button>
          <Button
            outline
            color="primary"
            onClick={() => this.onRadioButtonClick(1)}
            active={this.props.selected === 1}
          >1
          </Button>
          <Button
            outline
            color="primary"
            onClick={() => this.onRadioButtonClick(2)}
            active={this.props.selected === 2}
          >2
          </Button>
          <Button
            outline
            color="primary"
            onClick={() => this.onRadioButtonClick(3)}
            active={this.props.selected === 3}
          >3
          </Button>
          <Button
            outline
            color="primary"
            onClick={() => this.onRadioButtonClick(4)}
            active={this.props.selected === 4}
          >4
          </Button>
          <Button
            outline
            color="primary"
            onClick={() => this.onRadioButtonClick(5)}
            active={this.props.selected === 5}
          >5
          </Button>
          <Button
            outline
            color="primary"
            onClick={() => this.onRadioButtonClick(6)}
            active={this.props.selected === 6}
          >6
          </Button>
          <Button
            outline
            color="primary"
            onClick={() => this.onRadioButtonClick(7)}
            active={this.props.selected === 7}
          >7
          </Button>
        </ButtonGroup>

        <div style={{ margin: '12px 12px 12px 12px' }}>
          <Button
            outline
            color="primary"
            onClick={() =>
                            this.onBatsmanOut(this.props.currentBatsman)}
          >
                        Out
          </Button>
        </div>
      </div>
    );
  }
}

RunsSelector.propTypes = {
  onSelectRunsClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export const mapStateToProps = state => ({
  selected: state.currentBall.runs.batsman,
  batsmenList: state.gameInformation.team1.players,
  currentBatsman: state.currentBall.batsman,
  currentBall: state.currentBall,
});

export const mapDispatcherToProps = dispatch => ({
  onSelectRunsClick: runs => dispatch(selectRunsAction(runs)),
  onBatsmanOut: batsmanName => dispatch(selectBatsmanOut(batsmanName)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(RunsSelector);

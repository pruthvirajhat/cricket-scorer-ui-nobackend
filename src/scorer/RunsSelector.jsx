import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { selectRunsAction } from './actions';

class RunsSelector extends React.Component {
  onRadioButtonClick(runs) {
    this.props.onSelectRunsClick(runs);
  }

  render() {
    return (
      <div align="center">
        <ButtonGroup size="sm">
          <Col sm="1">
            <Button
              color="primary"
              onClick={() => this.onRadioButtonClick(0)}
              active={this.props.selected === 0}
            >0
            </Button>
          </Col>
          <Col sm="1">
            <Button
              color="primary"
              onClick={() => this.onRadioButtonClick(1)}
              active={this.props.selected === 1}
            >1
            </Button>
          </Col>
          <Col sm="1">
            <Button
              color="primary"
              onClick={() => this.onRadioButtonClick(2)}
              active={this.props.selected === 2}
            >2
            </Button>
          </Col>
          <Col sm="1">
            <Button
              color="primary"
              onClick={() => this.onRadioButtonClick(3)}
              active={this.props.selected === 3}
            >3
            </Button>
          </Col>
          <Col sm="1">
            <Button
              color="primary"
              onClick={() => this.onRadioButtonClick(4)}
              active={this.props.selected === 4}
            >4
            </Button>
          </Col>
          <Col sm="1">
            <Button
              color="primary"
              onClick={() => this.onRadioButtonClick(5)}
              active={this.props.selected === 5}
            >5
            </Button>
          </Col>
          <Col sm="1">
            <Button
              color="primary"
              onClick={() => this.onRadioButtonClick(6)}
              active={this.props.selected === 6}
            >6
            </Button>
          </Col>
          <Col sm="1">
            <Button
              color="primary"
              onClick={() => this.onRadioButtonClick(7)}
              active={this.props.selected === 7}
            >7
            </Button>
          </Col>
        </ButtonGroup>
      </div>
    );
  }
}

RunsSelector.propTypes = {
  onSelectRunsClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export const mapDispatcherToProps = dispatch => ({
  onSelectRunsClick: runs => dispatch(selectRunsAction(runs)),
});

export default connect(undefined, mapDispatcherToProps)(RunsSelector);

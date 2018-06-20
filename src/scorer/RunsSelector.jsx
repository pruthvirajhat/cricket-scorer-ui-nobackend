import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { selectRunsAction } from './actions';

class RunsSelector extends React.Component {
  onRadioButtonClick(runs) {
    this.props.onSelectRunsClick(runs);
  }

  render() {
    return (
      <div align="center">
        <ButtonGroup>
          <Button onClick={() => this.onRadioButtonClick(0)}>0</Button>
          <Button onClick={() => this.onRadioButtonClick(1)}>1</Button>
          <Button onClick={() => this.onRadioButtonClick(2)}>2</Button>
          <Button onClick={() => this.onRadioButtonClick(3)}>3</Button>
          <Button onClick={() => this.onRadioButtonClick(4)}>4</Button>
          <Button onClick={() => this.onRadioButtonClick(5)}>5</Button>
          <Button onClick={() => this.onRadioButtonClick(6)}>6</Button>
          <Button onClick={() => this.onRadioButtonClick(7)}>7</Button>
        </ButtonGroup>
      </div>
    );
  }
}

RunsSelector.propTypes = {
  onSelectRunsClick: PropTypes.func.isRequired,
};

export const mapDispatcherToProps = dispatch => ({
  onSelectRunsClick: runs => dispatch(selectRunsAction(runs)),
});

export default connect(undefined, mapDispatcherToProps)(RunsSelector);

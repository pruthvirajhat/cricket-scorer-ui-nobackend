import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from 'reactstrap/lib/Button';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import './Extras.css';
import { recordExtras } from './actions';

const Extras = props => (
  <Container className="h-100">
    <Row className="align-items-center h-100">
      <Col className="text-center">
        <label htmlFor="Text">Extras:</label>
      </Col>
      <Col className="text-center w-auto">
        <Button outline color="primary" onClick={props.recordExtras}>W</Button>
      </Col>
      <Col className="text-center w-auto">
        <Button outline color="primary" onClick={props.recordExtras}>N</Button>
      </Col>
      <Col className="text-center w-auto">
        <Button outline color="primary" onClick={props.recordExtras}>B</Button>
      </Col>
      <Col className="text-center w-auto">
        <Button outline color="primary" onClick={props.recordExtras}>LB</Button>
      </Col>
    </Row>
  </Container>);

const mapDispatchToProps = dispatch => ({
  recordExtras: () => dispatch(recordExtras()),
});

Extras.propTypes = {
  recordExtras: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(Extras);

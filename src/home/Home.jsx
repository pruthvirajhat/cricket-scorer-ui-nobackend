import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import './Home.css';
import { createGameAction } from './actions';

const Home = props =>
  (
    <Container className="h-100">
      <Row className="align-items-center h-100">
        <Col className="text-center">
          <Button color="primary" onClick={props.createGame}>Create Game</Button>
        </Col>
      </Row>
    </Container>);

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGameAction()),
});

Home.propTypes = {
  createGame: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(Home);

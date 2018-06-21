import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CurrentOver = props => (
  <Container>

    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <Row>
          <Col md="5" xs="4">
                        This Over
          </Col>
          <Col sm="1" xs="2" />
          <Col style={{ textAlign: 'right' }}>
            {props.currentOver.map(item => (
              <row>{item}&nbsp;</row>
                                ))}
          </Col>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <Row>
          <Col md="5" xs="4">
                        Bowler
          </Col>
          <Col sm="1" xs="2" />
          <Col style={{ textAlign: 'right' }}>
            {props.currentBowler}
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

CurrentOver.propTypes = {
  currentBowler: PropTypes.string.isRequired,
  currentOver: PropTypes.string.isRequired,
};


export const mapStateToProps = state => (
  {
    currentOver: state.currentOver.currentOverScore,
    currentBowler:
    state.gameSummary.innings1.overs[state.gameSummary.innings1.overs.length - 1].bowler,
  });

export default connect(mapStateToProps)(CurrentOver);

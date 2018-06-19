import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';

const CurrentOver = (props) => (
    <Container>
        <br/>
        <br/>
        <Row>
            <Col md={{size: 6, offset: 3}}>
                <Row>
                    <Col md="5" xs="4">
                        This Over
                    </Col>
                    <Col sm="1" xs="2"/>
                    <Col style={{textAlign: "right"}}>
                        {props.currentOver.map(item => {
                                return (
                                    <row>{item}&nbsp;</row>
                                );
                            }
                        )}
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row>
            <Col md={{size: 6, offset: 3}}>
                <Row>
                    <Col md="5" xs="4">
                        Bowler
                    </Col>
                    <Col sm="1" xs="2"/>
                    <Col style={{textAlign: "right"}}>
                        {props.currentBowler}
                    </Col>
                </Row>
            </Col>
        </Row>
        <br/>
        <br/>
    </Container>
);


export const mapStateToProps = (state) => {
    return {
        currentOver: state.currentOver,
        currentBowler: state.currentBall.bowler
    }
}

export default connect(mapStateToProps)(CurrentOver)
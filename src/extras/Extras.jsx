import React from 'react';
import Button from 'reactstrap/lib/Button';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import './Extras.css';
import { recordExtras } from "./actions";
import {connect} from 'react-redux';

const Extras = (props) =>
    <Container className="h-100">
        <Row className="align-items-center h-100">
            <Col className="text-center">
                <label>Extras:</label>
            </Col>
            <Col className="text-center w-auto">
                <Button color="primary" onClick={props.recordExtras}>W</Button>
            </Col>
            <Col className="text-center w-auto">
                <Button color="primary" onClick={props.recordExtras}>N</Button>
            </Col>
            <Col className="text-center w-auto">
                <Button color="primary" onClick={props.recordExtras}>B</Button>
            </Col>
            <Col className="text-center w-auto">
                <Button color="primary" onClick={props.recordExtras}>LB</Button>
            </Col>
        </Row>
    </Container>;

const mapDispatchToProps = (dispatch) => ({
    recordExtras: () => dispatch(recordExtras())
});

export default connect(undefined, mapDispatchToProps)(Extras);
import React from 'react';
import {Container, Row, Col, Table} from 'reactstrap';
import {connect} from "react-redux";
import {recordExtras} from "../extras/actions";
import getBatsmenData from "../batsmanDetails/getBatsmenData";

const BowlerDetails = (props) => {
    const bowlerData = getBatsmenData(props.overs)

    return (
            <Container>
                <label><b>Bowling Table</b></label>
                <br/>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Bowler</th>
                        <th>Overs</th>
                        <th>Maiden</th>
                        <th>Runs</th>
                        <th>Wickets</th>
                    </tr>
                    </thead>
                    <tbody>
                    { bowlerData.map(bowler => {
                    return <tr>
                    <th scope="row">{bowler.Name}</th>
                    <td>{bowler.Overs}</td>
                    <td>{bowler.Maiden}</td>
                    <td>{bowler.Runs}</td>
                    <td>{bowler.Wickets}</td>
                    </tr>;
                    })}
                    </tbody>
                </Table>
            </Container>
        );
    }

export const mapStateToProps = (state) => {
    return {
        overs: state.overs
    }
}

export default connect(mapStateToProps)(BowlerDetails);

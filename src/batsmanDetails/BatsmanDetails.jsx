import React from 'react';
import {Container,Row,Col, Table} from 'reactstrap';
import {connect} from "react-redux";
import getBatsmenData from './getBatsmenData'

const BatsmanDetails = (props) => {
    const batsmenData = getBatsmenData(props.overs);

    return (<Container>
        <label><b>Batting Table</b></label>
        <br/>
        <Table responsive>
            <thead>
            <tr>
                <th>Batsman</th>
                <th>Runs</th>
                <th>Balls</th>
                <th>Fours</th>
                <th>Sixes</th>
                <th>Strike Rate</th>
            </tr>
            </thead>
            <tbody>
            {batsmenData.map(batsman => {
                return <tr>
                    <th scope="row">{batsman.Name}</th>
                    <td>{batsman.Runs}</td>
                    <td>{batsman.Balls}</td>
                    <td>{batsman.Fours}</td>
                    <td>{batsman.Sixes}</td>
                    <td>{batsman.StrikeRate}</td>
                </tr>;
            })}
            </tbody>
        </Table>
    </Container>);
}

export const mapStateToProps = (state) => {
    return {
        overs: state.overs
    }
}

export default connect(mapStateToProps)(BatsmanDetails);
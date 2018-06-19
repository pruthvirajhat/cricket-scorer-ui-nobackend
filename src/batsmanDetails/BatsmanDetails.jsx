import React from 'react';
import {Container,Row,Col, Table} from 'reactstrap';
import {connect} from "react-redux";

const BatsmanDetails = (props) => {
    //const batsmenData = getBatsmenData(props.overs);
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
            {props.batsmen.map(batsman => {
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
        batsmen: getBatsmenData(state.overs)
    }

    function getBatsmenData(data)
    {
        return [
            {
                "Name": "Dilip",
                "Runs": 5,
                "Balls": 0,
                "Fours": 44,
                "Sixes": 1,
                "StrikeRate":100
            },
            {
                "Name": "Dilip1",
                "Runs": 5,
                "Balls": 0,
                "Fours": 44,
                "Sixes": 1,
                "StrikeRate":100
            }
        ]
    }
}

export default connect(mapStateToProps)(BatsmanDetails);
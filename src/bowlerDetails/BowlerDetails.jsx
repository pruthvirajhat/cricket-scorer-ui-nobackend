import React from 'react';
import {Container, Row, Col, Table} from 'reactstrap';
import {connect} from "react-redux";
import {recordExtras} from "../extras/actions";

class BowlerDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
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
                    { this.props.bowlers.map(bowler => {
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
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        bowlers: getBowlersData(state.overs)
    }

    function getBowlersData(data)
    {
        return [
            {
                "Name": "Manisha",
                "Overs": 5,
                "Maiden": 0,
                "Runs": 44,
                "Wickets": 1
            },
            {
                "Name": "Manisha123",
                "Overs": 5,
                "Maiden": 0,
                "Runs": 44,
                "Wickets": 1
            }
        ]
    }
}

export default connect(mapStateToProps)(BowlerDetails);

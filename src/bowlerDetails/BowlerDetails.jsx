import React from 'react';
import {Container, Row, Col, Table} from 'reactstrap';
import {connect} from "react-redux";
import {recordExtras} from "../extras/actions";

// const BowlerDetails = () =>
//     <Container>
//         <label><b>Bowling Table</b></label>
//         <br/>
//         <Table>
//             <thead>
//             <tr>
//                 <th>Bowler</th>
//                 <th>Overs</th>
//                 <th>Maiden</th>
//                 <th>Runs</th>
//                 <th>Wickets</th>
//             </tr>
//             </thead>
//
//             <tbody>
//             <tr>
//                 <th scope="row">Wasim</th>
//                 <td>3</td>
//                 <td>0</td>
//                 <td>40</td>
//                 <td>1</td>
//             </tr>
//             <tr>
//                 <th scope="row">Shoaib</th>
//                 <td>2</td>
//                 <td>0</td>
//                 <td>30</td>
//                 <td>0</td>
//             </tr>
//
//             </tbody>
//         </Table>
//     </Container>;

class BowlerDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <label><b>Bowling Table</b></label>
                <br/>
                <Table>
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
                    {/*<tr>*/}
                        {/*<th scope="row">Wasim</th>*/}
                        {/*<td>3</td>*/}
                        {/*<td>0</td>*/}
                        {/*<td>40</td>*/}
                        {/*<td>1</td>*/}
                    {/*</tr>*/}
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
        bowlers: [
            {
                "Name": "Manisha",
                "Overs": 5,
                "Maiden": 0,
                "Runs": 44,
                "Wickets": 1
            },
            {
                "Name": "Manisha1",
                "Overs": 5,
                "Maiden": 0,
                "Runs": 44,
                "Wickets": 1
            }
            ]
    }
}

export default connect(mapStateToProps)(BowlerDetails);

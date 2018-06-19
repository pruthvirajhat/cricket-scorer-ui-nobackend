import React from 'react';
import { Container, Table } from 'reactstrap';
import { connect } from 'react-redux';

class BatsmanDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <label><b>Batting Table</b></label>
        <br />
        <Table>
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
            {/* <tr> */}
            {/* <th scope="row">Wasim</th> */}
            {/* <td>3</td> */}
            {/* <td>0</td> */}
            {/* <td>40</td> */}
            {/* <td>1</td> */}
            {/* </tr> */}
            { this.props.batsmen.map(batsman => (<tr>
              <th scope="row">{batsman.Name}</th>
              <td>{batsman.Runs}</td>
              <td>{batsman.Balls}</td>
              <td>{batsman.Fours}</td>
              <td>{batsman.Sixes}</td>
              <td>{batsman.StrikeRate}</td>
                                                 </tr>))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export const mapStateToProps = state => ({
  batsmen: [
    {
      Name: 'Dilip',
      Runs: 5,
      Balls: 0,
      Fours: 44,
      Sixes: 1,
      StrikeRate: 100,
    },
    {
      Name: 'Dilip1',
      Runs: 5,
      Balls: 0,
      Fours: 44,
      Sixes: 1,
      StrikeRate: 100,
    },
  ],
});
export default connect(mapStateToProps)(BatsmanDetails);

import React from 'react';
import { Container, Table } from 'reactstrap';
import { connect } from 'react-redux';
import getBowlersData from './getBowlersData';

const BowlerDetails = () => {
  const bowlerData = getBowlersData();

  return (
    <Container>
      <label htmlFor="Text"><b>Bowling Table</b></label>
      <br />
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
          { bowlerData.map(bowler => (
            <tr>
              <th scope="row">{bowler.Name}</th>
              <td>{bowler.Overs}</td>
              <td>{bowler.Maiden}</td>
              <td>{bowler.Runs}</td>
              <td>{bowler.Wickets}</td>
            </tr>))}
        </tbody>
      </Table>
    </Container>
  );
};

export const mapStateToProps = state => ({
  overs: state.overs,
});

export default connect(mapStateToProps)(BowlerDetails);

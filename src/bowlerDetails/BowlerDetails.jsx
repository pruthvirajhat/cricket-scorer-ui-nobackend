import React from 'react';
import { Container, Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBowlingTableDetails } from './bowingStats';


const BowlerDetails = (props) => {
  const bowlerdataArray = getBowlingTableDetails(props.gameSummary.innings1.overs);


  return (<Container>
    <label htmlFor="Text"><b>Bowling Table</b></label>
    <br />
    <Table table-sm="true" bordered size="sm">
      <thead>
        <tr>
          <th className="text-center">Bowler</th>
          <th className="text-center">Overs</th>
          <th className="text-center">Maiden</th>
          <th className="text-center">Runs</th>
          <th className="text-center">Wickets</th>
        </tr>
      </thead>
      <tbody>
        {
                bowlerdataArray
                .map(bowler => (
                  <tr key={bowler.name}>
                    <th className="text-center">{bowler.name}</th>
                    <td align="center">{bowler.over}</td>
                    <td align="center">{bowler.maiden}</td>
                    <td align="center">{bowler.runs}</td>
                    <td align="center">{bowler.wickets}</td>
                  </tr>))}
      </tbody>
    </Table>
  </Container>);
};

BowlerDetails.prototype = {
  gameSummary: PropTypes.shape.isRequired,
};

export const mapStateToProps = state => ({
  gameSummary: state.gameSummary,
});

export default connect(mapStateToProps)(BowlerDetails);

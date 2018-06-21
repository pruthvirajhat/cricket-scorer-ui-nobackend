import React from 'react';
import { Container, Table } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBowlingTableDetails } from './bowingStats';


const BowlerDetails = (props) => {
  const bowlerdataArray = getBowlingTableDetails(props.matchCurrentStatus.innings1.overs);


  return (<Container>
    <label htmlFor="Text"><b>Bowling Table</b></label>
    <br />
    <Table table-sm bordered size={"sm"}>
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
        {
                bowlerdataArray
                .map(bowler => (
                  <tr key={bowler.name}>
                    <td>{bowler.over}</td>
                    <td>{bowler.maiden}</td>
                    <td>{bowler.runs}</td>
                    <td>{bowler.wickets}</td>
                  </tr>))}
      </tbody>
    </Table>
  </Container>);
};

BowlerDetails.prototype = {
  matchCurrentStatus: PropTypes.shape.isRequired,
};

export const mapStateToProps = state => ({
  matchCurrentStatus: state.matchCurrentStatus,
});

export default connect(mapStateToProps)(BowlerDetails);

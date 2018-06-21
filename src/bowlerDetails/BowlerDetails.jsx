import React from 'react';
import { Container, Table } from 'reactstrap';
import { connect } from 'react-redux';
import getBowlingTableDetails from './bowingStats';


const BowlerDetails = (props) => {
  const bowlerdataArray = getBowlingTableDetails(props.matchCurrentStatus.innings1.overs);


  return (<Container>
    <label htmlFor="Text"><b>Bowling Table</b></label>
    <br />
    <Table table-sm bordered size={"sm"}>
      <thead>
        <tr>
            <th className="text-center">Bowler</th>
            <th class="text-center">Overs</th>
            <th className="text-center">Maiden</th>
            <th className="text-center">Runs</th>
            <th className="text-center">Wickets</th>
        </tr>
      </thead>
      <tbody>
        {
                bowlerdataArray
                .map(bowler => (
                  <tr>
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


export const mapStateToProps = state => ({
  matchCurrentStatus: state.matchCurrentStatus,
});

export default connect(mapStateToProps)(BowlerDetails);

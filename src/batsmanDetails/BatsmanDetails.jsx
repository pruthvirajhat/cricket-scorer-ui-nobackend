import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'reactstrap';
import { connect } from 'react-redux';
import getBatsmenData from './getBatsmenData';


const BatsmanDetails = (props) => {
  const batsmenData = getBatsmenData(props.overs);

  return (
    <Container>
      <label htmlFor="Text"><b>Batting Table</b></label>
      <br />
        <Table table-sm bordered size={"sm"}>
        <thead>
          <tr>
              <th className="text-center">Batsman</th>
              <th className="text-center">Runs</th>
              <th className="text-center">Balls</th>
              <th className="text-center">Fours</th>
              <th className="text-center">Sixes</th>
              <th className="text-center">Strike Rate</th>
          </tr>
        </thead>
        <tbody>
          {batsmenData.map(batsman => (
            <tr>
              <th className="text-center">{batsman.Name}</th>
              <td align="center">{batsman.Runs}</td>
              <td align="center">{batsman.Balls}</td>
              <td align="center">{batsman.Fours}</td>
              <td align="center">{batsman.Sixes}</td>
              <td align="center">{batsman.StrikeRate}</td>
            </tr>))}
        </tbody>
      </Table>
    </Container>);
};


BatsmanDetails.propTypes = {
  overs: PropTypes.shape.isRequired,
};
export const mapStateToProps = state => ({

  overs: state.gameSummary.innings1.overs,
});

export default connect(mapStateToProps)(BatsmanDetails);

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
          {batsmenData.map(batsman => (
            <tr>
              <th scope="row">{batsman.Name}</th>
              <td>{batsman.Runs}</td>
              <td>{batsman.Balls}</td>
              <td>{batsman.Fours}</td>
              <td>{batsman.Sixes}</td>
              <td>{batsman.StrikeRate}</td>
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

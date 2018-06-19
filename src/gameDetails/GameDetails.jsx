import React from 'react';
import ScoreBoard from '../scorer/Scoreboard';
import BowlerDetails from '../bowlerDetails/BowlerDetails';
import BatsmanDetails from '../batsmanDetails/BatsmanDetails';
import {connect} from "react-redux";

const GameDetails = (props) => (
  <div>
<<<<<<< HEAD
    <ScoreBoard />
    <br />
    <BatsmanDetails />
    <br />
    <BowlerDetails />
  </div>
);

export default GameDetails;
=======

      <ScoreBoard game={props.game} score={props.score}/>

  <br/>
      <BatsmanDetails/>
      <br/>
      <BowlerDetails/>
  </div>
);


export const mapStateToProps = (state) => {
    return {
        score: state.scoreInformation,
        game:state.gameInformation
    }
}

export default connect(mapStateToProps)(GameDetails)
>>>>>>> f71a055035b637b2572b8a6f9c24d93bf263ba1f

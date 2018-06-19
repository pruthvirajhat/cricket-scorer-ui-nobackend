import React from 'react';
import ScoreBoard from './Scoreboard';
import PlayerSelector from "./PlayerSelector";

const Scorer = () => (
    <div>
        <ScoreBoard/>
            <PlayerSelector/>
    </div>
);

export default Scorer;
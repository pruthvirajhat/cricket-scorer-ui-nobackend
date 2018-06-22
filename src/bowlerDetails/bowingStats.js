export function getBowlingTableDetails(overs) {
  const map = new Map();

  overs.forEach((over) => {
    let runs = 0;
    let wickets = 0;
    let deliveriesLength = 0;
    over.deliveries.forEach((delivery) => {
      runs += delivery.runs.batsman + delivery.runs.extras;
      wickets += delivery.wicket !== '' ? 1 : 0;
      deliveriesLength += 1;
    });

    const maidens = deliveriesLength > 5 && runs === 0 ? 1 : 0;

    const overCount = deliveriesLength === 6 ? 1 : +(deliveriesLength / 10).toFixed(1);
    if (!map.get(over.bowler)) {
      map.set(over.bowler, {
        over: overCount, maiden: maidens, runs, wickets,
      });
    } else {
      const prevOver = map.get(over.bowler).over;
      const prevMaiden = map.get(over.bowler).maiden;
      const prevRuns = map.get(over.bowler).runs;
      const prevWickets = map.get(over.bowler).wickets;
      map.set(over.bowler, {
        over: overCount + prevOver,
        maiden: maidens + prevMaiden,
        runs: runs + prevRuns,
        wickets: wickets + prevWickets,
      });
    }
  });

  const bowlerArray = [];
  map.forEach((value, key) => {
    bowlerArray.push({
      name: key, over: value.over, maiden: value.maiden, runs: value.runs, wickets: value.wickets,
    });
  });

  return bowlerArray;
}


export default getBowlingTableDetails;

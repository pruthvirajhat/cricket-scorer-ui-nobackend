function calculateStrikeRate(totalRuns, totalBall) {
  return Number(((totalRuns / totalBall) * 100).toFixed(2));
}

function calculateFours(runs) {
  if (runs > 0 && runs % 4 === 0) {
    return 1;
  }
  return 0;
}

function calculateSixes(runs) {
  if (runs > 0 && runs % 6 === 0) {
    return 1;
  }
  return 0;
}

function addToBatsmanSummer(batsMenMap, delivery) {
  let batsmanObject = batsMenMap[delivery.batsman] ? batsMenMap[delivery.batsman] : {
    Runs: 0,
    Name: delivery.batsman,
    Balls: 0,
    Fours: 0,
    Sixes: 0,
    StrikeRate: 0,
  };
  const totalRuns = delivery.runs.batsman + batsmanObject.Runs;
  const totalBalls = batsmanObject.Balls + 1;
  const totalFours = batsmanObject.Fours + calculateFours(delivery.runs.batsman);
  const totalSixes = batsmanObject.Sixes + calculateSixes(delivery.runs.batsman);
  batsmanObject = {
    ...batsmanObject,
    Runs: totalRuns,
    Balls: totalBalls,
    Fours: totalFours,
    Sixes: totalSixes,
    StrikeRate: calculateStrikeRate(totalRuns, totalBalls),
  };
  return batsmanObject;
}

function getBatsmenData(overs = []) {
  const batsMenMap = {};
  for (let overNum = 0; overNum < overs.length; overNum += 1) {
    const deliveries = [...overs[overNum].deliveries];
    for (let deliveryNum = 0; deliveryNum < deliveries.length; deliveryNum += 1) {
      const batsmanObject = addToBatsmanSummer(batsMenMap, deliveries[deliveryNum]);
      const batsmanName = deliveries[deliveryNum].batsman;
      batsMenMap[batsmanName] = batsmanObject;
    }
  }

  return Object.values(batsMenMap);
}


export default getBatsmenData;

function addToBatsmanSummer(batsMenMap, delivery) {
  let batsmanObject = batsMenMap[delivery.batsman] ? batsMenMap[delivery.batsman] : {
    Runs: 0,
    Name: delivery.batsman,
    Balls: 1,
    Fours: 0,
    Sixes: 0,
    StrikeRate: 100,
  };
  batsmanObject = { ...batsmanObject, Runs: delivery.runs.batsman + batsmanObject.Runs };
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

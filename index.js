// Calculating distance from headquarter in blocks
const hqBlock = 42;

function distanceFromHqInBlocks(numberOfBlocksAway) {
  if (numberOfBlocksAway < 42) {
    return hqBlock - numberOfBlocksAway;
  } else {
    return numberOfBlocksAway - hqBlock; 
  }
}
distanceFromHqInBlocks(32);

//Calculating feet per block

const feetPerBlock = 264; 

function distanceFromHqInFeet(numberOfBlocksAway) { 
  const blocks = distanceFromHqInBlocks(numberOfBlocksAway);
  return blocks * feetPerBlock;
}

//Calculating distance travelled

function distanceTravelledInFeet (start, destination){
  if (destination > start){
    return (destination-start)*264; 
  }else{
    return (start-destination)*264;
}
}
//Calculating fare price
function calculatesFarePrice(start, destination) {
      let distanceTravelled = distanceTravelledInFeet (start, destination);
      
      if (distanceTravelled <= 400){
          return 0;

      } else if (distanceTravelled >= 400 && distanceTravelled < 2000){
        return (distanceTravelled - 400)*0.02;

      } else if (distanceTravelled > 2000 && distanceTravelled < 2500){
        return 25;
      }else{
        return "cannot travel that far"
      }

}
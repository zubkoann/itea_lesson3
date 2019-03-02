import singleton from '../classwork/singleton';
import objectFreeze from '../classwork/objectfreeze';

let universe = {
  infinity: Infinity,
  good: ['cats', 'love', 'rock-n-roll'],
  evil: {
    bonuses: ['cookies', 'great look']
  }
};

let FarGalaxy = objectFreeze(universe);
// TEST
// console.log('FarGalaxy', FarGalaxy)
// FarGalaxy.good.push('javascript'); // false
// FarGalaxy.something = 'Wow!'; // false
// FarGalaxy.evil.humans = [];   // false

const government = {
  law: [],
  budget: 1000000,
  citizensSatisfactions: 0,
}

// TEST
singleton.add(government, government, 'law1', 'somedescription1');
singleton.add(government, 'law2', 'somedescription2');
singleton.add(government, 'law3', 'somedescription3');
console.log('government', government);
console.log('getAllLaw', singleton.getAllLaw(government));
console.log('readLaw', singleton.readLaw(government, 'law3'));
console.log('citizensSatisfactions', singleton.showSatisfactions(government));
console.log('showBudget', singleton.showBudget(government));
console.log('celebrate', singleton.celebrate(government));

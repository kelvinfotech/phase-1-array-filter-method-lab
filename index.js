const { assert } = require("sinon");

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

describe('findMatching()', function () {
  it('should return all drivers that match the passed-in name', function () {
    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

    const matchingDrivers1 = findMatching(drivers, 'Bobby');
    const matchingDrivers2 = findMatching(drivers, 'Sammy');
    const matchingDrivers3 = findMatching(drivers, 'Bobby');

    assert.deepStrictEqual(matchingDrivers1, ['Bobby', 'Bobby']);
    assert.deepStrictEqual(matchingDrivers2, ['Sammy']);
    assert.deepStrictEqual(matchingDrivers3, ['Bobby', 'bobby']);
  });
});

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

describe('fuzzyMatch()', function () {
  const drivers = [];

  beforeEach(function () {
    drivers.length = 0;

    drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
  });

  it('returns a driver if beginning provided letters match', function () {
    expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
  });
});

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}

describe('matchName()', function () {
  it('accesses the data structure to check if name matches', function () {
    const drivers = [
      {
        name: 'Bobby',
        hometown: 'Pittsburgh'
      },
      {
        name: 'Sammy',
        hometown: 'New York'
      },
      {
        name: 'Sally',
        hometown: 'Cleveland'
      },
      {
        name: 'Annette',
        hometown: 'Los Angeles'
      },
      {
        name: 'Bobby',
        hometown: 'Tampa Bay'
      }
    ];

    expect(matchName(drivers, 'Bobby')).to.eql([
      {
        name: 'Bobby',
        hometown: 'Pittsburgh'
      },
      {
        name: 'Bobby',
        hometown: 'Tampa Bay'
      }
    ]);
  });
});


function produceDrivingRange(blockRange) {
  return (start, end) => {
    const distance = parseInt(end.slice(0,-2)) - parseInt(start.slice(0,-2));
    if (distance <= blockRange) {
      return `within range by ${Math.abs(distance - blockRange)}`
    }
    else {
      return `${Math.abs(blockRange - distance)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return (fare) => {
    return fare * percent;
  }
}

function createDriver() {
  let id = 0;
  return function Driver(name) {
    this.name = name;
    this.id++;
  }
}

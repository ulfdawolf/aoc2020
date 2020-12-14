const testInput = `939
7,13,x,x,59,x,31,19`.split('\n');

const input = `1008169
29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,37,x,x,x,x,x,653,x,x,x,x,x,x,x,x,x,x,x,x,13,x,x,x,17,x,x,x,x,x,23,x,x,x,x,x,x,x,823,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,19`.split('\n');

const getBusNumbers = (busList) => {
    return busList.split(',').map(t => {
        const i = parseInt(t);
        return i !== NaN ? i : 0;
    }).filter(n => !!n);
}
const catchNextBus = (input) => {
    const timeToLeave = parseInt(input[0]);
    const validTimes =  getBusNumbers(input[1]);
    let closestBus = [999, 0];

    validTimes.forEach(time => {
        const rest = timeToLeave%time;
        const diff = ((Math.floor(timeToLeave/time) + (rest > 0 ? 1 : 0))*time) - timeToLeave;
        if (diff < closestBus[0]) {
            closestBus = [diff, time];
        }
    })
    return (closestBus[0] * closestBus[1]);
}

console.log("Result AoC 13-1:", catchNextBus(input));
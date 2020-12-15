const testInput1 = "0,3,6".split(',').map(n => parseInt(n));
const input = "0,14,1,3,7,9".split(',').map(n => parseInt(n));

doGame1 = (input, endAtTurn) => {
    let turns = input.length;
    let latest = input[turns-1];
    let newNumbers = {};
    let oldNumbers = {};
    
    input.forEach((n,i) => {
        newNumbers[n] = i+1;
    });

    const speak = (num, turn) => {
        latest = num;
        const newAt = newNumbers[num];
        const oldAt = oldNumbers[num];
        if (!!newAt) {
            delete newNumbers[num];
            oldNumbers[num] = [turn, newAt];
        } else {
            if (!oldAt) {
                newNumbers[num] = turn;
            } else {
                oldNumbers[num] = [turn, oldAt[0]];
            }
        }
    }

    const isLatestNew = () => {
        return !!newNumbers[latest];
    }

    const start = Date.now();
    while (turns < endAtTurn) {
        turns++;
        if (isLatestNew()) {
            speak(0, turns);
        } else {
            let oldAt = oldNumbers[latest];
            speak(oldAt[0] - oldAt[1], turns);
        }
        if (turns%1000000 === 0) {
            console.log(turns);
        }
    }

    console.log("Time sec: ", Date.now() - start);
    return latest;
} 

console.log("Result AoC 14-1:", doGame1(input, 2020));
console.log("Result AoC 14-2:", doGame1(input, 30000000));
const testInput1 = "0,3,6".split(',').map(n => parseInt(n));
const input = "0,14,1,3,7,9".split(',').map(n => parseInt(n));

doGame1 = (input, endAtTurn) => {
    let turns = input.length;
    let latest = input[turns-1];
    const start = Date.now();
    let numbers = new Array(endAtTurn).fill([0,0]);
    console.log("Time msec: ", Date.now() - start); 
    input.forEach((n,i) => {
        numbers[n] = [i+1, 0];
    });

    const speak = (num, turn) => {
        latest = num;
        const [t1, ] = numbers[latest];
        numbers[latest] = [turn, t1];
    }

    const isLatestNew = () => {
        const [, t2] = numbers[latest];
        return t2 === 0;
    }


    while (turns < endAtTurn) {
        turns++;
        if (isLatestNew()) {
            speak(0, turns);
        } else {
            const [t1, t2] = numbers[latest];
            speak(t1 - t2, turns);
        }
        if (turns%1000000 === 0) {
            console.log(turns);
        }
    }

    console.log("Time msec: ", Date.now() - start);
    return latest;
} 

console.log("Result AoC 14-1:", doGame1(input, 2020));
console.log("Result AoC 14-2:", doGame1(input, 30000000));
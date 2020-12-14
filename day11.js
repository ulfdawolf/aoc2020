const testInput = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`.split('\n');

const input = `LLLLLLLL.LLL.LLLLLLLLLLLLL.LL.LLLLLL.LL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLL.LLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLL.LL.LLLLLLL.LLLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLLLL
LLLLLLLL.LLLLL.LLLL.LLL.LLLLLLLLLLLL.LLL..LLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLL.LLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL
LLLLLLLL.LLLLL.LL.L.LLLLLLLLLLLLLLLL..LLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLL
LLLLLLL.LLLLLLLLLLL.LLLLLLLLL.L.LLLLLLLLLLLLL..LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLL.LL.LLLLL
..L.L...L....L......LL.LLL..L.L.L.L...L.........LLLL..L..L...LL..L.L.L.....LLLLL..L..L..L..
LLLLLLLL..LLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLLLLLL.LLL.LLLLLL.LLLLLLLL
LLLLLLLLLLLLLLLLLL..LLLLLLLLL.LLLLLLLLLL.LL.LLLLL.LLL..LLLLLLLLLLL..LLLL.LLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLL.L.LL.LLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLL.L.LLLLLL.LLLLLLLLLLLLLLLLL.LL.LLLLLLLL
LLLLLLLL.LLLLL.LLLL.LLLLLLL.L..LLLLLLLLLL.LLLLL.LLLLLL.LLLLLL.L.LLLLLLLLLLLL.LLLLL.LLL.LLLL
LLL.LLLL.LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LL.LL.LLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLL.LLLLL.LLLLLLLL.LLLLL.LLLLLL.L.LLLLLLL..LLLL.L.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL
LLLLLLL.LLLLLL.LL.L.LLLLLLLL..LLLLLLLLLLLLL.LLLLLLLLLL.LL.LLL.LLLLL.LLLLLL.L.LLLL..LLLLLLLL
LLLLLLLL.LLLLL.LLLL..LLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLL.LL..LLLL.LLLLLLLL
LLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLL..L.LLLLLLLLLLLL.LLLLL.LLLLLL.L.LLLLL.LLLLLLLL
.L.LL....LLL..L.......L...LLLL..LLL....L..L...L.....L...L...LL......L.....L......L........L
LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL...LLLLLLLL.LL.LLLL.LLLLL..LLL.L.LLLLLLLL.LLLLLLLLLLLL.L
LLLLLLLL.LLLL.LLLLL.LLLLLLLLL.LL.L.LLLLLLLLLL..LLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLLLL.LLLLLLL.LL.LLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLL.LLLLL.LLLL.LLLLLLLLL..LLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LL.LLLLLLLL.LL.LLLLL.LLLLLL.L
.LLLLLLLL.LLLL.LLLL.LLLLLLLLL.L.LLLL.LLLLLLLL..LL.L.LL.LLLLLL.L.LLL.L.LL.LL..LLLLL.LLLLLLLL
LLLLL.LLLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLLLLL.LLL.LLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLL.LLL
L..L.L..L....L....L.....LL.L.LL.L...L.L.LL..LL.L.....L.L...L....LL.L....LL........L..LL...L
LLLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLL..LLLL.LL.LLLLLLLLLLLLLL
LLLLLLLL.LLLLL.LLLL.LLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL..LLLLL.LLLLLLLL.LLLL..L.LLLLLL
LLLLLLLL...LLL.LLLL..LLLLLLL..LLLLLL.L.LLLLLLLLLLL.LLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLL
LLL.LLLL.LLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LL.LLLLLLLLLLLL.LLLLLLLL.LLLLL.LLL..LLL
LLLLLLLLLLLLLL.LLLL.LLLLL.LLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLL
LL.LL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLL
LLLL.LLL.L.LLL.LLLL.LLLLLLLLL.L.LLLL.LLLLL.LLL.LLLLL.L.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLL
.L........L...L.....LL..L..L......L.L.LLL.L.LL..LL....LLL..L.L..LLLL...LLLL...L..........LL
LLLLLLL.LLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLL.LLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLL.LLLLLLL.
LLLLLLLL.LLLLL..LLL.LLLLLLLLL.LLLLLL.LLLLLLLL..LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLL.LLLLLLLL
LLLLLLLL.LLLLLLL.LL.LLLLLLLLLLLLLLLLLLLLLL.LLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLL.LLLL.LLLLLLLL
.LLLLLLL.LLLLL.LLLL.LLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LL.LLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL
LLL.LLLL.LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLL.L.LLLLLLL.LLLLL...LLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLL.LLL.L.LLLLLLLLLLLLLL.LLLLLLLLLLL.LLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLL.LLL.LLLLLLLL
LLLLLLLL.LLLLL.LLLL.L.LLLLLLLLLLLLLL.LLL.LLLLL.LLLL.LL.LLLLLLL.LL.L.LLLLLLLL.LLL.L.LLLLLLLL
.LLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLL.L.LLLLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLL.LLLLLLLLLL.LLLLLLL.LLL.LLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLLL.LLLL.LLL.LL.LL.LLLLLLLL
.L....L........L.L.L......LL..L.L.L...LLLL.....L...L..........LL.LLLL.L...L.L.LL.LL.L...L.L
LLLLLLLL.LLLL.LLL.L..L.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL
LLLL.LLL.LLLL..LLLL.LL.LLLL.LLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL..LLLL.LLL.LLLLL
LLLLLLLL..LLLLLL.LL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLL.LLLL.LLL.LLLLL.LLLLLLLL
LLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLL.LLL.LL..LLLLLLLLLLLLL.LLL.L.LL.L.LLL
LLLLLLLLLLLLL..LL.LLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLL
LLL.LLLL.LLLLL.LLLL..LLLLL.LLLLLLLLL.LLLL..LLLLLLLLLL..LLLLLLLLLLLL.LLLLLLLLLLLLLL.LLL.LLLL
LLLLLLLL.LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLL
L.L.LLLL.LLLLL.LL.L.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLLL
..LLLL.........L.LL.LL....L.LL...LLLL....L...L........LL...L.L......L.LLL.L.L...LL....L...L
LLLLLLLL.LL.LL.LLLL.LLLL.LLLLLLL.LLL.LLLLLLLLL.LLLLLL.LLLLLL..LLLLL.LLLLL.LLLLLLLLLLLLLLLLL
LLLLLL.LLLLLLL.LLLL.LLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL..LLLLLL.L.L.L.LLL.LLLLLLLLLL.LLLLLLLL
LLLLLLLL.LLLLL.LL.L.LLLLLLLLLLLLLLLLLLLLLLLL.L.LLLL.LL.LLLLLL.LLLLL.LLLLLLLL..LLLL.LLLLLLLL
LLLLL.LL.LLLLL.LLLLLLLLLLLLLLLLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLL.LLLL.LLLLL..LLLLL.L.LLLLLL.LLLLL.LLLLLLLL
LLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLL.LLL
LLLLLLLL.LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL
L.....LL..L..L.L..L....L.L......LL..L......L.LL..L..L..L...L..L...L.....L......LLLLLL......
LLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLL..LLLLLLLLLLLLLLLL.LLLLL.L.LLLL.LLLLLLLL.LLLLL.LLLLLLL.
LLLLLLLL.LLLLL.LLLL.LLLLLL.LL.LLLLLL.LLLLLLLLL.LLLLL.L.LLLLLL.LLLLL.LLLL.LLL.LLLLLLLLLLLLL.
LL.LLLLL.LLLLL.LLLL.LLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL..LLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL
.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLL
L....L.LL.LLL.L...LL.L....LL..........L.L..L.....LL...L.....LL......L...LLLL.L.....L.LL.L..
LLLLLLLL.LLL.LLLL.L.LLLLLL.LL.LLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL.LLL.LLLL
LL.LLLL..LLLLL..LLL.LLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL..LLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLL.LLL
LLLLLL.L.LLL.L.L.LL.LLLLLLLLLLLLLLLL.LLLL.LLLL.L..L.LL.LLLLLL.LLLLLL.LLLLLLL.LLLLL..LLLL.LL
LLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLL..LLLLLLLL...LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLL.LLLLL.LL.L.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLL.LLLLL.LLLLLLL..LLLLL.LLLLLLLL
LLLLLL.LLLLLLL..LLLLLLLLLL.LLLLLLLLL.LLLLLL.LL.LLLLLLL.LLLLLL.LLLLLLLLLL.LLLLLLLLLL.LLLLLLL
L......L....L...L..L...L..L.LLL.LLLL....L...L.L.L....L..L...LLL.LLL...L......LL....L...L.LL
LLLLLLLL.LLLLL.LLL..LL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL..L.LLLLLLLLLL.LLLLLLLL.LLLLLLL
LLLLLLLL.LLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLL
LLLLLLLL.LLLLL.LLLL.LLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLL..LLLLLLLL
LLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLL.LLL.LLLL..LLLL.L.L.LLLLL.LL.L.L.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL
LLLLLLLLLLLLLLLLLL..L.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLL
LL.LLLLL.LLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLLLLLL..LLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLL.LLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LL.LLLLL.LLLLLLLL
LLLLLLLL.LLLLL.LLL.LLLLLLLLLL.LLLLLLLLLLLLLLL..LLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLL.LLLLLLLL
.LLL.L..L...L.L...L...LL.L..LL.L...LLL.L.L...L...L.LLL..L.......L....L..L......LL..........
LLLLLLLL.LLLLL.LLLL.LL.LLLLLLLLLLLLL.LLLLLLLLL.L.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLL.LLLLLLLL
LLLLLLLL.LLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLL..LLLL.LL.
LLLLLLLL.L.LLLLLLLLLLLLLLLLLLLLL.LLL..LLLLLLLL.LLLLLLL.LLL.LLLLLLLL.LLLLLLLL.LLLL..LLLLLLLL
LLLLLLLL.LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LL.LLLLLLLLLLLLLLLLLLL.L..LLLL.LLLLLLLL
LLL.LLLL.LLLLL.LLLL.LLLLLLL.LLLLLLLL.LL.LLLLLL.LLLLLLL.LLLLLL.LLLLL.LLLLLL.L.LLLLLLLLLLLLLL
LL.LLLLL.L.LLL.LLLL.L.LLLLLLLLLLLLLL..LLLLLLLL.LLLLLLL.L.LLLL.LLL.L.LLLLLLLLLLLLLL.LLLLLLLL
LLLLLLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLL
LL.LLLLL.LL.LLLLLLL.LLLLLLLLL.LLLL.L.LLLLLLLLL.LLLLLLL..LLLLL.LLLLL.LLLLLLLLLLLLLL.LLL.LLLL
LLLLLLLL.LLLLLLLLLL.LLLLLLLLL.LLLL.L.LLLLLLLLL.LLLL.LLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLL`.split('\n');

const adjescent1 = ([xPos, yPos]) => [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]].map(([x,y]) => [x+xPos, y+yPos]);

const isTaken1 = (matrix, xPos, yPos) => {
    const width = matrix[0].length;
    const height = matrix.length;
    let taken = 0;
    for ([x,y] of adjescent1([xPos, yPos])) {
        if (x>=0 && x<width && y>= 0 && y<height && matrix[y][x] === '#') {
            taken++;
        }
    }
    return taken;    
}

const inSight = (matrix, xPos, yPos, ray, maxX, maxY) => {
    let dX = 1;
    let dY = 1;

    switch (ray) {
        case 0:
            dX = 0;
        case 1: 
            dY = -1;
            break;
        case 2:
            dY = 0;
            break;
        case 4:
            dX = 0;
            break;
        case 5:
            dX = -1;
            break;
        case 6: 
            dX = -1;
            dY = 0;
            break;
        case  7:
            dX = -1;
            dY = -1;
            break;          
    }

    let x = xPos;
    let y = yPos;
    let seat;
    do {
        x += dX;
        y += dY;
        if (x>= 0 && x<maxX && y>=0 && y<maxY) {
            seat = matrix[y][x];
        } else {
            seat = '';
        }
    } while (seat === '.');
    return seat;
}

const isTaken2 = (matrix, xPos, yPos) => {
    const width = matrix[0].length;
    const height = matrix.length;
    let taken = 0;
    for (ray of [0, 1, 2, 3, 4, 5, 6, 7]) {
        let is = inSight(matrix, xPos, yPos, ray, width, height);
        if (is === '#') {
            taken++;
        }
    }
    return taken;    
}

const makeNewMatrix = (matrix, version) => {
    const width = matrix[0].length;
    const height = matrix.length;
    let newMatrix = new Array(height);
    let changes = 0;
    const isTaken = version === 1 ? isTaken1 : isTaken2;
    const leaveSeat = version === 1 ? 4 : 5;
    for (let y=0; y<height; y++) {
        let newRow = '';
        for (let x=0; x<width; x++) {
            const oldSeat = matrix[y][x];
            let newSeat = '.';
            if (oldSeat === 'L') {
                newSeat = isTaken(matrix, x, y) === 0 ? '#' : 'L';
            } else if (oldSeat === '#') {
                newSeat = isTaken(matrix, x, y) >= leaveSeat ? 'L' : '#';
            } 
            if (newSeat !== oldSeat) {
                changes++;
            }
            newRow += newSeat;
        }
        newMatrix[y] = newRow;
    }

    if (!changes) {
        return undefined;
    }
    return newMatrix;
} 

const countSeats = (matrix) => matrix.join('').split('#').length - 1;

const loopTheMatrix = (input, version) => {
    let oldMatrix = input;
    let newMatrix;
    do {
        newMatrix = makeNewMatrix(oldMatrix, version);
        if (!!newMatrix) {
            oldMatrix = newMatrix;
        }
    } while (newMatrix);

    return countSeats(oldMatrix);
}

console.log("Result AoC 11-1:", loopTheMatrix(input, 1));
console.log("Result AoC 11-2:", loopTheMatrix(input, 2));
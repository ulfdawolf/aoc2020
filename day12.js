const testInput = `F10
N3
F7
R90
F11`.split('\n');

const input = `W1
F91
W3
F82
N1
E2
N4
R90
F25
N2
F75
E4
R90
F91
R90
F64
L90
E1
L90
S2
L180
S2
E3
N2
E5
L90
N2
R90
F30
L90
N1
F37
S1
E5
F3
E2
F59
W3
L270
S5
W5
S4
F84
N5
R180
E4
F31
L90
E2
F77
L90
N5
F17
N4
N4
W2
F45
S1
F92
E1
F33
L270
F21
L90
E1
F81
N5
F20
E2
R90
N4
W3
L180
S2
F33
E5
F87
R90
N2
F29
E3
S4
L90
E4
R90
S2
F65
L90
F69
W2
N4
F73
R180
S3
R90
N3
R90
W1
L180
F96
N3
W2
L180
S5
F29
E3
S4
W1
F53
E1
L90
E5
F26
E3
R270
E2
S2
W2
F43
W2
F53
F74
R180
N5
W3
S4
F70
R90
W4
F56
L90
S5
R180
E4
S4
F80
S1
F91
R90
S4
F88
L90
S5
R90
E2
S1
F37
N1
R90
F92
W5
F14
N2
E5
S2
F89
L180
N4
E4
L90
F32
E4
R90
F99
N3
L180
F78
S1
R270
W1
F11
S4
F47
N4
L90
F17
R90
E4
S3
F14
S1
R90
N3
F52
W3
S5
L180
F41
R90
F62
W1
R90
E4
F1
W5
F86
W1
N5
F5
S1
E5
F67
W3
F97
E1
L90
S2
E1
R90
F82
E3
N2
F16
L90
W2
F35
R180
N2
E3
N4
W4
F13
S5
E1
S5
L90
E5
F65
E5
L90
S4
E3
W4
N1
R90
N5
F93
R90
S5
R90
L90
F86
E3
F90
E4
N2
E4
R180
W5
R90
E3
F98
F56
L90
F68
L90
N3
F35
S1
W5
F25
L180
F7
R270
F84
R90
S4
E5
S3
L270
F33
W3
R90
W5
N3
E4
R90
W2
F100
E5
S2
L90
F6
E1
L90
S1
F17
N3
E1
S3
F78
R90
W5
N4
L90
F13
W5
R90
F7
F74
R90
E4
F28
L90
S5
R90
F77
S2
E2
N3
F30
E1
R90
W2
S2
F62
E2
L90
E2
F56
L90
F61
S1
F14
W3
F23
L90
E3
S3
L270
S5
F97
E5
S1
F96
W2
F61
L180
F25
L90
W4
F100
W4
F14
W4
S5
R90
F67
E1
R90
F89
W5
S3
W2
N2
F64
L180
S4
R270
F47
E1
S1
E4
N1
R90
N2
E5
F97
N3
E5
S5
R180
E5
F34
L90
W1
W1
N3
R90
F17
N1
F75
S4
W5
N2
W1
N2
L90
W3
N2
F1
N1
W3
R90
F18
E4
N4
F18
N4
F73
W4
F61
W3
R90
N5
L90
N4
F70
E4
F10
L90
F33
N5
L90
W4
L180
E2
F41
E1
S4
E4
L90
F28
N2
W4
S2
F86
R180
S3
W3
S3
W2
F55
W1
F18
W2
F18
L90
S4
W1
L90
F47
L90
S4
F39
N5
L180
S3
W5
F95
W1
R90
E2
N3
L90
S4
F77
S1
W4
S5
E4
R90
W1
R90
W3
W2
N4
F1
W1
N5
F55
E4
N4
W5
L90
F90
E4
R90
E2
R90
S5
F44
N2
E3
R90
F64
W1
L180
L180
F55
L90
F15
S2
E1
R270
F10
R90
W4
F43
E1
F7
N2
W3
F10
N1
L270
N2
L90
E2
R90
F28
W2
N5
F70
R90
E3
E3
F75
W4
L90
S2
R90
F83
L270
E1
F87
R180
N3
L90
F30
L90
E1
N5
F87
N4
R90
F51
W5
N3
R90
S5
F98
W4
N2
E2
L90
E4
S1
E5
F60
N1
L180
E1
F10
R90
W5
F90
W5
F9
S1
W3
F9
E2
S4
L180
F61
W2
N3
F35
R90
E4
N3
W4
L90
E1
L90
S1
F62
S5
W1
N5
L180
F76
W3
L90
W4
L90
N2
E3
N5
E1
N2
F13
S1
F20
W5
L90
S1
F89
S3
L90
W2
L90
F48
W5
N1
R90
F93
L90
E4
L90
N2
F100
W5
S5
W1
S1
E2
S1
W4
R90
S2
F99
W2
F80
L90
F78
N4
L90
F67
S1
L90
F23
W3
N1
W5
F76
R270
F51
L90
W2
N1
E3
S3
L90
F83
L90
F46
S5
L180
N3
E3
F49
E5
N4
W5
L90
E3
R90
S4
F54
E1
F49
N4
L180
E3
L90
R90
F95
W2
N2
F12
R180
E4
R90
N5
L180
S3
W3
S1
F22
W1
F18
L90
F35
R90
F3
S4
L90
F53
W5
F58
L90
S2
F48
S5
R180
F67
L180
W1
S3
L90
F33
F34
R90
F54
W2
L180
S5
W4
R90
F80
W4
S1
W4
F35
E1
F48
N3
L270
F78
N4
S4
F11
S1
W3
L90
W1
F26
R180
E3
F43
S4
R180
W3
N2
F80
W4
F29
W5
W1
R270
N3
L90
F17
W4
F49
S4
S1
F47`.split('\n');

const dirs = ['N', 'E', 'S', 'W'];

toDists = (direction, value) => {
    let x = 0;
    let y = 0;
    switch (direction) {
        case 'N':
            y=-1;
            break;
        case 'E':
            x=1;
            break;
        case 'S':
            y=1;
            break;
        case 'W':
            x=-1;
            break;
    }

    return [x*value, y*value];
}

const addDists = (pos, dists) => {
    pos.xPos += dists[0];
    pos.yPos += dists[1];
}

const multDists = (pos, mult, dists) => {
    pos.xPos += mult * dists[0];
    pos.yPos += mult * dists[1];
}

const getDistance = (input) => {
    let direction = 'E';
    let pos = {xPos : 0,
        yPos : 0};
    for (let i=0; i<input.length; i++) {
        const action = input[i][0];
        const value = parseInt(input[i].slice(1));
        switch (action) {
            case 'F':
                addDists(pos, toDists(direction, value));
                break;

            case 'R':
                direction = dirs[(dirs.indexOf(direction) + value/90)%4];
                break;

            case 'L':
                let indexb = (dirs.indexOf(direction) - value/90)%4;
                if (indexb < 0) {
                    indexb = 4 + indexb;
                }
                direction = dirs[indexb];
                break;

            default:
                addDists(pos, toDists(action, value));
                break;
        }
    }

    return Math.abs(pos.xPos) + Math.abs(pos.yPos);
}

const transformWaypoint = (qturn, wp) => {
    switch (qturn) {
        case 0:
        case -0:
            return wp;

        case 1:
        case -3:
            return [-wp[1], wp[0]];

        case 2:
        case -2:
            return [-wp[0], -wp[1]];

        case 3:
        case -1:
            return [wp[1], -wp[0]];

        default:
            throw new Error("Invalid qturn", qturn)
    }
}

const getDistanceWithWaypoint = (input) => {
    let waypoint = [10, -1];
    let pos = {xPos : 0, yPos : 0};
    for (let i=0; i<input.length; i++) {
        const action = input[i][0];
        const value = parseInt(input[i].slice(1));
        switch (action) {
            case 'F':
                multDists(pos, value, waypoint);
                break;

            case 'R':
                waypoint = transformWaypoint((value/90)%4, waypoint);
                break;

            case 'L':
                waypoint = transformWaypoint(-((value/90)%4), waypoint);
                break;

            default:
                let delta = toDists(action, value);
                waypoint[0] += delta[0];
                waypoint[1] += delta[1];
                break;
        }
    }

    return Math.abs(pos.xPos) + Math.abs(pos.yPos);
}

console.log("Result AoC 12-1:", getDistance(input));
console.log("Result AoC 12-2:", getDistanceWithWaypoint(input));
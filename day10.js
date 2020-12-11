const testInput1 = `16
10
15
5
1
11
7
19
6
12
4`.split('\n').map(n => parseInt(n)).sort((a,b) => a-b);

const testInput2 = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`.split('\n').map(n => parseInt(n)).sort((a,b) => a-b);

const input = `126
38
162
123
137
97
92
67
136
37
146
2
139
74
101
163
128
127
13
111
30
117
3
93
29
152
80
21
7
54
69
40
48
104
110
142
57
116
31
70
28
151
108
20
157
121
47
75
94
39
73
77
129
41
24
44
132
87
114
58
64
4
10
19
138
45
76
147
59
155
156
83
118
109
107
160
61
91
102
115
68
150
34
16
27
135
161
46
122
90
1
164
100
103
84
145
51
60`.split('\n').map(n => parseInt(n)).sort((a,b) => a-b);


const findDiffs = (input) => {
    let current = 0;
    let diffs1 = 0;
    let diffs3 = 0;
    input.forEach(n => {
        let diff = n - current;
        if (diff === 1) {
            diffs1++;
        } else if (diff === 3) {
            diffs3++;
        }
        else {
            throw new Error("Invalid input", current, n)
        }
        current = n;
    });
    return (diffs3+1)*diffs1;
}

let tribonnaci = [0,1,1,2,4,7,13,24,44,81,149];

const splitToSegments = (input) => {
    let all = [0, ...input, input[input.length-1]+3];
    let segments = [];
    let segment = [0];
    let si = 0;
    for (let i=1; i<all.length; i++) {
        if (segment[si] + 3 === all[i]) {
            segments.push(segment);
            segment = [all[i]];
            si = 0;
        } else {
            segment.push(all[i]);
            si++;
        }
    }
    segments.push(segment);
    return segments;
}

const calcPaths = (segments) => {
    return segments.map(s => tribonnaci[s.length]).reduce((prev, curr) => prev*curr, 1);
}

console.log("Result AoC 10-1:", findDiffs(input));
console.log("Result AoC 10-2:", calcPaths(splitToSegments(input)));
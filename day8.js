const parse = (string) => {
    const [op, param] = string.split(' ');
    return {op, param: parseInt(param)};
}

const testInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`.split('\n').map(parse); 

const input = `jmp +323
acc +0
acc -1
acc +18
jmp +601
nop +531
acc +7
acc +46
jmp +351
acc +2
jmp +532
acc +20
acc +15
acc -7
acc +27
jmp +304
acc +28
acc +14
jmp +593
nop +448
acc -2
jmp +508
acc +25
acc +25
jmp +1
jmp +442
acc +31
acc -12
acc +45
jmp +1
jmp +174
nop +292
jmp +93
acc +29
acc +46
acc +23
acc -5
jmp +446
acc +36
jmp +115
acc +27
nop +186
jmp +425
jmp +390
acc -9
nop +560
acc +2
jmp +255
acc -17
acc +48
jmp +131
acc +37
acc +6
acc +0
acc +0
jmp +539
acc +41
acc +2
acc +45
acc +0
jmp +291
jmp +525
acc -2
acc +46
acc -11
jmp +381
acc +17
acc +7
jmp +215
acc -13
acc +4
jmp +1
acc +50
jmp -40
acc -10
acc +38
jmp +256
acc +31
acc +5
acc +1
acc +40
jmp -20
acc +26
acc +29
nop +248
nop +394
jmp +169
acc +15
acc -1
jmp +1
acc -11
jmp +99
acc -12
nop +485
nop -2
jmp +200
acc +7
acc +23
acc +43
acc +49
jmp +245
acc +6
acc +36
jmp +1
nop +386
jmp +130
acc +4
acc +12
acc +33
nop +443
jmp +185
acc -7
jmp -72
acc +5
acc +24
acc -9
jmp -76
jmp +286
acc +50
acc +20
jmp -80
acc +27
jmp +41
nop +465
jmp +221
jmp +1
acc +9
acc +9
acc +0
jmp -18
acc +42
nop +171
acc +36
jmp +57
acc +25
jmp +1
jmp +248
acc -1
acc +11
nop -22
jmp +169
acc -10
acc -5
jmp +274
jmp +375
jmp -94
acc -17
acc +32
nop +175
acc +35
jmp +302
jmp -34
acc +0
jmp +58
acc +30
acc +20
acc +3
acc +9
jmp -125
acc +41
acc +24
acc +6
jmp -129
acc +32
acc +32
acc +28
acc +2
jmp -148
acc +5
nop -129
acc -18
acc +21
jmp +422
acc +5
acc +21
acc +17
jmp +112
jmp +401
acc +32
jmp +192
jmp -26
acc +7
acc +23
nop +284
acc -18
jmp +426
acc +19
acc -5
acc -10
jmp -88
nop +339
acc -2
jmp -11
acc +1
acc +26
acc +3
acc +47
jmp +98
acc -3
jmp +124
acc +28
acc +10
acc +45
jmp +410
acc -17
acc +17
acc -4
jmp +1
jmp +238
jmp +1
jmp +85
nop +214
jmp -151
jmp -40
acc +38
jmp -123
acc +23
acc +46
acc +29
jmp +56
jmp +89
jmp -76
nop -97
acc +42
acc +40
jmp -181
jmp -165
acc +5
acc +36
acc +19
jmp +106
acc +43
acc +48
acc +26
jmp -109
acc +48
acc +15
jmp +315
acc +18
jmp +164
jmp -26
acc +18
acc +6
acc +18
jmp -119
jmp +1
jmp +233
acc +4
acc +32
acc +46
jmp -168
jmp +255
acc +13
acc +4
jmp +236
acc +2
jmp -16
acc +31
jmp +155
jmp -8
acc +35
acc +15
jmp -211
jmp +77
jmp -163
acc +24
jmp +1
acc +15
nop +77
jmp +291
acc -3
acc +7
acc +42
acc +7
jmp +314
acc +2
acc +4
jmp -66
acc +9
acc -4
acc +49
acc +28
jmp -7
jmp +174
acc +3
acc -19
acc +15
jmp -4
acc +36
jmp +289
nop +219
acc +36
acc -13
acc +11
jmp -143
acc +29
acc +32
acc +8
jmp +283
acc +41
acc +24
jmp -103
acc +43
jmp +110
acc -18
acc +14
nop -255
acc -1
jmp -110
acc +31
acc +47
nop +179
nop +266
jmp +185
acc -7
acc -6
acc -16
acc +12
jmp +10
acc +12
jmp +1
jmp -76
jmp +278
jmp +118
acc +30
acc +4
acc -4
jmp +9
jmp +191
acc +9
acc +23
jmp -133
jmp -69
acc +42
acc +16
jmp +276
acc +12
acc +49
jmp +275
jmp +159
jmp +1
acc +42
jmp -14
acc -16
jmp +234
jmp +107
acc +35
acc +39
nop +36
acc +6
jmp -216
acc +36
acc +40
jmp -133
acc +26
nop -210
acc +46
jmp +1
jmp -13
acc -4
acc +19
nop +208
acc +27
jmp +237
nop +205
acc +35
jmp +59
jmp +219
acc +16
acc +18
jmp -249
jmp +1
acc +30
acc +7
jmp -220
acc +12
jmp -5
acc +42
acc +30
acc +33
jmp -121
acc +47
acc -7
jmp +42
jmp -7
jmp -334
jmp -360
acc +0
acc +50
jmp -297
jmp -4
nop -51
nop -291
acc +47
jmp -119
acc -19
acc +12
jmp +98
acc +19
acc +10
acc +32
acc +0
jmp +146
acc +6
acc -12
acc +18
acc +9
jmp +26
acc +10
acc +1
acc +24
acc +11
jmp +61
acc +20
jmp -273
acc +47
jmp +144
acc -7
acc +27
jmp +123
acc +50
acc -8
nop -182
acc -15
jmp -290
acc -15
nop -151
acc +23
acc +45
jmp +93
acc +32
acc +39
jmp -254
acc +47
acc +2
acc +5
acc -5
jmp +92
acc -5
nop -428
jmp +66
acc +44
nop -325
nop +47
jmp +35
jmp +1
acc +46
acc +42
acc +11
jmp -117
acc +14
jmp -340
jmp +117
acc +3
nop -179
nop -65
jmp -161
nop -174
acc +18
jmp +172
acc +44
acc +28
jmp -91
jmp -362
acc +46
acc +17
jmp +139
acc +50
acc +23
jmp -92
acc +0
acc +12
jmp -136
acc +30
acc -15
jmp -285
acc +42
acc +11
jmp -361
nop +57
acc -11
jmp -216
jmp +8
acc +18
jmp -418
acc -8
acc +31
nop -4
nop -31
jmp -423
acc +20
jmp -264
acc -7
acc +11
jmp -349
jmp -22
nop +46
jmp +103
acc -9
nop -58
acc +41
jmp -134
nop -50
acc +12
acc +13
jmp -169
jmp -495
nop -74
jmp -383
acc +48
nop -306
acc +23
acc +10
jmp -315
acc +7
nop -342
acc +23
acc +28
jmp -23
jmp -297
acc +47
jmp -131
acc -11
acc +29
jmp +1
jmp -62
acc +32
acc +26
jmp -205
acc +34
acc +43
nop -309
acc +37
jmp -528
nop +54
jmp -149
acc -13
jmp -262
acc +2
nop -394
acc +45
jmp -116
acc +13
acc +0
acc +6
acc +45
jmp -464
jmp -343
jmp -414
acc -5
acc +10
jmp +62
acc -1
nop -313
acc +35
acc +49
jmp -435
acc +1
acc +7
jmp -50
nop -415
acc +9
acc +22
jmp -168
nop -559
jmp -367
nop -141
jmp -142
jmp -370
nop -74
acc +2
acc -19
jmp -498
acc +47
acc +48
acc +27
acc +41
jmp -182
jmp -219
acc +31
jmp -128
acc +44
acc +18
acc +17
jmp -36
jmp -182
jmp +35
jmp -184
jmp +1
acc +15
jmp -239
acc +19
nop -50
jmp -103
acc +27
acc +44
jmp -8
acc +5
acc +36
jmp -213
acc -2
acc +50
nop -337
jmp -252
jmp -163
acc -9
jmp -433
acc +2
acc +22
acc -19
jmp -469
jmp -45
jmp -18
acc +36
acc +6
acc +38
jmp -475
nop -281
acc +36
nop -575
jmp -292
acc -11
acc +30
nop -572
acc +21
jmp -235
acc +3
acc -16
acc +8
acc -9
jmp -246
acc +3
acc +50
jmp +1
acc +49
jmp +1`.split('\n').map(parse); 

const runBoot = (boot) => {
    let instr = 0;
    let acc = 0;

    let executed = new Array(boot.length).fill(0);
    while (executed[instr] === 0) {
        if (instr < 0 || instr > (boot.length - 1)) {
            throw new Error("Invalid instruction pointer", instr);
        }
        executed[instr]++;
        switch (boot[instr].op) {
            case 'acc':
                acc += boot[instr].param;
                instr++;
                break;

            case 'jmp':
                instr += boot[instr].param;
                break;

            case 'nop':
                instr++;
                break;
        }
    } 

    return acc;
}


const fixBoot = (boot) => {
    let swapList = boot.map((code, index) => code.op !== 'acc' && !(code === 'nop' && code.param === 0) ? index + 1 : 0).filter(swapIndex => !!swapIndex);
    let swapIndex = 0;
    let acc = 0;
    let instr = 0;
    do {
        let executed = new Array(boot.length).fill(0);
        let swapInstr = swapList[swapIndex] - 1;
        instr = 0;
        acc = 0;
        while (!(instr < 0 || instr >= boot.length) && executed[instr] === 0) {
            executed[instr]++;
            let {op, param} =  boot[instr];
            if (instr === swapInstr) {
                if (op === 'jmp') {
                    op = 'nop';
                } else {
                    op = 'jmp';
                }
            }
            switch (op) {
                case 'acc':
                    acc += param;
                    instr++;
                    break;

                case 'jmp':
                    if (param === 0) {
                        instr = -1;
                    }
                    instr += param;
                    break;

                case 'nop':
                    instr++;
                    break;
            }
        } 
        swapIndex++;
    } while (instr !== boot.length);

    return acc;
}

console.log("Result AoC 8-1:", runBoot(input));

console.log("Result AoC 8-2:", fixBoot(input));
const variants = [
    [0, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1]
];

let result = [];

const x3True = function () {
    result.push("A");
}

const x3False = function () {
    result.push("D", "E");
}

const x2True = function () {
    result.push("B");
}

const x2False = function () {
    x3False();
}

const x1True = function () {
    result.push("C", "D", "E");
}

const x1False = function () {
    infinite = "infinite";
}

const x4True = function () {
    result.push("M", "K");
}

const x4False = function () {
    infinite = "infinite";
}

console.log("|X3||X2||X1||X4|");
for (const el of variants) {
    result = [];
    let infinite = "";
    // if X3 is true
    if (el[0]) {
        x3True();
        // if x2 is true
        if (el[1]) {
            x2True();
            // if x1 is true
            if (el[2]) {
                x1True();
                // if x4 is true
                if (el[3]) {
                    x4True();
                }
                // if x4 is false
                else {
                    x4False(); // infinite
                }
            }
            // if x1 is false
            else {
                x1False(); // infinite
            }
        }
        // if x2 is false
        else {
            x2False();
        }
    }
    // if X3 is false
    else {
        x3False();
        // if x4 is true
        if (el[3]) {
            x4True();
        }
        // if x4 is false
        else {
            x4False(); // infinite
        }
    }
    console.log(" " + el.join("   ") + "   -   " + result, `  (${infinite})`);
}
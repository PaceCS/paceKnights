// paceKnightsWhile takes an input n and logs an appropriate output

function paceKnightsWhile(n) {
    // Put your code here
}

paceKnightsWhile(20);


























// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
const out = [];
console.log = function log(d) {
    out.push(d);
};
const N = 30;
paceKnightsWhile(N);
printme('\nTesting...');
printme(`\t did you print the proper number of lines?\t ${out.length == N} `);
let val = true;
for (let i = 1; i <= N; i += 1) {
    let tVal;
    const row1 = i % 3 == 0 ? 'Pace' : '';
    const row2 = i % 5 == 0 ? 'Knights' : '';
    if (i % 3 != 0 && i % 5 != 0) {
        tVal = out[i - 1] == i;
    } else {
        tVal = out[i - 1] == `${row1} ${row2}`.trim();
    }
    val = val && tVal;
}
printme(`\t did you print a correct output?\t ${val}`);

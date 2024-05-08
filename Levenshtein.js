// Levenshtein 
// Levenshtein Distance
// Given 2 strings, find the minimum number of operations required to change one string to the other. An operation is defined as either replacement of a character, deletion of a character, or addition of a character. This problem is also called Levenshtein Distance. Levenshtein distance is a string metric for measuring the difference between two sequences.
const levenshteinDistance = (str1, str2) => {
    let edits = [];
    // creating the matrix
    for(let i = 0; i < str2.length + 1; i++) {
        let row = [];

        for(let j = 0; j < str1.length + 1; j++) {
            row.push(j);
        }
        row[0] = i;
        edits.push(row);
    }
    // DP Solution
    for(let i = 1; i < str2.length + 1; i++) {
        for(let j = 1; j < str1.length + 1; j++) {
            if(str2[i-1] === str1[j-1]) {
                edits[i][j] = edits[i-1][j-1]
            } else {
                edits[i][j] = 1+ Math.min(edits[i-1][j], edits[i][j-1], edits[i-1][j-1]);
            }
        }
    }
    console.log('edits', edits);
    return edits[str2.length][str1.length];
}

console.log(levenshteinDistance('abc', 'yabd'))

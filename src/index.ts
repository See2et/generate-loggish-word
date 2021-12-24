import loggish from '../loggish.json'

const vl = loggish.vowel.length;
const cl = loggish.consonant.length;

let v1: number = 0;
let c1: number = 0;
let v2: number = 0;
let c2: number = 0;
let i: number = 0;

while (true) {
    i += 2;
    v1++;
    if (v1 > vl) {
        v1 = v1 % vl;
        c1++;
    }
    if (c1 > cl) {
        c1 = c1 % cl;
        c2++;
    }
    if (c2 >= cl) {
        break;
    }
    const word = loggish.consonant[c2 % cl] + loggish.vowel[i % vl] + loggish.consonant[c1 % cl] + loggish.vowel[v1 % vl];
    console.log(word);
}
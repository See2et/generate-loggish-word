import loggish from '../loggish.json';
import * as fs from 'fs';

const words = {};

const v = loggish.vowel;
const c = loggish.consonant;
const vl = v.length;
const cl = c.length;

let v1: number = 0;
let c1: number = 0;
let v2: number = 0;
let c2: number = 0;
let i: number = 0;
let n: number = 0;

while (true) {
    n += 2;
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
    const word = loggish.consonant[c2 % cl] + loggish.vowel[n % vl] + loggish.consonant[c1 % cl] + loggish.vowel[v1 % vl];
    // console.log(word);
    words[i] = word;
    i++;
}

v1 = 0;
c1 = 0;
v2 = 0;
c2 = 0;
let v3: number = 0;
let c3: number = 0;
n = 0;

while (true) {
    n += 2;
    v1++;
    if (v1 > vl) {
        v1 = v1 % vl;
        c1++;
    }
    if (c1 > cl) {
        c1 = c1 % cl;
        v2++;
    }
    if (v2 > vl) {
        v2 = v2 % vl;
        c2++;
    }
    if (c2 > cl) {
        c2 = c2 % cl;
        c3++;
    }
    if (c3 >= cl) {
        break;
    }
    const word = c[c3 % cl] + v[n % vl] + c[c2 % cl] + v[v2 % vl] + c[c1 % cl] + v[v1 % vl];
    // console.log(word);
    words[i] = word;
    i++;
}

const result = {};
Object.keys(words).forEach(function(key){
    result[key] = words[key];
    //console.log(key,obj[key])
});
fs.writeFileSync('output.json', JSON.stringify(result));
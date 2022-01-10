import loggish from '../loggish.json';
import * as fs from 'fs';
import { generateCvcvWords } from './export';

const words = {};

const v = loggish.vowels;
const c = loggish.conses;
const vl = v.length;
const cl = c.length;

let v1: number = 0;
let c1: number = 0;
let v2: number = 0;
let c2: number = 0;
let i: number = 0;
let n: number = 0;
let v3: number = 0;
let c3: number = 0;

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
        v3++;
    }
    if (v3 >= cl) {
        break;
    }
    const word = c[n % cl] + v[v3 % vl] + c[c2 % cl] + v[v2 % vl] + c[c1 % cl] + v[v1 % vl];
    // console.log(word);
    words[i] = word;
    i++;
}

generateCvcvWords(loggish.vowels, loggish.conses);
/*const result = {};
Object.keys(words).forEach(function (key) {
    result[key] = words[key];
});
fs.writeFileSync('output.json', JSON.stringify(result, null, '\t'));*/
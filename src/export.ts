import * as fs from 'fs';

export function generateCvcvWords(vowels: Array<string>, conses: Array<string>) {
    const numbersOfVowels: number = vowels.length;
    const numbersOfConses: number = conses.length;
    let vcvSyllable: Array<number> = [0, 0, 0];
    const words: string[] = [];
    let index: number = 0;
    while (true) {
        if (vcvSyllable[2] >= numbersOfVowels) {
            vcvSyllable[2] = vcvSyllable[2] % numbersOfVowels;
            vcvSyllable[1]++;
        }
        if (vcvSyllable[1] >= numbersOfConses) {
            vcvSyllable[1] = vcvSyllable[1] % numbersOfConses;
            vcvSyllable[0]++;
        }
        if (vcvSyllable[0] >= numbersOfVowels) {
            break;
        }
        words[index] =
            conses[index % numbersOfConses] +
            vowels[vcvSyllable[0]] +
            conses[vcvSyllable[1]] +
            vowels[vcvSyllable[2]];
        vcvSyllable[2]++;
        index++;
    }
    const result = {};
    Object.keys(words).forEach(function (key) {
        result[key] = words[key];
    });
    fs.writeFileSync('output.json', JSON.stringify(result, null, '\t'));
}

export function generateCvcvcvWords(vowels: Array<string>, conses: Array<string>) {
    const numbersOfVowels: number = vowels.length;
    const numbersOfConses: number = conses.length;
    let vcvSyllable: Array<number> = [0, 0, 0, 0, 0];
    const words: string[] = [];
    let index: number = 0;
    while (true) {
        if (vcvSyllable[4] >= numbersOfVowels) {
            vcvSyllable[4] = vcvSyllable[4] % numbersOfVowels;
            vcvSyllable[3]++;
        }
        if (vcvSyllable[3] >= numbersOfConses) {
            vcvSyllable[3] = vcvSyllable[3] % numbersOfConses;
            vcvSyllable[2]++;
        }
        if (vcvSyllable[2] >= numbersOfVowels) {
            vcvSyllable[2] = vcvSyllable[2] % numbersOfVowels;
            vcvSyllable[1]++;
        }
        if (vcvSyllable[1] >= numbersOfConses) {
            vcvSyllable[1] = vcvSyllable[1] % numbersOfConses;
            vcvSyllable[0]++;
        }
        if (vcvSyllable[0] >= numbersOfVowels) {
            break;
        }
        words[index] =
            conses[index % numbersOfConses] +
            vowels[vcvSyllable[0]] +
            conses[vcvSyllable[1]] +
            vowels[vcvSyllable[2]] +
            conses[vcvSyllable[3]] +
            vowels[vcvSyllable[4]];
        vcvSyllable[4]++;
        index++;
    }
    const result = {};
    Object.keys(words).forEach(function (key) {
        result[key] = words[key];
    });
    fs.writeFileSync('output.json', JSON.stringify(result, null, '\t'));
}

export function generateWords(vowels: Array<string>, conses: Array<string>) {
    const numbersOfVowels: number = vowels.length;
    const numbersOfConses: number = conses.length;
    let vcvSyllable: Array<number> = [0, 0, 0];
    const words: string[] = [];
    let index: number = 0;
    while (true) {
        if (vcvSyllable[2] >= numbersOfVowels) {
            vcvSyllable[2] = vcvSyllable[2] % numbersOfVowels;
            vcvSyllable[1]++;
        }
        if (vcvSyllable[1] >= numbersOfConses) {
            vcvSyllable[1] = vcvSyllable[1] % numbersOfConses;
            vcvSyllable[0]++;
        }
        if (vcvSyllable[0] >= numbersOfVowels) {
            break;
        }
        words[index] =
            conses[index % numbersOfConses] +
            vowels[vcvSyllable[0]] +
            conses[vcvSyllable[1]] +
            vowels[vcvSyllable[2]];
        vcvSyllable[2]++;
        index++;
    }
    vcvSyllable = [0, 0, 0, 0, 0];
    while (true) {
        if (vcvSyllable[4] >= numbersOfVowels) {
            vcvSyllable[4] = vcvSyllable[4] % numbersOfVowels;
            vcvSyllable[3]++;
        }
        if (vcvSyllable[3] >= numbersOfConses) {
            vcvSyllable[3] = vcvSyllable[3] % numbersOfConses;
            vcvSyllable[2]++;
        }
        if (vcvSyllable[2] >= numbersOfVowels) {
            vcvSyllable[2] = vcvSyllable[2] % numbersOfVowels;
            vcvSyllable[1]++;
        }
        if (vcvSyllable[1] >= numbersOfConses) {
            vcvSyllable[1] = vcvSyllable[1] % numbersOfConses;
            vcvSyllable[0]++;
        }
        if (vcvSyllable[0] >= numbersOfVowels) {
            break;
        }
        words[index] =
            conses[index % numbersOfConses] +
            vowels[vcvSyllable[0]] +
            conses[vcvSyllable[1]] +
            vowels[vcvSyllable[2]] +
            conses[vcvSyllable[3]] +
            vowels[vcvSyllable[4]];
        vcvSyllable[4]++;
        index++;
    }
    const result = {};
    Object.keys(words).forEach(function (key) {
        result[key] = words[key];
    });
    fs.writeFileSync('output.json', JSON.stringify(result, null, '\t'));
}
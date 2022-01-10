import * as fs from 'fs';

export function oldGenerateCvcvWords(vowels: Array<string>, conses: Array<string>) {
    const numbersOfVowels: number = vowels.length;
    const numbersOfConses: number = conses.length;
    let cvcvSyllableNumbers: Array<number> = [0, 0, 0, 0];
    const words: string[] = [];
    let index: number = 0;
    while (true) {
        if (cvcvSyllableNumbers[1] >= numbersOfVowels) {
            cvcvSyllableNumbers[1] = cvcvSyllableNumbers[1] % numbersOfVowels;
            cvcvSyllableNumbers[2] += numbersOfVowels;
        }
        if (cvcvSyllableNumbers[2] >= numbersOfConses) {
            cvcvSyllableNumbers[2] = cvcvSyllableNumbers[2] % numbersOfConses;
            cvcvSyllableNumbers[3]++;
        }
        if (cvcvSyllableNumbers[3] >= numbersOfVowels) {
            break;
        }
        words[index] =
            conses[index % numbersOfConses] +
            vowels[cvcvSyllableNumbers[1] % numbersOfVowels] +
            conses[cvcvSyllableNumbers[2] % numbersOfConses] +
            vowels[cvcvSyllableNumbers[3] % numbersOfVowels];
        cvcvSyllableNumbers[1]++;
        index++;
    }
    const result = {};
    Object.keys(words).forEach(function (key) {
        result[key] = words[key];
    });
    fs.writeFileSync('output.json', JSON.stringify(result, null, '\t'));
}

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
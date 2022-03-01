import * as fs from "fs";

export function generateWords(
  vowels: Array<string>,
  conses: Array<string>,
  lang: any
) {
  const numbersOfVowels: number = vowels.length;
  const numbersOfConses: number = conses.length;
  let vcvSyllable: Array<number> = [0, 1];
  const words = { words: [] };
  let mean: object;
  let index: number = 0;
  while (true) {
    if (vcvSyllable[1] >= numbersOfVowels) {
      vcvSyllable[1] = vcvSyllable[1] % numbersOfVowels;
      vcvSyllable[0]++;
    }
    if (vcvSyllable[0] >= numbersOfVowels) {
      break;
    }
    mean = lang.means[index];
    words.words[index] = {
      entry: {
        id: index,
        form:
          lang.conses[index % numbersOfConses] +
          vowels[vcvSyllable[0]] +
          vowels[vcvSyllable[1]] +
          conses[index % numbersOfConses],
        ...mean,
      },
    };
    vcvSyllable[1]++;
    index++;
  }
  vcvSyllable = [0, 0, 0];
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
    mean = lang.means[index];
    words.words[index] = {
      entry: {
        id: index,
        form:
          conses[index % numbersOfConses] +
          vowels[vcvSyllable[0]] +
          conses[vcvSyllable[1]] +
          vowels[vcvSyllable[2]],
        ...mean,
      },
    };
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
    mean = lang.means[index];
    words.words[index] = {
      entry: {
        id: index,
        form:
          conses[index % numbersOfConses] +
          vowels[vcvSyllable[0]] +
          conses[vcvSyllable[1]] +
          vowels[vcvSyllable[2]] +
          conses[vcvSyllable[3]] +
          vowels[vcvSyllable[4]],
        ...mean,
      },
    };
    vcvSyllable[4]++;
    index++;
  }
  const result = {};
  Object.keys(words).forEach(function (key) {
    result[key] = words[key];
  });
  fs.writeFileSync("output.json", JSON.stringify(result, null, "\t"));
}

/*export function newGenerateWords(lang: any) {
    let index: number;
    let words: object[];
    while (true) {
        // index個目の音節の中にある重複する音素群を削除
        // ["c", "v", "c", "v"] => ["c", "v"]
        const phonemesPatternInSyllable = Array.from(new Set(lang.syllables[index]));

        let phonemesLength: number[] = [];
        let phonemesLengthTime: number = 0;
        // 残った音素群のうち、内包する音素数が最も多いものを調べる
        while (true) {
            // phonemesLengthTime個目の音素群が内包する音素数をphonemesLength[phonemesLengthTime]に代入
            phonemesLength[phonemesLengthTime] = lang.phonemes.phonemesPatternInSyllable[phonemesLengthTime].length
            if (phonemesLength[phonemesLengthTime] = undefined) {
                console.log('Error: phonemesLength[phonemesLengthTime] is undefined.')
                break;
            } else if (phonemesLengthTime >= lang.phonemes.length) {
                break;
            }
            phonemesLengthTime++;
        }
        // 参考: https://qiita.com/ndj/items/82e9c5a4518fe16e539f
        const aryMax = function (a, b) {return Math.max(a, b);};
        const mostPhoneme = phonemesPatternInSyllable[phonemesLength.reduce(aryMax)];

        // index個目の音節に当てはめることが可能な文字列を生成
        let syllable: number[] = [];
        while (true) {
            if (syllable[lang.syllables.length - 1] >= phonemesLength[lang.syllables.length - 1]) {

            }
        }
        index++;
    }
}*/

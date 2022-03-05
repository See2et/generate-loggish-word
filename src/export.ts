import * as fs from "fs";

export function generateLoggishWords(
  vowels: Array<string>,
  conses: Array<string>,
  lang: any
) {
  const numbersOfVowels: number = lang.vowels.length;
  const numbersOfConses: number = lang.conses.length;
  let syllable: Array<number> = [0, 1];
  const words = { words: [] };
  let mean: object;
  let index: number = 0;
  while (true) {
    if (syllable[1] >= numbersOfVowels) {
      syllable[1] = syllable[1] % numbersOfVowels;
      syllable[0]++;
    }
    if (syllable[0] >= numbersOfVowels) {
      break;
    }
    mean = lang.means[index];
    words.words[index] = {
      entry: {
        id: index,
        form:
          lang.conses[index % numbersOfConses] +
          vowels[syllable[0]] +
          vowels[syllable[1]] +
          conses[index % numbersOfConses],
        ...mean,
      },
    };
    syllable[1]++;
    index++;
  }
  syllable = [0, 0, 0];
  while (true) {
    if (syllable[2] >= numbersOfVowels) {
      syllable[2] = syllable[2] % numbersOfVowels;
      syllable[1]++;
    }
    if (syllable[1] >= numbersOfConses) {
      syllable[1] = syllable[1] % numbersOfConses;
      syllable[0]++;
    }
    if (syllable[0] >= numbersOfVowels) {
      break;
    }
    mean = lang.means[index];
    words.words[index] = {
      entry: {
        id: index,
        form:
          conses[index % numbersOfConses] +
          vowels[syllable[0]] +
          conses[syllable[1]] +
          vowels[syllable[2]],
        ...mean,
      },
    };
    syllable[2]++;
    index++;
  }
  syllable = [0, 0, 0, 0, 0];
  while (true) {
    if (syllable[4] >= numbersOfVowels) {
      syllable[4] = syllable[4] % numbersOfVowels;
      syllable[3]++;
    }
    if (syllable[3] >= numbersOfConses) {
      syllable[3] = syllable[3] % numbersOfConses;
      syllable[2]++;
    }
    if (syllable[2] >= numbersOfVowels) {
      syllable[2] = syllable[2] % numbersOfVowels;
      syllable[1]++;
    }
    if (syllable[1] >= numbersOfConses) {
      syllable[1] = syllable[1] % numbersOfConses;
      syllable[0]++;
    }
    if (syllable[0] >= numbersOfVowels) {
      break;
    }
    mean = lang.means[index];
    words.words[index] = {
      entry: {
        id: index,
        form:
          conses[index % numbersOfConses] +
          vowels[syllable[0]] +
          conses[syllable[1]] +
          vowels[syllable[2]] +
          conses[syllable[3]] +
          vowels[syllable[4]],
        ...mean,
      },
    };
    syllable[4]++;
    index++;
  }
  const result = {};
  Object.keys(words).forEach(function (key) {
    result[key] = words[key];
  });
  fs.writeFileSync("output.json", JSON.stringify(result, null, "\t"));
}

export function generateWords02(config: any) {
  const allPhonemes = getConcatenatedArray(config.phonemes);
  const largestSyllableLength = getLargestArrayLength(config.syllables);
  let words: Array<string>;
}

export function generateWordsOfASyllable() {
  // This function has a error.
  const phonemes = [
    ["a", "i", "u"],
    ["p", "t", "k", "s", "m", "n", "l"],
  ];
  const syllable = [phonemes[1], phonemes[0], phonemes[1], phonemes[0]];
  const config = { phonemes, syllable };

  const largestPhonemesInSyllable = getLargestArray(config.syllable);
  const baseSyllable = syllable.slice(
    largestPhonemesInSyllable,
    largestPhonemesInSyllable
  );

  let syllablesCount = 0;
  for (let index = 0; index < baseSyllable.length; index++) {
    syllablesCount = syllablesCount * baseSyllable[index].length;
  }

  let words: Array<string>;
  let word: string;
  for (let index = 0; index < syllablesCount; index++) {
    word = "";
    for (let letter = 0; letter < syllable.length; letter++) {
      word += syllable[index / syllable[letter].length];
    }
    words[index] = word;
  }
  const result = {};
  Object.keys(words).forEach(function (key) {
    result[key] = words[key];
  });
  fs.writeFileSync("output.json", JSON.stringify(result, null, "\t"));
}

function getLargestArrayLength(arrays: Array<Array<string>>) {
  let arraysLength = [0];
  for (let index = 0; index < arrays.length; index++) {
    arraysLength[index] = arrays[index].length;
  }
  const compare = function (a, b) {
    return b - a;
  };
  const largestArrayLength = arraysLength.sort(compare)[0];
  const result = largestArrayLength;
  return result;
}

function getLargestArray(arrays: Array<Array<string>>) {
  let arraysLength = [0];
  for (let index = 0; index < arrays.length; index++) {
    arraysLength[index] = arrays[index].length;
  }
  const compare = function (a, b) {
    return b - a;
  };
  const largestArrayLength = arraysLength.sort(compare)[0];
  let largestArray: number;
  for (let index = 0; index < arrays.length; index++) {
    if (arrays[index].length == largestArrayLength) largestArray = index;
  }
  const result = largestArray;
  return result;
}

function getConcatenatedArray(arrays: Array<Array<any>>) {
  let ConcatenatingArray = [];
  for (let item in arrays) {
    ConcatenatingArray = ConcatenatingArray.concat(arrays[item]);
  }
  const result = ConcatenatingArray;
  return result;
}

function isValidSyllable(word: Array<string>, syllables: Array<Array<string>>) {
  let isCorrect: boolean;
  for (let syllable = 0; syllable < syllables.length; syllable++) {
    for (let letter = 0; letter < word.length; letter++) {
      if (syllables[syllable].length !== word.length) {
        isCorrect = false;
      } else if (syllables[syllable][letter].includes(word[letter])) {
        isCorrect = true;
      } else {
        isCorrect = false;
      }
      if (!isCorrect) break;
    }
    if (isCorrect) break;
  }
  const result = isCorrect;
  return result;
}

function generateZeroItems(digits: number) {
  let wordNum = [0];
  for (let index = 0; index < digits; index++) {
    wordNum[digits] = 0;
  }
  const result = wordNum;
  return result;
}

/*export function generateWords01() {
  const phonemes = [
    ["a", "i", "u"],
    ["p", "t", "k", "s", "m", "n", "l"],
  ];
  const syllables = [
    [phonemes[0], phonemes[1], phonemes[0], phonemes[1]],
    [phonemes[1], phonemes[0], phonemes[1], phonemes[0], phonemes[1]],
  ];
  const lang = { phonemes, syllables };
  // ここまでConfig
  // 将来的にjsonで読み込む内容

  let syllablesLength: number[] = [];
  for (let index = 0; index < syllables.length; index++) {
    syllablesLength[index] = syllables[index].length;
  }
  const compare = function (a, b) {
    return b - a;
  };
  const largestSyllableLength = syllablesLength.sort(compare)[0];

  let allPhonemes: string[] = [];
  {
    let index: number = 0;
    for (let item in lang.phonemes) {
      allPhonemes = allPhonemes.concat(lang.phonemes[item]);
      index++;
    }
  }

  let syllableNum: number[] = [];
  for (let index = 0; index < largestSyllableLength - 1; index++) {
    syllableNum[index] = 0;
  }

  let syllable: string[] = [];
  let checkSumNum: number = 0;
  let checkSumPhonemes: string[] = allPhonemes.concat("");
  let canBreak: boolean = false;
  for (let index = 0; index < 10000; index++) {
    checkSumNum++;
    syllableNum[0]++;

    // 繰り上げ処理
    for (let beam = 0; beam < syllableNum.length; beam++) {
      if (syllableNum[beam] > allPhonemes.length) {
        syllableNum[beam + 1]++;
      }
      if (syllableNum[0] > allPhonemes.length) canBreak = true;
    }
    if (canBreak == true) break;

    syllable[0] = checkSumPhonemes[checkSumNum];
    for (let index2 = 1; index2 < syllableNum.length; index2++) {
      syllable[index2] = allPhonemes[syllableNum[index2 - 1]];
    }
    if (syllable[0] == "") syllable.shift;
    syllablesHasWord(lang, syllable);
  }
}

function syllablesHasWord(lang: any, syllable: string[]) {
  let success: boolean = false;
  // syllable = ["a", "p", "a", "p"];
  for (let index = 0; index < lang.syllables.length; index++) {
    // 音節の数だけループ
    for (let index2 = 0; index2 < syllable.length; index2++) {
      // 音節に含まれる音素の数だけループ
      let canBreak: boolean = false;
      if (lang.syllables[index][index2].includes(syllable[index2]) == true) {
        // console.log("Success: この音素は許容されています");
        success = true;
      } else {
        // console.log("Error: この音素は許容されていません");
        success = false;
        canBreak = true;
      }
      if (canBreak == true) break;
    }
    if (success == true) {
      break;
    }
  }
  if (success == true) {
    console.log(syllable);
  }
}*/
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

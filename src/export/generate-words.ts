import * as fs from "fs";

export function generateWords(
  config: any,
  outputFileName: string,
  meansFile: any
) {
  let words = [""];
  const wordsOfCcv: Array<string> = getWordsOfCcv(config);
  const wordsOfCvcv: Array<string> = getWordsOfCvcv(config);
  const wordsOfCvccv: Array<string> = getWordsOfCvccv(config);
  words = wordsOfCcv;
  for (let index = 0; index < wordsOfCvcv.length; index++) {
    words.push(wordsOfCvcv[index]);
  }
  for (let index = 0; index < wordsOfCvccv.length; index++) {
    words.push(wordsOfCvccv[index]);
  }
  const object: object = getObjectOfZpdic(words, meansFile);
  generateJson(object, outputFileName);
}

function getWordsOfCcv(config: any) {
  const vowelsNum: number = config.vowels.length;
  const consesNum: number = config.conses.length;
  const words = [""];
  let syllable = [0, 0];
  for (let index = 0; index < consesNum * vowelsNum; index++) {
    if (syllable[1] >= vowelsNum) {
      syllable[1] = syllable[1] % vowelsNum;
      syllable[0]++;
    }
    if (syllable[0] >= consesNum) {
      break;
    }
    words[index] =
      config.conses[index % consesNum] +
      config.conses[syllable[0]] +
      config.vowels[syllable[1]];
    syllable[1]++;
  }
  const result = words.filter(function (value) {
    return !(value == "");
  });
  return result;
}

function getWordsOfCvcv(config: any) {
  const vowelsNum: number = config.vowels.length;
  const consesNum: number = config.conses.length;
  const words = [""];
  let syllable = [0, 0, 0, 0];
  for (let index = 0; index < vowelsNum * consesNum * vowelsNum; index++) {
    if (syllable[2] >= vowelsNum) {
      syllable[2] = syllable[2] % vowelsNum;
      syllable[1]++;
    }
    if (syllable[1] >= consesNum) {
      syllable[1] = syllable[1] % consesNum;
      syllable[0]++;
    }
    if (syllable[0] >= vowelsNum) {
      break;
    }
    words[index] =
      config.conses[index % consesNum] +
      config.vowels[syllable[0]] +
      config.conses[syllable[1]] +
      config.vowels[syllable[2]];
    syllable[2]++;
  }
  const result = words;
  return result;
}

function getWordsOfCvccv(config: any) {
  const vowelsNum: number = config.vowels.length;
  const consesNum: number = config.conses.length;
  const words = [""];
  let syllable = [0, 0, 0, 0];
  for (
    let index = 0;
    index < vowelsNum * consesNum * consesNum * vowelsNum;
    index++
  ) {
    if (syllable[3] >= vowelsNum) {
      syllable[3] = syllable[3] % vowelsNum;
      syllable[2]++;
    }
    if (syllable[2] >= consesNum) {
      syllable[2] = syllable[2] % consesNum;
      syllable[1]++;
    }
    if (syllable[1] >= consesNum) {
      syllable[1] = syllable[1] % consesNum;
      syllable[0]++;
    }
    if (syllable[0] >= vowelsNum) {
      break;
    }
    if (!(syllable[1] == syllable[2])) {
      words[index] =
        config.conses[index % consesNum] +
        config.vowels[syllable[0]] +
        config.conses[syllable[1]] +
        config.conses[syllable[2]] +
        config.vowels[syllable[3]];
    }
    syllable[3]++;
  }
  const result = words.filter(function (value) {
    return !(value == "");
  });
  return result;
}

function getWordsOfCvcvcv(config: any) {
  const vowelsNum: number = config.vowels.length;
  const consesNum: number = config.conses.length;
  const words = [""];
  let syllable = [0, 0, 0, 0, 0, 0];
  for (
    let index = 0;
    index < vowelsNum * consesNum * vowelsNum * consesNum * vowelsNum;
    index++
  ) {
    if (syllable[4] >= vowelsNum) {
      syllable[4] = syllable[4] % vowelsNum;
      syllable[3]++;
    }
    if (syllable[3] >= consesNum) {
      syllable[3] = syllable[3] % consesNum;
      syllable[2]++;
    }
    if (syllable[2] >= vowelsNum) {
      syllable[2] = syllable[2] % vowelsNum;
      syllable[1]++;
    }
    if (syllable[1] >= consesNum) {
      syllable[1] = syllable[1] % consesNum;
      syllable[0]++;
    }
    if (syllable[0] >= vowelsNum) {
      break;
    }
    if (index == 1518) {
      index = index;
    }
    words[index] =
      config.conses[index % consesNum] +
      config.vowels[syllable[0]] +
      config.conses[syllable[1]] +
      config.vowels[syllable[2]] +
      config.conses[syllable[3]] +
      config.vowels[syllable[4]];
    syllable[4]++;
  }
  const result = words;
  return result;
}

function getWordsDuringCvcToCvcv(config: any) {
  const vowelsNum: number = config.vowels.length;
  const consesNum: number = config.conses.length;
  let vowelsAddSpace: Array<string> = config.vowels;
  vowelsAddSpace.push("");
  const vowelsAddSpaceNum: number = vowelsAddSpace.length;
  const words = [""];
  let syllable = [0, 0, 0, 0];
  for (let index = 0; index < vowelsNum * consesNum * vowelsNum; index++) {
    if (syllable[2] >= vowelsAddSpaceNum) {
      syllable[2] = syllable[2] % vowelsAddSpaceNum;
      syllable[1]++;
    }
    if (syllable[1] >= consesNum) {
      syllable[1] = syllable[1] % consesNum;
      syllable[0]++;
    }
    if (syllable[0] >= vowelsNum) {
      break;
    }
    words[index] =
      config.conses[index % consesNum] +
      config.vowels[syllable[0]] +
      config.conses[syllable[1]] +
      vowelsAddSpace[syllable[2]];
    syllable[2]++;
  }
  const result = words;
  return result;
}

function getObjectOfZpdic(words: Array<string>, meansFile: any) {
  const result = { words: [] };
  for (let index = 0; index < words.length; index++) {
    result.words[index] = {
      entry: {
        id: index,
        form: words[index],
      },
      ...meansFile.means[index],
    };
  }
  return result;
}

function generateJson(object: object, fileName: string) {
  const result = {};
  Object.keys(object).forEach(function (key) {
    result[key] = object[key];
  });
  fs.writeFileSync(`${fileName}.json`, JSON.stringify(result, null, "\t"));
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

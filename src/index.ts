import loggish from "../lang.config.json";
import * as fs from "fs";
import {
  generateLoggishWords,
  generateWords02,
  generateWordsOfASyllable,
} from "./export/main";
import { generateWords } from "./export/generate-words";
import means from "../means.json";

const phonemes = [
  ["a", "i", "u"],
  ["p", "t", "k", "s", "m", "n", "l"],
];
const syllables = [
  [phonemes[1], phonemes[0], phonemes[1], phonemes[0]],
  [phonemes[0], phonemes[1], phonemes[0], phonemes[1], phonemes[0]],
];
const config = { phonemes, syllables };

generateWords(loggish, "output", means);
// generateLoggishWords(loggish.vowels, loggish.conses, loggish);
// generateWords02(config);
// generateWordsOfASyllable;

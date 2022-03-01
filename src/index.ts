import loggish from "../lang.config.json";
import * as fs from "fs";
import { generateWords } from "./export";

generateWords(loggish.vowels, loggish.conses, loggish);

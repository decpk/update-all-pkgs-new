#! /usr/bin/env node

import chalk from "chalk";
import sum from "./math";

const [, , regex, askedFlags] = process.argv;
console.log(process.argv);
console.log(chalk.bold.red(sum(1, 2, 3)));

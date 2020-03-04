"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander = require("commander");
var Bootstrapper_1 = require("../lib/Bootstrapper");
var program = new commander.Command();
var version = require("../package.json").version;
program
    .name('standard-version')
    .version(version, '-v, --version')
    .option('-d, --debug', 'toggle debug mode');
new Bootstrapper_1.default(program).Bootstrap();
program.parse(process.argv);

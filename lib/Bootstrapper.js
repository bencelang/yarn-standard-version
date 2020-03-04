"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commands = require("./Commands");
var Bootstrapper = (function () {
    function Bootstrapper(program) {
        this.program = program;
    }
    Bootstrapper.prototype.Bootstrap = function () {
        var program = this.program;
        for (var commandName in commands) {
            commands[commandName](program);
        }
        this.program.on('command:*', function () {
            console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
            process.exit(1);
        });
    };
    return Bootstrapper;
}());
exports.default = Bootstrapper;

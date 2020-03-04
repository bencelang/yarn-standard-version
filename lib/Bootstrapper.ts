import * as commands from "./Commands";
import {Command} from "commander";
import chalk from "chalk";

export default class Bootstrapper {
  private readonly program: Command;
  constructor(program: Command) {
    this.program = program;
  }

  Bootstrap() {
    const program = this.program;

    for(let commandName in commands) {
      commands[commandName](program);
    }

    // error on unknown commands
    this.program.on('command:*', () => {
      console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
      process.exit(1);
    });
  }
}

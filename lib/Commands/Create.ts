import {Command} from "commander";

export default class Create extends Command {
  constructor(program: Command) {
    super();
    program
      .command("create <type>", {isDefault: true})
      .description("creates a new release")
      .action(this.Action);
  }

  Action() {

  }
}

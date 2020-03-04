import {Command} from "commander";

export default class Init extends Command {
  constructor(program: Command) {
    super();

    const $this = this;

    program
      .command("init")
      .description("initializes standard-version in an existing repository")
      .action(() => $this.Action());
  }

  public Action() {
    console.log("Initializing repository...");
  }
}

import commander = require("commander");
import Bootstrapper from "../lib/Bootstrapper";

const program = new commander.Command();
const version = require("../package.json").version;

program
  .name('standard-version')
  .version(version, '-v, --version')
  .option('-d, --debug', 'toggle debug mode');

new Bootstrapper(program).Bootstrap();

program.parse(process.argv);

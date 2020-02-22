import path from "path";
import fs from "fs";
import findUp from "find-up";
import yaml from "yaml";

const searchPatterns = [
  '.versionrc.js',
  '.versionrc.json',
  '.versionrc.yml',
  '.versionrc.yaml'
];

export default class ConfigResolver<T> {
  public resolve(cwd: string, configPath?: string): T | null {
    if (configPath) {
      configPath = path.resolve(configPath);

      if (fs.existsSync(configPath)) {
        return this.resolveFile(configPath);
      }
    }

    const filepath = findUp.sync(searchPatterns, {
      cwd,
      allowSymlinks: false
    });

    if (!filepath)
      return null;

    return this.resolveFile(filepath);
  }

  private resolveFile(filepath: string): T {
    const ext = filepath.match(/[\w.]+\.(.+)/)[1];
    let val;

    switch (ext) {
      case "js":
        val = require(filepath);
        break;
      case "yml":
      case "yaml":
        val = yaml.parse(fs.readFileSync(filepath).toString());
        break;
      case "json":
        val = fs.readFileSync(filepath).toJSON();
        break;
    }

    return val as T;
  }
}

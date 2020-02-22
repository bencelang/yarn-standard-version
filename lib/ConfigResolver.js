"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var fs_1 = require("fs");
var find_up_1 = require("find-up");
var yaml_1 = require("yaml");
var searchPatterns = [
    '.versionrc.js',
    '.versionrc.json',
    '.versionrc.yml',
    '.versionrc.yaml'
];
var ConfigResolver = (function () {
    function ConfigResolver() {
    }
    ConfigResolver.prototype.resolve = function (cwd, configPath) {
        if (configPath) {
            configPath = path_1.default.resolve(configPath);
            if (fs_1.default.existsSync(configPath)) {
                return this.resolveFile(configPath);
            }
        }
        var filepath = find_up_1.default.sync(searchPatterns, {
            cwd: cwd,
            allowSymlinks: false
        });
        if (!filepath)
            return null;
        return this.resolveFile(filepath);
    };
    ConfigResolver.prototype.resolveFile = function (filepath) {
        var ext = filepath.match(/[\w.]+\.(.+)/)[1];
        var val;
        switch (ext) {
            case "js":
                val = require(filepath);
                break;
            case "yml":
            case "yaml":
                val = yaml_1.default.parse(fs_1.default.readFileSync(filepath).toString());
                break;
            case "json":
                val = fs_1.default.readFileSync(filepath).toJSON();
                break;
        }
        return val;
    };
    return ConfigResolver;
}());
exports.default = ConfigResolver;

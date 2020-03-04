"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var Init = (function (_super) {
    __extends(Init, _super);
    function Init(program) {
        var _this = _super.call(this) || this;
        var $this = _this;
        program
            .command("init")
            .description("initializes standard-version in an existing repository")
            .action(function () { return $this.Action(); });
        return _this;
    }
    Init.prototype.Action = function () {
        console.log("Initializing repository...");
    };
    return Init;
}(commander_1.Command));
exports.default = Init;

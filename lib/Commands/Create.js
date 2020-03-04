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
var Create = (function (_super) {
    __extends(Create, _super);
    function Create(program) {
        var _this = _super.call(this) || this;
        program
            .command("create <type>", { isDefault: true })
            .description("creates a new release")
            .action(_this.Action);
        return _this;
    }
    Create.prototype.Action = function () {
    };
    return Create;
}(commander_1.Command));
exports.default = Create;

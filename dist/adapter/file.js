"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveFile = exports.readFile = exports.createNewFolder = exports.fileExist = void 0;
var shell = require("shelljs");
var fs = require("fs");
function fileExist(patch) {
    return fs.existsSync(patch);
}
exports.fileExist = fileExist;
function createNewFolder(patch) {
    return fs.mkdirSync(patch);
}
exports.createNewFolder = createNewFolder;
function readFile(patch) {
    return fs.readdirSync(patch);
}
exports.readFile = readFile;
function moveFile(name, patch) {
    return shell.mv(name, patch);
}
exports.moveFile = moveFile;
//# sourceMappingURL=file.js.map
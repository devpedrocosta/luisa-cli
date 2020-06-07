#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewFolder = void 0;
var fs = require("fs");
function createNewFolder(patch) {
    return fs.mkdirSync(patch);
}
exports.createNewFolder = createNewFolder;
console.log(createNewFolder(''));
//# sourceMappingURL=index.js.map
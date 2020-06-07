import shell = require('shelljs');
import fs = require('fs');

export function fileExist(patch: string) {
  return fs.existsSync(patch);
}

export function createNewFolder(patch: string) {
  return fs.mkdirSync(patch);
}

export function readFile(patch: string) :string[] {
  return fs.readdirSync(patch);
}

export function moveFile(name: string, patch: string) {
  return shell.mv(name, patch);
}

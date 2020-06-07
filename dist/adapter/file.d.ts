import * as shell from 'shelljs';
export declare function fileExist(patch: string): boolean;
export declare function createNewFolder(patch: string): void;
export declare function readFile(patch: string): string[];
export declare function moveFile(name: string, patch: string): shell.ShellString;

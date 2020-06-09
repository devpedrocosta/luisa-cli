import {fileExist, readFile, createNewFolder, moveFile} from './file';

import * as mock from 'mock-fs';
const dir = 'dir.md';
const tempDir = 'temp.md';
const patch = '/test';
beforeEach(async () => {
  mock({
    '/test': {
      'dir.md': 'hello world!',
    },
    'path/to/some.txt': 'hello world!',
    '/mov': '',
  });
});

afterEach(async () => {
  mock.restore();
});

describe(' Fs functions testt ', () => {
  it('Shold file exist on mock directory ', async () => {
    expect.assertions(1);
    const file = fileExist(`${patch}/${dir}`);
    expect(file).toBeTruthy();
  });
  it('Shold file dont exist on mock directory ', async () => {
    expect.assertions(1);
    const file = fileExist(`${patch}/${tempDir}`);
    expect(file).toBeFalsy();
  });

  it('Shold read file name ', async () => {
    expect.assertions(1);
    const file = readFile(`${patch}`);
    expect(file).toEqual([`${dir}`]);
  });

  it('Shold read file name ', async () => {
    expect.assertions(1);
    createNewFolder(`${patch}/${tempDir}`);
    const file = fileExist(`${patch}/${tempDir}`);
    expect(file).toBeTruthy();
  });

  it('Shold move file  ', async () => {
    expect.assertions(1);
    const move = moveFile('path/to/some.txt', '/mov');
    expect(move).toBeTruthy();
  });
});

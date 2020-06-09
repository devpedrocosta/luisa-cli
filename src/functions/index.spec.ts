import {createFile, runCreator} from './index';
import * as mock from 'mock-fs';
const dir = 'dir.md';
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

describe('  functions testt ', () => {
  it('Shold create a file ', async () => {
    expect.assertions(1);
    const object = {
      file: {name: dir, extension: 'md'},
      patch,
    };
    const file = createFile(object);
    expect(file).toBeNull();
  });

  it('Shold create a file ', async () => {
    expect.assertions(1);
    const object = {
      file: {name: dir, extension: 'md'},
      patch: null,
    };
    const file = createFile(object);
    expect(file).toBeNull();
  });
  it('Shold  run Creator  dont return function void', async () => {
    expect.assertions(1);

    const file = runCreator(patch);
    expect(file).toBeUndefined();
  });
});

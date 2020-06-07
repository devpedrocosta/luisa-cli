const fs = require('fs');
import {fileExist,createNewFolder,readFile} from './file';

const mock = require('mock-fs');
 
mock({
  'path/to/fake/dir': {
    'some-file.txt': 'file content here',
    'empty-dir': {/** empty directory */}
  },
  'path/to/some.png': Buffer.from([8, 6, 7, 5, 3, 0, 9]),
  'some/other/path': {/** another empty directory */}
});
jest.mock('fs') ;


describe(' Fs functions testt ', () => {
  beforeAll(() => {
    fs.writeFileSync.mockClear();
    fs.readFileSync.mockReturnValue(false);
    fs.existsSync.mockReturnValue(false);
    fs.mkdirSync.mockReturnValue(true);

  });


 

  it('returnNameInJsonFile', () => {
   
    const name = readFile('path/to/fake/dir');
    expect(name).toBe('test');

  });




  it('should file dont exist ', () => {
    expect(fileExist('testmock')).toBe(false);
  });

  it('should  file exist ', () => {
    fs.existsSync.mockReturnValue(true);
    expect(fileExist('testmock')).toBe(true);
  });


  it('should have called with...', () => {
    fileExist('testmock')
    expect(fs.existsSync).toHaveBeenCalledWith(
      'testmock'
    );
  });
});
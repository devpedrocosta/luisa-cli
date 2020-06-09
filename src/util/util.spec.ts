import {getExt, isFolder, patchCreator} from './util';
const fileTest = 'mamadii.txt';
const fileExtension = 'txt';

describe(' Util functions test ', () => {
  it('Should get extension file ', async () => {
    expect.assertions(1);
    const file = fileTest;
    expect(getExt(file)).toEqual(fileExtension);
  });

  it('Should folder ', async () => {
    expect.assertions(1);
    const file = fileTest;
    expect(isFolder(file)).toEqual(file);
  });
  it('Should folder is empty', async () => {
    expect.assertions(1);
    const file = '';
    expect(isFolder(file)).toEqual('');
  });

  it('Should create patch and return name', async () => {
    expect.assertions(1);
    const object = {
      file: {name: fileTest, extension: fileExtension},
      patch: null,
    };
    expect(patchCreator(object)).toEqual(`Storage-${object.file.extension}`);
  });

  it('Should create patch and return patch', async () => {
    expect.assertions(1);
    const object = {
      file: {name: fileTest, extension: fileExtension},
      patch: '/user/patch',
    };
    expect(patchCreator(object)).toEqual(
        `${object.patch}/Storage-${object.file.extension}`,
    );
  });
});

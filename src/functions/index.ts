import {Folder, File} from '../interface/file';
import {
  fileExist,
  createNewFolder,
  moveFile,
  readFile,
} from '../adapter/file';
import {getExt, isFolder, patchCreator} from '../util/util';

export function createFile(folder: Folder) {
  const filepatch = patchCreator(folder);
  fileExisteOnFolder(filepatch);
  return moveFile(folder.file.name, filepatch);
}

function fileExisteOnFolder(patch: string): void {
  if (!fileExist(patch)) {
    createNewFolder(patch);
  }
}

function settingPatch(arquiv: Folder) {
  return createFile(arquiv);
}

function createObject(file: string): File {
  return {
    extension: getExt(isFolder(file)) as string,
    name: file,
  };
}

export function runCreator(patch: string | null): void {
  readFile(patch || process.cwd())
      .map((file) => {
        return createObject(file) as File;
      })
      .filter((file) => file.extension)
      .map((file) => settingPatch({file, patch}));
}

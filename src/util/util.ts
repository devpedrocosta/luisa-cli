import {Folder} from '../interface/file';

export function getExt(filename: string) {
  return filename.split('?')[0].split('#')[0].split('.').pop();
}

export function isFolder(file: string): string {
  return file.includes('.') ? file : '';
}

export function patchCreator(folder: Folder): string {
  return `${folder.patch ? `${folder.patch}/` : ''}Storage-${
    folder.file.extension
  }`.trim();
}

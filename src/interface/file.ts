export interface Folder{
    file:File;
    patch:string |null;

}

export interface File {
    name:string;
    extension:string;
}
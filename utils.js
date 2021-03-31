export const convertPathToFileName = (path) => {
    const stringArrayWithFileName = path.split('/');
    const fileNameIndex = stringArrayWithFileName.length - 1;
    const fileName = stringArrayWithFileName[fileNameIndex];
    return fileName;

}
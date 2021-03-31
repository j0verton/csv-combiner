export const parseCSVFile = async (csvFilePath) => {
    var fileContent;

    return new Promise(function (resolve) {
        fileContent = fs.readFileSync(path, { encoding: 'utf8' });
        resolve(fileContent);
    });
}
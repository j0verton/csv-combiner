export const filterOutCSVFilesFromArgumentArray = (arr) => {
    return arr.filter(path => path.endsWith(".csv"))
}

export const convertPathToFileName = (path) => {
    const stringArrayWithFileName = path.split('/');
    const fileNameIndex = stringArrayWithFileName.length - 1;
    const fileName = stringArrayWithFileName[fileNameIndex];
    return fileName;

}

export const changeHeaderToFileName = (singleFileDataArray) => {

    const header = singleFileDataArray[0]

    // rather than target the index based on the structure of the fixtures 
    // I iterated over the whole header looking for .csv extensions
    // so the app can be used for files with different numbers of columns  
    // if the file came with a column that had .csv this would create problems
    // if we want to solve that could just target the last item in the array 
    header.map(item => {
        if (item.endsWith(".csv")) {
            //splice(index, # of elements, content)
            return singleFileDataArray[0].splice(2, 1, 'filename')
        }
    })
}
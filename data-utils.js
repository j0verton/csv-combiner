import InputError from './errors/input-error.js'
export const filterOutCSVFilesFromArgumentArray = (arr) => {
    //save filter result to a variable and and add an if else
    //returning an error if no .csvs present 

    const results = arr.filter(path => path.endsWith(".csv"))
    if (results.length > 1) {
        return results

    } else if (results.length === 0 || results.length === 1) {
        throw new InputError()
    }

}



export const convertPathToFileName = (path) => {
    const stringArrayWithFileName = path.split('/');
    const fileNameIndex = stringArrayWithFileName.length - 1;
    const fileName = stringArrayWithFileName[fileNameIndex];
    return fileName;
}


/// *************************
//The following functions were part of my original build, but they became unnecessary 
//when i refactored the application focusing on speed. 
//I left them in, in case you wanted to see a bit of my process.
//Normally I would have removed them


//This is no longer used, see the comment on removeUnnescassaryHeaders().
//with out that function this became unnecessary.
export const changeHeaderToFileName = (singleFileDataArray) => {
    const header = singleFileDataArray[0]
    // rather than target the index based on the structure of the fixtures 
    // I iterated over the whole header looking for .csv extensions
    // so the app can be used for files with different numbers of columns  
    // if the file came with a column that had a .csv header this would create a problem
    // if we want to solve that could just target the last item in the array 
    header.map(item => {
        if (item.endsWith(".csv")) {
            //splice(index, # of elements, content)
            return singleFileDataArray[0].splice(2, 1, 'filename')
        }
    })
}

//I opted not to use this because i thought it might take too long to process a shift,
// re-indexing very item, with a large array.
//Instead I skipped the header in the initial parse and implemented a second 
//parse that only took the header
export const removeUnnescassaryHeaders = (data) => {
    for (let i = 0; i < data.length; i++) {
        if (i !== 0) {
            data[i].shift()
        }
    }
}
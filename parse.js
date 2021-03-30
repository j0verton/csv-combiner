import csv from 'fast-csv'

export const parseCSVFileArray = (arrayOfCSVFiles) => {
    // parse the csv files into an array of objects
    const arrayOfDataObjects = arrayOfCSVFiles.map(file => {

        const stringArrayWithFileName = file.split('/');

        const fileNameIndex = stringArrayWithFileName.length - 1;

        const fileName = stringArrayWithFileName[fileNameIndex];

        const output = csv.parseFile(arrayOfCSVFiles[0])
            .on('error', error => console.error(error))
            .on('data', row => console.log(`ROW=${JSON.stringify(row)}`))
            .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));

    })
    // console.log(arrayOfDataObjects)
    // const output = csv.parseFile(arrayOfCSVFiles[0])
    //     .on('error', error => console.error(error))
    //     .on('data', row => console.log(`ROW=${JSON.stringify(row)}`))
    //     .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));

    // console.log(output);
    // add a new colum with the filename
    // deal with bad data somehow

    //
}
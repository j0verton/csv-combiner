import csv from 'csv-parse';
import parse from 'csv-parse';
import fs from 'fs'
// const fs = require('fs');
import neatCsv from 'neat-csv';

export const parseCSVFileArray = async (arrayOfCSVFiles) => {




    // readCSVData = async (filePath): Promise<any> => {
    //     const parseStream = parse({ delimiter: ',' });
    //     const data = await getStream.array(fs.createReadStream(filePath).pipe(parseStream));
    //     return data.map(line => line.join(',')).join('\n');
    // }

    //     return Promise.all(arrayOfCSVFiles.forEach(async file => {
    //         const stringArrayWithFileName = file.split('/');

    //         const fileNameIndex = stringArrayWithFileName.length - 1;

    //         const fileName = stringArrayWithFileName[fileNameIndex];

    //         const data = await processFile(file)
    //         // console.log(data);
    //         return data
    //     })).then(array => {
    //         console.log(array)
    //     })
    // }



    // async function processFile(file) {
    //     const records = []
    //     const parser = fs
    //         .createReadStream(file)
    //         .pipe(parse({
    //             // CSV options if any
    //         }));
    //     for await (const record of parser) {
    //         // Work with each record
    //         records.push(record)
    //     }
    //     // console.log(records[1])
    //     return records
}


// return arrayOfCSVFiles.map(async (file) => {

//     const stringArrayWithFileName = file.split('/');

//     const fileNameIndex = stringArrayWithFileName.length - 1;

//     const fileName = stringArrayWithFileName[fileNameIndex];

//     const results = [];
//     // processFile(file).then(res => {
//     //     console.log(res);
//     // })
//     return await (async () => {
//         return processFile(file)
//         // console.log(records);
//         // return records
//     })()

// await fs.createReadStream(file)
//     .pipe(csv())
//     .on('header', function (header) {
//         header.push("filename");
//         results.push(header);
//     })
//     .on('data', function (data) {
//         data.push(fileName);
//         results.push(data);
//     })
//     .on('end', () => {
//         return new Promise(() => { console.log("parse complete") })
//     });
// })
// console.log(arrayOfDataObjects, "arrayOfDataObjects")
// return arrayOfDataObjects




// (async () => {
//     console.log(await neatCsv(fileName));
//     //=> [{type: 'unicorn', part: 'horn'}, {type: 'rainbow', part: 'pink'}]
// })();





// return parseFile(fileName).then(response => {
//     console.log(response)
//     return response
// })



// return fs.createReadStream(file)
//     .pipe(csv())
//     .on('data', function (data) {
//         data.newColumn = fileName;
//         dataArray.push(data);
//     })


// const parseFile = async (fileName) => {
//     records = []
//     const parser = fs
//         .createReadStream(fileName)
//         .pipe(parse({
//             // CSV options if any
//         }));
//     for await (const record of parser) {
//         // Work with each record
//         records.push(record)
//     }
//     return records
// }












    // parse the csv files into an array of objects
    // const arrayOfDataObjects = arrayOfCSVFiles.map(file => {

    //     const stringArrayWithFileName = file.split('/');

    //     const fileNameIndex = stringArrayWithFileName.length - 1;

    //     const fileName = stringArrayWithFileName[fileNameIndex];
    //     const csvStream = format({ headers: true }).transform(row => ({
    //         header1: row.header1,
    //         header2: row.header2,
    //         header3: "fileName",
    //     }));

    //     csvStream.pipe(process.stdout).on('end', () => process.exit());

    //     csvStream.write({ header1: 'value1a', header2: 'value2a', header3: fileName });
    //     csvStream.end();





    // const output = csv.parseFile(file)
    //     .on('error', error => console.error(error))
    //     .on('data', row => console.log(`ROW=${JSON.stringify(row)}`))
    //     .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));

    // })
    // console.log(arrayOfDataObjects)
    // const output = csv.parseFile(arrayOfCSVFiles[0])
    //     .on('error', error => console.error(error))
    //     .on('data', row => console.log(`ROW=${JSON.stringify(row)}`))
    //     .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));

    // console.log(output);
    // add a new colum with the filename
    // deal with bad data somehow

    //
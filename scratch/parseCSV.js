// import csv from 'csv-parse';
// import parse from 'csv-parse';
// // import finished from 'csv-parse';
// import fs from 'fs'
// // const fs = require('fs');
// import neatCsv from 'neat-csv';
// import { convertPathToFileName } from './utils.js';
// // import { stdout } from 'node:process';
import stream from 'stream';


export const parseCSVFile = async (csvFilePath) => {
    const fileName = convertPathToFileName(csvFilePath)
    const results = []
    console.log("csvFilePath in function", csvFilePath)
    // fs.createReadStream(csvFilePath)
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
    //         return "finished"
    //     });
    // console.log(parser)
    // await finished(parser);

    const parser = fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('header', function (header) {
            header.push("filename");
            results.push(header);
        })
        .on('data', function (data) {
            data.push(fileName);
            results.push(data);
        })
    await stream.finished(parser);
    return results
}
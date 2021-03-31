import csv from 'csv-parse';
import parse from 'csv-parse';
import finished from 'csv-parse';

import fs from 'fs'
// const fs = require('fs');
import neatCsv from 'neat-csv';
import { convertPathToFileName } from './utils.js';
// import { stdout } from 'node:process';

export const parseCSVFile = async (csvFilePath) => {
    const fileName = convertPathToFileName(csvFilePath)
    const results = []
    console.log(csvFilePath)

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
    await finished(parser);
    return results
}
import csv from 'csv-parser';
import parse from 'csv-parse';
import fs from 'fs'
// const fs = require('fs');
import neatCsv from 'neat-csv';
import { convertPathToFileName } from './utils.js';
// import { stdout } from 'node:process';

export const parseCSVFileArray = (arrayOfCSVFiles) => {
    const arrayOfDataObjects = arrayOfCSVFiles.map(file => {
        const fileName = convertPathToFileName(file);
        const results = [];
        return fs.createReadStream(file)
            .pipe(csv())
            .on('data', function (data) {
                data.push(fileName);
                results.push(data);
            })
            .on('end', () => {
                console.log(results)
            })
    })
}
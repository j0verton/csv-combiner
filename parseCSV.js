import csv from 'csv-parse';
import parse from 'csv-parse';
import fs from 'fs'
// const fs = require('fs');
import neatCsv from 'neat-csv';
// import { stdout } from 'node:process';

export const parseCSVFileArray = (arrayOfCSVFiles) => {
    const arrayOfDataObjects = arrayOfCSVFiles.map(file => {
        const stringArrayWithFileName = file.split('/');
        const fileNameIndex = stringArrayWithFileName.length - 1;

        const fileName = stringArrayWithFileName[fileNameIndex];
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
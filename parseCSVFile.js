import fs from 'fs'
import csv from 'csv-parse';
import { convertPathToFileName } from './utils.js';

export const parseCSVFile = async (csvFilePath) => {
    const fileName = convertPathToFileName(csvFilePath)
    let results = []
    return new Promise(function (resolve) {
        fs.createReadStream(csvFilePath)
            .pipe(csv())
            .on('data', function (data) {
                data.push(fileName);
                results.push(data);
            })
            .on('end', () => {
                resolve(results)
            });
    });
}

export const ParseAllCSVsAsynchronously = async (csvFileArray) => {
    return Promise.all(csvFileArray.map(item => parseCSVFile(item)))
}
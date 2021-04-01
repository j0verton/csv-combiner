import fs from 'fs'
import csv from 'csv-parse';
import { convertPathToFileName } from './data-utils.js';
import stringify from "csv-stringify";


export const parseCSVFile = async (csvFilePath) => {
    const fileName = convertPathToFileName(csvFilePath)
    let results = []
    return new Promise(function (resolve) {
        fs.createReadStream(csvFilePath)
            .pipe(csv(
                {
                    // 
                    skip_lines_with_error: true,

                    // I skipped the headers in an attempt to make the application faster when combining later
                    from: 2
                }
            ))
            .on('data', function (data) {
                data.push(fileName);
                results.push(data);
            })
            .on('end', () => {
                resolve(results)
            });
    });
}

export const parseAllCSVsAsynchronously = async (csvFileArray, parsingFunction) => {
    return Promise.all(csvFileArray.map(item => parsingFunction(item)))
}

export const parseHeader = async (csvFilePath) => {
    const fileName = convertPathToFileName(csvFilePath)
    let results = []
    return new Promise(function (resolve) {
        fs.createReadStream(csvFilePath)
            .pipe(csv(
                {
                    to_line: 1
                }
            ))
            .on('data', function (data) {
                data.push("filename");
                results.push(data);
            })
            .on('end', () => {
                resolve(results)
            });
    });
}

export const outputToCSV = (headerArray, dataArray) => {
    stringify(headerArray[0])
        .pipe(process.stdout)
    dataArray.forEach(set => {
        stringify(set)
            .pipe(process.stdout)
    })
}
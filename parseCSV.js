import csv from 'csv-parse';
import parse from 'csv-parse';
import finished from 'csv-parse';

import fs from 'fs'
// const fs = require('fs');
import neatCsv from 'neat-csv';
import { convertPathToFileName } from './utils.js';
// import { stdout } from 'node:process';

export const parseCSVFile = async (csvFilePath) => {
    const records = []
    console.log(csvFilePath)

    const parser = fs
        .createReadStream(csvFilePath)
        .pipe(parse({
            // CSV options if any
        }));
    console.log(parser)
    parser.on('readable', function () {

        let record;
        while (record = parser.read()) {
            records.push(record)
        }
    });
    await finished(parser);
    return records
}
import * as csv from '@fast-csv/format'
// import csv from 'fast-csv';
// import { format } from 'fast-csv.format';

const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const User = require('./models/user');

export const parseCSVFileArray = (arrayOfCSVFiles) => {




    const arrayOfDataObjects = arrayOfCSVFiles.map(file => {

        const stringArrayWithFileName = file.split('/');

        const fileNameIndex = stringArrayWithFileName.length - 1;

        const fileName = stringArrayWithFileName[fileNameIndex];



        fs.createReadStream(path.resolve(file))
            .pipe(csv.parse({ headers: true }))
            // pipe the parsed input into a csv formatter
            .pipe(csv.format({ headers: true }))
            // Using the transform function from the formatting stream
            .transform((row, next) => {
                if (err) {
                    return next(err);
                }
                return next(null, {
                    id: row.id,
                    firstName: row.first_name,
                    lastName: row.last_name,
                    address: row.address,
                    // properties from user
                    isVerified: user.isVerified,
                    hasLoggedIn: user.hasLoggedIn,
                    age: user.age,
                });

            })
            .pipe(process.stdout)
            .on('end', () => process.exit());

    })
















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
}
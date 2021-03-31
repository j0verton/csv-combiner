#!/usr/bin/env node

// console.log("hello world");
// console.log(process.argv);
import csv from 'csv-parser';

import fs from 'fs'
import { filterOutCSVs } from "./filter-csv.js";
import { parseCSVFileArray } from "./parseCSV.js";
import { convertPathToFileName } from './utils.js';
import readline from 'readline';

async function csvCombiner(arr) {
    //maybe because I'm insane here's the thing to do, when the file runs 
    // const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("What is your name ? ", function (name) {
        rl.question("Where do you live ? ", function (country) {
            console.log(`${name}, is a citizen of ${country}`);
            rl.close();
        });
    });

    rl.on("close", function () {
        console.log("\nBYE BYE !!!");
        process.exit(0);
    });

    // remove non-csv files from the array of arguments

    const csvFileArray = filterOutCSVs(arr);
    // console.log(csvFileArray);
    // parse the csv files into an array of objects

    // ...
    // function readFile(path) {
    //     const results = [];
    //     const fileName = convertPathToFileName(path);
    //     console.log(fileName)
    //     return new Promise(function (resolve) {
    //         fs.createReadStream(path)
    //             .pipe(csv())
    //             .on('data', function (data) {
    //                 data.push(fileName);
    //                 results.push(data);
    //             })
    //         resolve(results);
    //     });
    // }

    // const data = readFile('./fixtures/accessories.csv')
    // console.log(data)












    // const arrayOfDataObjects = await parseCSVFileArray(csvFileArray)




    // add a new colum with the filename
    // deal with bad data somehow

    // search the two for duplicate data?
    // arrange the data?

    // combine the content of all the files as a single array of objects
    // return the final product

    // console.log(arrayOfDataObjects)

}


const errorProcessing = () => {


}

csvCombiner(process.argv)
#!/usr/bin/env node

// console.log("hello world");
// console.log(process.argv);
import csv from 'csv-parser';

import fs from 'fs'
import { filterOutCSVs } from "./filter-csv.js";
import { parseCSVFile } from "./parseCSV.js";
import { convertPathToFileName } from './utils.js';
import readline from 'readline';

async function csvCombiner(arr) {

    // remove non-csv files from the array of arguments
    console.log(arr)
    const csvFileArray = filterOutCSVs(arr);
    console.log(csvFileArray)
    //this is parseCSVFile
    // const functionWithPromise = item => {
    //     return Promise.resolve('ok')

    // }
    console.log(parseCSVFile(csvFileArray[0]))
    const anAsyncFunction = async item => {
        console.log(item)
        return parseCSVFile(item)
    }

    const getData = async () => {
        return Promise.all(csvFileArray.map(item => anAsyncFunction(item)))
    }

    getData().then(data => {
        console.log(data)
    })







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
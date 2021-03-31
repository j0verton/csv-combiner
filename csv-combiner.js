#!/usr/bin/env node
import fs from 'fs'
import generate from "csv-generate"
import stringify from "csv-stringify";
import { filterOutCSVFilesFromArgumentArray, changeHeaderToFileName } from "./data-utils.js";
import { parseCSVFile, parseAllCSVsAsynchronously, parseHeader } from "./parsing-functions.js";

async function main(arr) {

    // remove anythong without a .csv extension from the array of arguments
    const csvFileArray = filterOutCSVFilesFromArgumentArray(arr);

    //add some logic for cases when no csv is passed


    const data = await parseAllCSVsAsynchronously(csvFileArray, parseCSVFile);

    // data.map(dataSet => changeHeaderToFileName(dataSet));
    // console.log(data[0][0], data[1][0])

    //parse headers
    const headers = await parseAllCSVsAsynchronously(csvFileArray, parseHeader);
    // console.log(headers)


    stringify(headers[0])
        .pipe(process.stdout)
    data.forEach(set => {
        stringify(set)
            .pipe(process.stdout)
    })

    //combine the datasets into a single file
    //according to my research .concat() is likely the fastest option
    // const singleArray =
    //maybe skip this
    //output the file

    // process.stdout.write(headers[0])
}

main(process.argv)
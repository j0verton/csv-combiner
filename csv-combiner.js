#!/usr/bin/env node
import { filterOutCSVFilesFromArgumentArray, changeHeaderToFileName } from "./data-utils.js";
import { parseCSVFile, parseAllCSVsAsynchronously } from "./parsing-functions.js";

async function main(arr) {

    // remove anythong without a .csv extension from the array of arguments
    const csvFileArray = filterOutCSVFilesFromArgumentArray(arr);

    //add some logic for cases when no csv is passed


    const data = await parseAllCSVsAsynchronously(csvFileArray);

    data.map(dataSet => changeHeaderToFileName(dataSet));
    console.log(data[0][0], data[1][0])

    //remove unnecessary headers

    //combine the datasets into a single file

    //output the file

}

main(process.argv)
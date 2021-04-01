#!/usr/bin/env node
import { filterOutCSVFilesFromArgumentArray, changeHeaderToFileName } from "./data-utils.js";
import { parseCSVFile, parseAllCSVsAsynchronously, parseHeader, outputToCSV } from "./parsing-functions.js";

async function main(arr) {

    // remove anything without a .csv extension from the array of arguments
    const csvFileArray = filterOutCSVFilesFromArgumentArray(arr);

    //need to add some logic for cases when no csv is passed

    const data = await parseAllCSVsAsynchronously(csvFileArray, parseCSVFile);

    //parse headers
    const headers = await parseAllCSVsAsynchronously(csvFileArray, parseHeader);

    outputToCSV(headers, data)
}

main(process.argv)
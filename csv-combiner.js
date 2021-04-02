#!/usr/bin/env node
import { filterOutCSVFilesFromArgumentArray } from "./data-utils.js";
import { parseCSVFile, parseAllCSVsAsynchronously, parseHeader, outputToCSV } from "./parsing-functions.js";

async function main(arr) {
    // remove anything without a .csv extension from the array of arguments
    const csvFileArray = filterOutCSVFilesFromArgumentArray(arr);

    // awaits the return of all parsing data in an array of promises
    const data = await parseAllCSVsAsynchronously(csvFileArray, parseCSVFile);

    //parse headers seperately
    const headers = await parseAllCSVsAsynchronously(csvFileArray, parseHeader);

    //output header then data to avoid having to interate or manipulate the big data arrays
    outputToCSV(headers, data)
}

main(process.argv)
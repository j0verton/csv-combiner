#!/usr/bin/env node
import { filterOutCSVFilesFromArgumentArray } from "./data-utils.js";
import { parseCSVFile, parseAllCSVsAsynchronously, parseHeader, outputToCSV } from "./parsing-functions.js";

async function main(arr) {
    // remove anything without a .csv extension from the array of arguments
    const csvFileArray = filterOutCSVFilesFromArgumentArray(arr);

    const data = await parseAllCSVsAsynchronously(csvFileArray, parseCSVFile);

    //parse headers
    const headers = await parseAllCSVsAsynchronously(csvFileArray, parseHeader);
    //output header then data to avoid having to interate or manipulate the data arrays
    outputToCSV(headers, data)
}

main(process.argv)
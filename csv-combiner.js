#!/usr/bin/env node

// console.log("hello world");
// console.log(process.argv);

import { filterOutCSVs } from "./filter-csv.js";
import { parseCSVFileArray } from "./parse.js";

const csvCombiner = (arr) => {

    // remove non-csv files from the array of arguments
    const csvFileArray = filterOutCSVs(arr);
    // console.log(csvFileArray);
    // parse the csv files into an array of objects
    const arrayOfDataObjects = parseCSVFileArray(csvFileArray)

    // add a new colum with the filename
    // deal with bad data somehow

    // search the two for duplicate data?
    // arrange the data?

    // combine the content of all the files as a single array of objects
    // return the final product



}


const errorProcessing = () => {


}

csvCombiner(process.argv)
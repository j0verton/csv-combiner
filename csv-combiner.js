#!/usr/bin/env node
import { filterOutCSVs } from "./filter-csv.js";
import { parseCSVFile, ParseAllCSVsAsynchronously } from "./parseCSVFile.js";

import { convertPathToFileName } from './utils.js';

async function csvCombiner(arr) {

    // remove anythong without a .csv extension from the array of arguments
    const csvFileArray = filterOutCSVs(arr);

    //add some logic for cases when no csv is passed

    ParseAllCSVsAsynchronously(csvFileArray)
        .then(data => {
            console.log("data", data)
        })

}

csvCombiner(process.argv)
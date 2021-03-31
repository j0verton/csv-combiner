#!/usr/bin/env node

// console.log("hello world");
// console.log(process.argv);

import fs from 'fs'
import { filterOutCSVs } from "./filter-csv.js";
import { parseCSVFileArray } from "./parseCSV.js";

async function csvCombiner(arr) {





    // ...
    function readFile(path) {
        var fileContent;

        return new Promise(function (resolve) {
            fileContent = fs.readFileSync(path, { encoding: 'utf8' });
            resolve(fileContent);
        });
    }

    console.log(readFile('./fixtures/accessories.csv'))


    // remove non-csv files from the array of arguments


    // const csvFileArray = filterOutCSVs(arr);




    // console.log(csvFileArray);
    // parse the csv files into an array of objects



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
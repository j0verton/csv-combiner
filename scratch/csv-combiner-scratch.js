#!/usr/bin/env node
const { parseCSVFile } = require('../parseCSVFile.js');
const { filterOutCSVs } = require('../filter-csv.js')
require('fs');

async function csvCombiner(arr) {

    // remove non-csv files from the array of arguments
    console.log("arr", arr)
    const csvFileArray = filterOutCSVs(arr);
    console.log("csvFileArray", csvFileArray)
    //this is parseCSVFile
    // const functionWithPromise = item => {
    //     return Promise.resolve('ok')

    // }
    console.log("single item parse", parseCSVFile(csvFileArray[0]))
    const anAsyncFunction = async item => {
        console.log(item)
        return parseCSVFile(item)
    }

    const getData = async () => {
        return Promise.all(csvFileArray.map(item => anAsyncFunction(item)))
    }

    const data = await getData()


    console.log(data)







    // async function csvCombiner(arr) {
    //     const csvFileArray = filterOutCSVs(arr);
    //     filterOutCSVs()




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
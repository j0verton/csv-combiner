import assert from 'assert'
import { parseCSVFile } from '../parsing-functions.js';

import path from 'path'

describe('Parsing Function Tests', function () {
    describe('parse CSV File', function () {



        // tests remaining
        // should remove the '//' from an entry with incorrect format
        // should skip lines that would throw an error
        // should throw an error if no data is returned 

        let workingCSVPath = './test/test-fixtures/working-five-line.csv';
        let oddDataCSVPath = './test/test-fixtures/odd-data-five-line.csv';
        let blankCSVPath = './test/test-fixtures/blank.csv';

        let workingCSVExpectedResult = [['one', 'Satchels', 'working-five-line.csv'], ['two', 'Purses', 'working-five-line.csv'], ['three', 'Purses', 'working-five-line.csv'], ['four', 'Wallets', 'working-five-line.csv']]
        let oddDataCSVExpectedResult = [["one", "Blouses", "odd-data-five-line.csv"], ["two", "Cardigans", "odd-data-five-line.csv"], ["three", "Capris", "odd-data-five-line.csv"], ["four", "\"Gingham\" Shorts", "odd-data-five-line.csv"]]
        it('should return an array of the data in the .csv file without the header and with a new column for the filename', async function () {
            let response = await parseCSVFile(workingCSVPath)
            assert.deepEqual(response, workingCSVExpectedResult);
        });

        it('should return an array containing the strangely formatted data', async function () {
            let response = await parseCSVFile(oddDataCSVPath)
            assert.deepEqual(response, oddDataCSVExpectedResult);
        });
        //         it('should not throw an InputError when passed an array with 3 .csv files', function () {
        //             assert.doesNotThrow(() => { filterOutCSVFilesFromArgumentArray(arrayOne) }, InputError);
        //         });

        //         it('should throw an InputError when passed an array no .csv files', function () {
        //             // let response = filterOutCSVFilesFromArgumentArray(arrayTwo)
        //             assert.throws(() => { filterOutCSVFilesFromArgumentArray(arrayTwo) }, InputError);
        //         });

        //         it('should throw an InputError when passed an array containing one .csv file', function () {
        //             // let response = filterOutCSVFilesFromArgumentArray(arrayThree)
        //             assert.throws(() => { filterOutCSVFilesFromArgumentArray(arrayThree) }, InputError);
    });
});
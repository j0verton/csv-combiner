import assert from 'assert'
import { parseCSVFile } from '../parsing-functions.js';
describe('Parsing Function Tests', function () {
    describe('parse CSV File', function () {



        // tests remaining
        // should remove the '//' from an entry with incorrect format
        // should skip lines that would throw an error
        // should throw an error if no data is returned 



        let workingCSVPath = './test-fixtures/working-five-line.csv'
        let workingCSVExpectedResult = [["one", "Satchels"], ["two", "Purses"], ["three", "Purses"], ["four", "Wallets"]]

        it('should skip the header and return an array formatted from the data in the .csv file', async function () {
            let response = await parseCSVFile(workingCSVPath)
            assert.strictEqual(response, workingCSVExpectedResult);
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
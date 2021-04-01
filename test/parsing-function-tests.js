import assert from 'assert'
import { parseCSVFile } from '../parsing-functions.js';

import path from 'path'
import NoContentError from '../errors/no-content-error.js';

describe('Parsing Function Tests', function () {
    describe('parse CSV File', function () {



        // tests remaining
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

        it('should return an array containing an entry with an extra set of back-slashes ', async function () {
            let response = await parseCSVFile(oddDataCSVPath)
            assert.deepEqual(response, oddDataCSVExpectedResult);
        });

        it('should throw an NoContentError when passed an array no .csv files', function () {
            assert.throws(async () => { await parseCSVFile(oddDataCSVPath) }, NoContentError);
        });
    });
});